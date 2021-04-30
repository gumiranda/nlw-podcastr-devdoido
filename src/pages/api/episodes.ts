import { data } from './server';
export default async function handler(req: any, res: any) {
  if (req.method === 'GET') {
    const { params } = req;
    res.status(200).json(
      data.episodes.sort((a, b) => {
        const dateA = new Date(a.published_at).getTime();
        const dateB = new Date(b.published_at).getTime();
        return dateA > dateB ? dateB : dateA;
      })
    );
  } else {
    res.status(200).json({ message: 'Method not implemented' });
  }
}
