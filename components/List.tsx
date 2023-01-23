import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import palette from '../styles/palette';
import { IList } from '../types/list';
import { DefaultImage } from '../public/DefaultImage';

const Container = styled.div`
  width: 95%;
  height: 80px;
  display: grid;
  grid-template-columns: 40px 70px auto;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: 12px;
`;

const TitleWrapper = styled.div`
  height: 18px;
`;

const Title = styled.a`
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: ${palette.gray_48};
  &:hover {
    border-bottom: 2px solid black;
    color: black;
  }
`;

const Word = styled.h4`
  font-size: 11px;
  color: ${palette.gray_71};
`;

const getCategory = (category: string) => {
  switch (category) {
    case 'talk':
      return '자유';
      break;
    case 'info':
      return '정보';
    case 'humor':
      return '유머';
    case 'discuss':
      return '토론';
    default:
      break;
  }
};

function List({ feed }: { feed: IList }) {
  const category = getCategory(feed.category);
  let picture = feed.picture;
  if (picture === '') {
    picture = DefaultImage;
  }
  return (
    <Container>
      <p style={{ textAlign: 'center' }}>{feed.recommend}</p>
      <div style={{ backgroundImage: picture, height: '50px' }}></div>
      <Wrapper>
        <TitleWrapper>
          <Title href={`/${feed.category}/${feed.id}`}>{feed.title}</Title>
        </TitleWrapper>
        <Word>{category}</Word>
        <Word>작성자: {feed.writer}</Word>
      </Wrapper>
    </Container>
  );
}

export default List;
