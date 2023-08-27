import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // const session = await getServerSession(req, res, nextAuthOptions);
  // if (session) {
  // Signed in
  try {
    const response = await fetch(
      `${process.env.TMDB_API_URL}/trending/all/day`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
        },
      },
    );

    const data = await response.json();

    console.log(data);

    return res.status(200).json(data);
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
