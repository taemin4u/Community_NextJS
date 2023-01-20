import React from 'react';
import styled from 'styled-components';
import palette from '../styles/palette';

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

  h3 {
    cursor: pointer;
    &:hover {
      color: ${palette.beige_dark};
    }
  }
`;

function Navigation() {
  return (
    <NavWrapper>
      <h3>전체</h3>
      <h3>정보게시판</h3>
      <h3>자유게시판</h3>
      <h3>유머게시판</h3>
      <h3>토론게시판</h3>
    </NavWrapper>
  );
}

export default Navigation;
