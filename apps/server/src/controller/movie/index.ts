import type { RequestHandler } from "express";
import fetch from "node-fetch";

export const getPopularMovies: RequestHandler = async (req, res) => {
  const response = await fetch(`${process.env.TMDB_API_URL}/movie/popular`, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
    },
  });
  const data = await response.json();
  return res.status(200).send(data);
};
