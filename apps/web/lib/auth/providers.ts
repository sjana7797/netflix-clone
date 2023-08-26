import Credentials from "next-auth/providers/credentials";
import prisma from "../database";
import { compare } from "bcrypt";

export const credentialsProvider = Credentials({
  id: "credentials",
  name: "Credentials",
  credentials: {
    email: {
      label: "Email",
      type: "text",
    },
    password: {
      label: "Password",
      type: "password",
    },
  },
  async authorize(credentials) {
    if (!credentials?.email || !credentials?.password)
      throw new Error("Email or password not provided");

    const user = await prisma.user.findUnique({
      where: {
        email: credentials.email,
      },
    });

    if (!user || !user.hashedPassword) throw new Error("User not found");

    const passwordMatch = await compare(
      credentials.password,
      user.hashedPassword,
    );

    if (!passwordMatch) throw new Error("Incorrect password");

    return user;
  },
});
