import type { NextApiRequest, NextApiResponse } from "next";
import { daresAuthOptions, gameAuthOptions } from "~/server/auth";

import NextAuth from "next-auth";

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  const isGamePage =
    req.method === "GET" &&
    req.query.nextauth?.includes("signin") &&
    !req.query.nextauth.includes("discord");
  if (isGamePage) {
    return await NextAuth(gameAuthOptions);
  }
  return await NextAuth(daresAuthOptions);
}
