import { NextApiRequest, NextApiResponse } from 'next';
import Data from '../../lib/data';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const category = req.query.category;
      const list = Data.list.getFeed();
      res.statusCode = 200;
      if (category === 'home') {
        return res.send(list);
      } else {
        const categoryList = list.filter((feed) => {
          category === feed.category;
        });
        return res.send(categoryList);
      }
    } catch (error) {
      res.statusCode = 500;
      res.send(error);
    }
  }
};
