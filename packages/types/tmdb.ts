export interface TMDBContent {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  name?: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  original_name?: string;
  overview: string;
  poster_path: string;
  media_type: "movie" | "tv";
  genre_ids: number[];
  popularity: number;
  release_date?: string;
  first_air_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  genres?: Genre[];
}

export interface TMDBResults {
  page: number;
  results: TMDBContent[];
  total_pages: number;
  total_results: number;
}

export interface TMDBVideo {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: VideoType;
  official: boolean;
  published_at: string;
  id: string;
}

export interface TMDBVideosResults extends TMDBContent {
  videos: { results: TMDBVideo[] };
}

export type VideoType =
  | "Bloopers"
  | "Featurette"
  | "Behind the Scenes"
  | "Clip"
  | "Trailer"
  | "Teaser";

export interface Genre {
  id: number;
  name: string;
}
