import axios from '.';
import { IList } from '../../types/list';

export const getFeedsAPI = (category: string) =>
  axios.get<IList[]>(`api/${category}`);
