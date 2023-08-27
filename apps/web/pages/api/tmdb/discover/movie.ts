import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { nextAuthOptions } from "@/lib/auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // const session = await getServerSession(req, res, nextAuthOptions);
  // if (session) {
  // Signed in
  try {
    const { with_genres } = req.query;
    const response = await fetch(
      `${process.env.TMDB_API_URL}/discover/movie?with_genres=${with_genres}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
        },
      },
    );

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "something went wrong",
    });
  }
  // } else {
  //   // Not Signed in
  //   return res.status(401).send({
  //     message: "unauthorized",
  //   });
  // }
}
