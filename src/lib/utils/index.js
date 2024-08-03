export const fetchMarkdown = async () => {
  const postFiles = import.meta.glob("/src/routes/blog/*.md");
  const iterablePosts = Object.entries(postFiles);

  const allPosts = await Promise.all(
    iterablePosts.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = path.slice(11, -3);

      return {
        meta: metadata,
        path: postPath,
      };
    }),
  );
  return allPosts;
};
