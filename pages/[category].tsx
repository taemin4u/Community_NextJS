import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Header from '../components/Header';
import palette from '../styles/palette';
import Navigation from '../components/Navigation';

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

const NavWrapper = styled.div`
  position: sticky;
  top: 90px;
  left: 0;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${palette.beige_light};
  margin-left: 20px;
  border-radius: 20px;
`;

const FeedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 200vh;
`;

const Feed = styled.div`
  width: 95%;
  height: 100px;
  background-color: red;
`;

const MyPageWrapper = styled.div`
  position: sticky;
  top: 90px;

  height: 45vh;
  background-color: ${palette.beige_light};
  border-radius: 20px;
  margin-right: 20px;
`;
function Category() {
  const router = useRouter();
  console.log(router.query);
  return (
    <Wrapper>
      {/* Navigation */}
      <Navigation />
      {/* Feed */}

      <FeedWrapper>
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
      </FeedWrapper>

      {/* MyPage */}
      <MyPageWrapper></MyPageWrapper>
    </Wrapper>
  );
}

export default Category;
