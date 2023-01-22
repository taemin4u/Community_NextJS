import React from 'react';
import styled from 'styled-components';
import palette from '../styles/palette';
import { useForm } from 'react-hook-form';
import List from './List';
import { IList } from '../types/list';

const MenuWrapper = styled.div`
  margin: 12px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid ${palette.gray_dd};
`;

const FeedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Search = styled.form`
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -30%;
`;

const Button = styled.button`
  padding: 0 16px;
  height: 30px;
  border-radius: 21px;
  border: 0;
  background-color: white;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
  outline: none;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
  }
`;

const WriteButton = styled(Button)`
  position: relative;
  top: -10px;
  margin-right: 30px;
`;

const Input = styled.input`
  height: 30px;
  margin-right: 8px;
`;

interface IForm {
  keyword: string;
}

function Feed({ feeds }: { feeds: IList[] }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>();
  console.log('fed', feeds);
  return (
    <div>
      <MenuWrapper>
        <Search onSubmit={handleSubmit(() => {})}>
          <div style={{ marginLeft: '30px' }}>
            <Input
              {...register('keyword', {
                minLength: {
                  value: 2,
                  message: '두 글자이상 입력하세요.',
                },
              })}
              placeholder="검색어를 입력하세요"
            />

            <Button>제출</Button>
          </div>
          <div>{errors.keyword?.message}</div>
        </Search>
        <WriteButton>글쓰기</WriteButton>
      </MenuWrapper>
      <FeedWrapper>
        {feeds.map((feed) => (
          <List key={feed.id} feed={feed} />
        ))}
      </FeedWrapper>
    </div>
  );
}

export default Feed;
