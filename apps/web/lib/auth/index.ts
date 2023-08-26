import { NextAuthOptions } from "next-auth";
import { credentialsProvider } from "./providers";

export const nextAuthOptions: NextAuthOptions = {
  providers: [credentialsProvider],
  pages: {
    signIn: "/auth/login",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
};
