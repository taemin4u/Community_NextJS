import React from 'react';
import styled from 'styled-components';
import palette from '../styles/palette';

const MyPageWrapper = styled.div`
  position: sticky;
  top: 90px;

  height: 45vh;
  background-color: ${palette.beige_light};
  border-radius: 20px;
  margin-right: 20px;
`;
function Mypage() {
  return <MyPageWrapper></MyPageWrapper>;
}

export default Mypage;
