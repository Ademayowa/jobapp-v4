import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default (req, res) => {
  let jobs;

  if (process.env.NODE_ENV === 'production') {
    // fetch file from cache in production
  } else {
    const files = fs.readdirSync(path.join('jobs'));

    jobs = files.map((filename) => {
      const markdownWithMeta = fs.readFileSync(
        path.join('jobs', filename),
        'utf8'
      );

      const { data: frontmatter } = matter(markdownWithMeta);

      return {
        frontmatter,
      };
    });
  }

  const results = jobs.filter(
    ({ frontmatter: { role, location } }) =>
      role.toLowerCase().indexOf(req.query.q) != -1 ||
      location.toLowerCase().indexOf(req.query.q) != -1
  );

  res.status(200).json(results);
  console.log(results);
};
