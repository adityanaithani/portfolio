export const load = async ({ fetch }) => {
  const res = await fetch(`/api/lastfm`);
  const recentAlbums = res.ok ? await res.json() : [];

  return {
    recentAlbums,
  };
};
