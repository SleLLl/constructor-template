import { isEmpty } from 'lodash';
import queryString from 'query-string';

enum Methods {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

interface BaseRequest {
  method?: string;
  headers?: HeadersInit;
  body?: BodyInit | null | Record<string, unknown>;
}

const fetchHeaders = new Headers({
  'Cache-Control': 'no-cache',
});

export const authHeaders = (
  withoutAuth?: boolean,
): Record<string, string | undefined> => {
  const authHeaderFromStorage = localStorage.getItem('token');
  const headerObject = authHeaderFromStorage
    ? { Authorization: `Bearer ${JSON.parse(authHeaderFromStorage)}` }
    : {};
  return withoutAuth ? {} : headerObject;
};

export const generateHeaders = (withoutAuth?: boolean): HeadersInit => ({
  ...fetchHeaders,
  ...authHeaders(withoutAuth),
});

const objectToQueryString = (queryObject: Record<string, unknown>): string =>
  queryString.stringify(queryObject, {
    arrayFormat: 'bracket',
    skipEmptyString: true,
    skipNull: true,
  });

const baseRequest = (url: string, reqInit?: BaseRequest, withoutAuth?: boolean) =>
  fetch(url, {
    ...reqInit,
    headers: {
      ...(!(reqInit?.body instanceof FormData) && { 'Content-Type': 'application/json' }),
      ...generateHeaders(withoutAuth),
      ...reqInit?.headers,
    },
    body:
      reqInit?.body instanceof FormData ? reqInit.body : JSON.stringify(reqInit?.body),
  })
    .then(async (response) => {
      if (response.statusText === 'No Content') {
        return { ok: true };
      }

      let message;
      if (!response.ok) {
        message = await response?.text();
      }
      return !response.ok
        ? Promise.reject(message ?? response.statusText)
        : response.json();
    })
    .then((json) => (json ? json : Promise.reject(new Error(json.message))));

const baseBlobRequest = (url: string, reqInit?: BaseRequest, withoutAuth?: boolean) =>
  fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...generateHeaders(withoutAuth),
      ...reqInit?.headers,
    },
  })
    .then((response) => {
      if (response.status === 401) {
        localStorage.setItem('token', '');
        window.location.replace('/');
      }
      return response.blob();
    })
    .then((blob) => (blob.size !== 0 ? blob : Promise.reject(new Error('Check Blob'))));

export const postRequest = <T>(
  url: string,
  body?: BodyInit | Record<string, unknown>,
  withoutAuth?: boolean,
): Promise<T> => baseRequest(url, { method: Methods.POST, body }, withoutAuth);

export const putRequest = <T>(
  url: string,
  body?: BodyInit | Record<string, unknown>,
): Promise<T> => baseRequest(url, { method: Methods.PUT, body });

export const patchRequest = <T>(
  url: string,
  body?: BodyInit | Record<string, unknown>,
): Promise<T> => baseRequest(url, { method: Methods.PATCH, body });

export const deleteRequest = <T>(url: string): Promise<T> =>
  baseRequest(url, { method: Methods.DELETE });

export const getRequest = <T>(
  url: string,
  query?: Record<string, unknown>,
  headers?: Record<string, string>,
  withoutAuth?: boolean,
): Promise<T> => {
  const reqUrl = isEmpty(query) || !query ? url : `${url}?${objectToQueryString(query)}`;
  return baseRequest(reqUrl, { headers }, withoutAuth);
};

export const getBlobRequest = (
  url: string,
  headers?: Record<string, string>,
  withoutAuth?: boolean,
): Promise<Blob> => baseBlobRequest(url, { headers }, withoutAuth);
