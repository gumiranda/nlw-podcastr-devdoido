import { data } from './server';
export default async function handler(req: any, res: any) {
  if (req.method === 'GET') {
    res.status(200).json(data.episodes);
  } else {
    res.status(200).json({ message: 'Method not implemented' });
  }
}
