import React from 'react';
import styled from 'styled-components';
import palette from '../styles/palette';
import { IList } from '../types/list';

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

const Title = styled.span`
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

function List({ feed }: { feed: IList }) {
  return (
    <Container>
      <p style={{ textAlign: 'center' }}>{feed.recommend}</p>
      <div style={{ backgroundColor: 'red', height: '50px' }}></div>
      <Wrapper>
        <TitleWrapper>
          <Title>{feed.title}</Title>
        </TitleWrapper>
        <Word>{feed.category}</Word>
        <Word>{feed.writer}</Word>
      </Wrapper>
    </Container>
  );
}

export default List;
