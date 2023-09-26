import {NextRequest, NextResponse} from "next/server";
import prisma from "@/prisma/client";

export async function GET (request: NextRequest) {
  const publishedPosts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      }
    },
  });

  return NextResponse.json(publishedPosts, {status:200});
}

// export async function POST (request: NextRequest) {
//   const {title, content} = await request.json();
//   try{
//     // const id = params.id;
//     const res = await prisma.post.create({
//       data:{title,content}
//     })
//     return NextResponse.json("created !",{status:201})
//   }catch (e){
//     console.log(e)
//   }
//
// }