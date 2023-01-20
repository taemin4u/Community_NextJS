import React from 'react';
import styled from 'styled-components';
import palette from '../styles/palette';
import { useForm } from 'react-hook-form';

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FeedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 200vh;
`;

const Search = styled.form`
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -30%;
`;

const Input = styled.input``;

const List = styled.div`
  width: 95%;
  height: 100px;
  background-color: red;
`;

interface IForm {
  keyword: string;
}
function Feed() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>();
  return (
    <div>
      <MenuWrapper>
        <Search onSubmit={handleSubmit(() => {})}>
          <div>
            <Input
              {...register('keyword', {
                minLength: {
                  value: 2,
                  message: '두 글자이상 입력하세요.',
                },
              })}
              placeholder="검색어를 입력하세요"
            />

            <button>제출</button>
          </div>
          <div>{errors.keyword?.message}</div>
        </Search>
      </MenuWrapper>
      <FeedWrapper>
        <List />
        <List />
        <List />
        <List />
        <List />
      </FeedWrapper>
    </div>
  );
}

export default Feed;
