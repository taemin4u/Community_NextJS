import Link from 'next/link';
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

  a {
    cursor: pointer;
    &:hover {
      color: ${palette.beige_dark};
    }
  }
`;

function Navigation() {
  return (
    <NavWrapper>
      <Link href="/home">전체</Link>
      <Link href="/info">정보게시판</Link>
      <Link href="/talk">자유게시판</Link>
      <Link href="/humor">유머게시판</Link>
      <Link href="/discuss">토론게시판</Link>
    </NavWrapper>
  );
}

export default Navigation;
