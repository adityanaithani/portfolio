export async function load({ params }) {
  const post = await import(`../${params.slug}.md`);
  const { title, date, updated, categories } = post.metadata;
  const content = post.default;

  return {
    content,
    title,
    date,
    updated,
    categories,
  };
}
