import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Header from '../components/Header';

const Title = styled.h1`
  font-size: 144px;
  text-align: center;
  margin-top: 140px;
`;

function Category() {
  const router = useRouter();
  let headerPosition = '';
  if (router.pathname === '/[category]') {
    headerPosition = 'fixed';
  }
  return (
    <>
      <Header headerPosition={headerPosition} />
      <Title>Hello, World!</Title>
    </>
  );
}

export default Category;
