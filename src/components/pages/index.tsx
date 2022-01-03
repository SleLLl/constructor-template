import React, { ChangeEvent, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import getProducts from '../../services/getProducts';
import * as S from './styles';

const MainPage = () => {
  const [value, setValue] = useState('apple');
  const { data, refetch } = useQuery(
    ['product', value],
    () => getProducts(encodeURIComponent(value)),
    {
      refetchOnWindowFocus: false,
      enabled: false,
      keepPreviousData: true,
    },
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    refetch();
  };

  useEffect(() => {
    refetch();
  }, []);

  return (
    <>
      <S.SearchWrapper onSubmit={onSubmit}>
        <S.Input value={value} onChange={onChange} />
        <S.PrimaryButton>search</S.PrimaryButton>
      </S.SearchWrapper>
      <S.Wrapper>
        {data?.data?.response.results.map((product) => (
          <S.Card key={product.data.id}>
            <S.Image src={product.data.image_url} />
            <p>{product.value}</p>
          </S.Card>
        ))}
      </S.Wrapper>
    </>
  );
};

export default MainPage;
