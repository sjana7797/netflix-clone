export const trendingAllDay = "trending/all";
export const popularMovie = "movie/popular";
export const popularTv = "tv/popular";
export const topRatedMovie = "movie/top_rated";
export const topRatedTv = "tv/top_rated";
export const actionMovie = "discover/movie?with_genres=28";

export type TMDBApiKey =
  | typeof trendingAllDay
  | typeof popularMovie
  | typeof popularTv
  | typeof topRatedMovie
  | typeof topRatedTv
  | typeof actionMovie;
