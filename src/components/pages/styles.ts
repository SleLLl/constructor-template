import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-column-gap: 20px;
`;

const Card = styled.figure`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: contain;
`;

const SearchWrapper = styled.form`
  display: flex;
  padding: 40px;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 80%;
  padding: 10px;
  border: 1px solid #9cdcf1;
  border-radius: 5px;
`;

const PrimaryButton = styled.button`
  width: 18%;
  color: #fff;
  border: 1px solid #9cdcf1;
  font-size: 18px;
  border-radius: 5px;
  background-color: #4dcbcb;
`;

export { Card, Image, Input, PrimaryButton, SearchWrapper, Wrapper };
