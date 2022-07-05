import fs from 'fs';
import matter from 'gray-matter';

export default (req, res) => {
  console.log('search jobs');
  res.status(200).json({ name: 'John Doe' });
};
