import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Header from '../components/Header';

const Title = styled.h1`
  font-size: 144px;
  text-align: center;
  margin-top: 140px;
`;

export default function Home() {
  return (
    <>
      <Header />
      <Title>Hello, World!</Title>
    </>
  );
}
