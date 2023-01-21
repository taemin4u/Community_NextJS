import { readFileSync } from 'fs';
import { IList } from '../../types/list';

const getFeed = () => {
  const feedsBuffer = readFileSync('data/list.json');
  const feedsSstring = feedsBuffer.toString();
  if (!feedsSstring) {
    return [];
  }
  const feeds: IList[] = JSON.parse(feedsSstring);
  return feeds;
};

export default { getFeed };
