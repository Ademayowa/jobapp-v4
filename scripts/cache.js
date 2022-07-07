const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function jobData() {
  const files = fs.readdirSync(path.join('jobs'));

  const jobs = files.map((filename) => {
    const slug = filename.replace('.md', '');

    const markdownWithMeta = fs.readFileSync(
      path.join('jobs', filename),
      'utf-8'
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  // return what we have in the cache
  return `export const jobs = ${JSON.stringify(jobs)} `;
}

try {
  fs.readdirSync('cache');
} catch (error) {
  fs.mkdirSync('cache');
}

fs.writeFile('cache/data.js', jobData(), function (err) {
  if (err) return console.error(err);
  console.log('Jobs cached...');
});
