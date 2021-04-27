import { data } from '../server';
export default async function handler(req: any, res: any) {
  if (req.method === 'GET') {
    const episode = data.episodes.find((element) => element.id.includes(req.query.id));
    res.status(200).json(episode);
  } else {
    res.status(200).json({ message: 'Method not implemented' });
  }
}
