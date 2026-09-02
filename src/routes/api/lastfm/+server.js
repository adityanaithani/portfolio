// TODO: move to env var
import { json } from "@sveltejs/kit";
import { LASTFM_API_KEY } from "$env/static/private";

const USER = "onionleg";

const VALID_PERIODS = ["7day", "1month", "12month"];

export const GET = async ({ url }) => {
  const periodParam = url.searchParams.get("period") ?? "7day";
  const period = VALID_PERIODS.includes(periodParam) ? periodParam : "7day";

  if (!LASTFM_API_KEY) {
    throw new Error("LASTFM_API_KEY is not configured");
  }

  const lastfmUrl = `http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${USER}&api_key=${LASTFM_API_KEY}&period=${period}&limit=4&format=json`;

  try {
    const response = await fetch(lastfmUrl);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    const rawAlbums = data?.topalbums?.album?.slice(0, 3) ?? [];

    const albums = rawAlbums.map((album) => ({
      title: album.name,
      artist: album.artist?.name || "",
      album: album.album?.["#text"] || "",
      cover:
        album.image?.find((img) => img.size === "medium")?.["#text"] ||
        album.image?.[album.image.length - 1]?.["#text"] ||
        "",
      url: album.url,
      nowPlaying: album["@attr"]?.nowplaying === "true",
    }));
    return json(albums);
  } catch (error) {
    console.error("Failed to fetch recent tracks", error);
    return json([], { status: 500 });
  }
};
