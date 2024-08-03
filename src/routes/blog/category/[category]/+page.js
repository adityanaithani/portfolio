export const load = async ({ fetch, params }) => {
  const { category } = params;
  const res = await fetch(`/api/posts?`);
  const allPosts = await res.json();

  const posts = allPosts.filter((post) =>
    post.meta.categories.includes(category),
  );

  return {
    category,
    posts,
  };
};
