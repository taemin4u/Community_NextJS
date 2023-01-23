// [category]에서 쿼리로 카테고리 정보를 넘겨줌

import React from 'react';
import styled from 'styled-components';
import Mypage from '../components/Mypage';
import Navigation from '../components/Navigation';
import { Wrapper } from './[category]';
import palette from '../styles/palette';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { useForm } from 'react-hook-form';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
});
const MenuWrapper = styled.div`
  margin: 12px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid ${palette.gray_dd};
`;

const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ align: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, 'link'],
      [
        {
          color: [
            '#000000',
            '#e60000',
            '#ff9900',
            '#ffff00',
            '#008a00',
            '#0066cc',
            '#9933ff',
            '#ffffff',
            '#facccc',
            '#ffebcc',
            '#ffffcc',
            '#cce8cc',
            '#cce0f5',
            '#ebd6ff',
            '#bbbbbb',
            '#f06666',
            '#ffc266',
            '#ffff66',
            '#66b966',
            '#66a3e0',
            '#c285ff',
            '#888888',
            '#a10000',
            '#b26b00',
            '#b2b200',
            '#006100',
            '#0047b2',
            '#6b24b2',
            '#444444',
            '#5c0000',
            '#663d00',
            '#666600',
            '#003700',
            '#002966',
            '#3d1466',
            'custom-color',
          ],
        },
        { background: [] },
      ],
      ['image', 'video'],
      ['clean'],
    ],
  },
};

function Write() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm();

  const handleChange = (value: any) => {
    console.log(value);
    setValue('contents', value === '<p><br></p>' ? '' : value);
    trigger('contents');
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Wrapper>
      <Navigation />
      <div style={{ marginTop: '12px' }}>
        <input type="text" {...register('title')} />
        <ReactQuill onChange={handleChange} theme="snow" modules={modules} />
        <button onClick={handleSubmit(onSubmit)}>등록하기</button>
      </div>
      <Mypage />
    </Wrapper>
  );
}

export default Write;
