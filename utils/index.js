export const sortByDate = (a, b) => {
  // gets the latest date from jobs
  return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
};
