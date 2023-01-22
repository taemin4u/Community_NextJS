import React from 'react';
import styled from 'styled-components';
import palette from '../styles/palette';
import Navigation from '../components/Navigation';
import Feed from '../components/Feed';
import Mypage from '../components/Mypage';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getFeedsAPI } from '../lib/api/list';
import { IList } from '../types/list';

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { category } = context.query;
    console.log(category);
    console.log('발');
    const { data } = await getFeedsAPI(category);
    return { props: { feeds: data } };
  } catch (error) {
    console.log(error);
    return { props: { feeds: [] } };
  }
};

function Category({
  feeds,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(feeds);
  const myFeeds: IList[] = feeds;
  return (
    <Wrapper>
      {/* Navigation */}
      <Navigation />
      {/* Feed */}
      <Feed feeds={myFeeds} />
      {/* MyPage */}
      <Mypage />
    </Wrapper>
  );
}

export default Category;
