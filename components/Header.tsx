import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../styles/palette';
import Return from './svg/Return';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';

const Container = styled.div`
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.08), 0px 1px 12px;
  z-index: 10;
  border-bottom: 2px solid ${palette.gray_eb};
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Auth = styled.div``;

const Description = styled.p`
  font-size: 30px;
  padding-left: 100px;
`;

const Signup = styled(motion.button)`
  height: 42px;
  margin-right: 8px;
  padding: 0 16px;
  border: 0;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
  border-radius: 21px;
  background-color: white;
  cursor: pointer;
  outline: none;
  &:hover {
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
  }
`;

const Signin = styled(motion.button)`
  height: 42px;
  padding: 0 16px;
  border: 0;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
  border-radius: 21px;
  background-color: white;
  cursor: pointer;
  outline: none;
  &:hover {
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
  }
`;

const SignPage = styled(motion.div)`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  top: 20%;
  left: 30%;
  width: 40%;
  height: 60vh;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 1);
  input {
    display: block;
    margin-bottom: 20px;
  }

  button {
    font-size: 12px;
    display: block;
    text-align: center;
  }
`;

const Close = styled.button`
  position: absolute;
  top: -35%;
  left: 47%;
  border: none;
  text-decoration: none;
  background-color: transparent;
  color: red;
  cursor: pointer;
  transition: all ease-in 0.3s;
  &:hover {
    scale: 1.3;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
`;

interface IForm {
  name: string;
  password: string;
  password2?: string;
  email?: string;
}
function Header() {
  const [signin, setSignin] = useState(false);
  const [signup, setSignup] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>();

  const onValidSignup = (data: IForm) => {
    if (data.password !== data.password2) {
      return setError(
        'password2',
        { message: 'Not Equal' },
        {
          // password1으로 focus됨
          shouldFocus: true,
        },
      );
    }
  };
  return (
    <>
      <Container>
        <LogoWrapper>
          <Return />
        </LogoWrapper>
        <Description>리턴 커뮤니티</Description>
        <Auth>
          <Signup onClick={() => setSignup((prev) => !prev)}>회원가입</Signup>
          <Signin onClick={() => setSignin((prev) => !prev)}>로그인</Signin>
        </Auth>
      </Container>
      <AnimatePresence>
        {signin ? (
          <>
            <Overlay animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
            <SignPage exit={{ opacity: 0 }}>
              로그인페이지
              <button onClick={() => setSignin((prev) => !prev)}>
                로그아웃
              </button>
            </SignPage>
          </>
        ) : null}
        {signup ? (
          <>
            <Overlay animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
            <SignPage exit={{ opacity: 0 }}>
              회원가입페이지
              <Close onClick={() => setSignup((prev) => !prev)}>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  height="2.5em"
                  width="2.5em"
                >
                  <path
                    fill="currentColor"
                    d="M16.34 9.322a1 1 0 10-1.364-1.463l-2.926 2.728L9.322 7.66A1 1 0 007.86 9.024l2.728 2.926-2.927 2.728a1 1 0 101.364 1.462l2.926-2.727 2.728 2.926a1 1 0 101.462-1.363l-2.727-2.926 2.926-2.728z"
                  />
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm11 9a9 9 0 110-18 9 9 0 010 18z"
                    clipRule="evenodd"
                  />
                </svg>
              </Close>
              <form onSubmit={handleSubmit(onValidSignup)}>
                <input
                  {...register('name', {
                    required: '이름을 입력하세요.',
                  })}
                  placeholder="이름"
                />
                <span>{errors.name?.message}</span>
                <input
                  {...register('email', {
                    required: '이메일을 입력하세요.',
                    pattern: {
                      value:
                        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                      message: '이메일 형식이 아닙니다.',
                    },
                  })}
                  placeholder="이메일"
                />
                <span>{errors.email?.message}</span>

                <input
                  {...register('password', {
                    required: '비밀번호를 입력하세요.',
                    minLength: {
                      value: 7,
                      message: '비밀번호가 6글자 이하입니다.',
                    },
                  })}
                  placeholder="비밀번호"
                />
                <span>{errors.password?.message}</span>

                <input
                  {...register('password2', {
                    required: '비밀번호 확인란을 입력하세요.',
                  })}
                  placeholder="비밀번호확인"
                />
                <span>{errors.password2?.message}</span>

                <button>제출</button>
              </form>
            </SignPage>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default Header;