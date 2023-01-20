import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Header from '../components/Header';
import palette from '../styles/palette';
import Navigation from '../components/Navigation';
import Feed from '../components/Feed';
import Mypage from '../components/Mypage';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 3fr 0.8fr;
  column-gap: 5px;
  padding-top: 80px;

  h3 {
    cursor: pointer;
    &:hover {
      color: ${palette.beige_dark};
    }
  }
`;

function Category() {
  const router = useRouter();
  console.log(router.query);
  return (
    <Wrapper>
      {/* Navigation */}
      <Navigation />
      {/* Feed */}
      <Feed />
      {/* MyPage */}
      <Mypage />
    </Wrapper>
  );
}

export default Category;
