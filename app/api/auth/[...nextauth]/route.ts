// import NextAuth, {NextAuthOptions} from "next-auth"
//
// const options:NextAuthOptions={
//
// }
//
//
// const handler = NextAuth(options);
//
// export { handler as GET, handler as POST }

import {NextRequest, NextResponse} from "next/server";

export async function GET (request:NextRequest){
  return NextResponse.json("hello")
}