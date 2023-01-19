import { useRouter } from 'next/router';
import styled from 'styled-components';
import Header from '../components/Header';

const Title = styled.h1`
  font-size: 144px;
  text-align: center;
  margin-top: 140px;
`;

export default function Home() {
  let headerPosition = '';
  const router = useRouter();
  console.log(router.pathname);
  if (router.pathname === '/') {
    headerPosition = 'static';
  }
  return (
    <>
      <Title>Hello, World!</Title>
    </>
  );
}
