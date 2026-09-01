export const fetchMarkdown = async () => {
  const postFiles = import.meta.glob("/src/routes/blog/content/*.md");
  const iterablePosts = Object.entries(postFiles);

  const allPosts = await Promise.all(
    iterablePosts.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const slug = path.split("/").pop().slice(0, -3);
      const postPath = `/blog/${slug}`;

      return {
        meta: metadata,
        path: postPath,
      };
    }),
  );
  return allPosts;
};
