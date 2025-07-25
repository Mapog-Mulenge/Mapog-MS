import { getTimetable } from '@/utils/app';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const timetable = await getTimetable(); // from utils/app.js or a service
      res.status(200).json({ success: true, data: timetable });
    } catch (error) {
      res.status(500).json({ success: false, error: 'Unable to fetch timetable' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
