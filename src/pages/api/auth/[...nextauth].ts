// @ts-nocheck
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { prisma } from "app/services";

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      async authorize(credentials, _req) {
        const { email } = credentials;

        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });

        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  theme: {
    colorScheme: "auto",
  },
  callbacks: {
    async session(params) {
      console.log("session2::", params);
      const email = params.session.user?.email;

      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      params.session.user = user;

      return params.session;
    },
  },
  debug: false,
});
