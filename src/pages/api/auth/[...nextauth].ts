import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { prisma } from "app/services";

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      // @ts-ignore
      async authorize(credentials, req) {
        console.log("authorize", { credentials });

        // get user from db for credentials.email

        return credentials;
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
  debug: false,
});
