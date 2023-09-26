import NextAuth, {NextAuthOptions} from "next-auth"
import GitHubProvider from "next-auth/providers/github";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import prisma from "@/prisma/client";


export const OPTIONS:NextAuthOptions = {
  providers:[
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!
    })
  ],
  adapter:PrismaAdapter(prisma),
  secret: process.env.SECRET
}

const handler = NextAuth(OPTIONS);

export { handler as GET, handler as POST }