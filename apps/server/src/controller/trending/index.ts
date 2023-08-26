import type { RequestHandler } from "express";
import fetch from "node-fetch";

export const getAllTrending: RequestHandler = async (req, res) => {
  const response = await fetch(`${process.env.TMDB_API_URL}/trending/all`, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
    },
  });
  const data = await response.json();
  return res.status(200).send(data);
};

export const getTrendingMovie: RequestHandler = async (req, res) => {
  const response = await fetch(
    `${process.env.TMDB_API_URL}/trending/movie/week`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
      },
    }
  );
  const data = await response.json();
  return res.status(200).send(data);
};

export const getTrendingTVList: RequestHandler = async (req, res) => {
  const response = await fetch(`${process.env.TMDB_API_URL}/trending/tv/week`, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
    },
  });
  const data = await response.json();
  return res.status(200).send(data);
};
