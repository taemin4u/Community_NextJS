import axios from '.';
import { IList } from '../../types/list';

// GET: /api/[category]
export const getFeedsAPI = (category: string) =>
  axios.get<IList[]>(`api/${category}`);
