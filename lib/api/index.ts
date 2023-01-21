// 각 폴더의 index 파일은 pages의 index처럼 home이 된다.
import Axios from 'axios';

// 사용자가 정의한 구성을 사용하는 axios 인스턴스 생성
const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default axios;
