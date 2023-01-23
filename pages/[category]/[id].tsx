import React from 'react';
import { Wrapper } from '.';
import Mypage from '../../components/Mypage';
import Navigation from '../../components/Navigation';

function Post() {
  return (
    <Wrapper>
      <Navigation />
      <div>여기에다 글써야징</div>
      <Mypage />
    </Wrapper>
  );
}

export default Post;
