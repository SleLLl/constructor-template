import { getRequest } from '../data/api';
import { DataResponse } from '../data/api/DataResponse';
import { MainData } from '../domain/MainData';

const getProducts = async (str: string): Promise<DataResponse<MainData>> => {
  try {
    const response = await getRequest(`https://ac.cnstrc.com/search/${str}`, {
      key: 'key_fygjntHGW7usvxC8',
    });
    const data = response as MainData;
    return { ok: true, data };
  } catch (e) {
    return { ok: false };
  }
};

export default getProducts;
