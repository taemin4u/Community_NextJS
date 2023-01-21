import React from 'react';
import styled from 'styled-components';
import palette from '../styles/palette';

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

function List() {
  return (
    <Container>
      <p style={{ textAlign: 'center' }}>30</p>
      <div style={{ backgroundColor: 'red', height: '50px' }}></div>
      <Wrapper>
        <TitleWrapper>
          <Title>레전드레전드레전드레전드레전드레전드레전드레전드</Title>
        </TitleWrapper>
        <Word>우어</Word>
        <Word>힝</Word>
      </Wrapper>
    </Container>
  );
}

export default List;
