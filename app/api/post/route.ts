import {NextRequest, NextResponse} from "next/server";
import prisma from "@/prisma/client";
import {OPTIONS} from "@/app/api/auth/[...nextauth]/route";
import {getServerSession} from "next-auth";




//get all draft post
export async function GET (request: NextRequest) {
  const publishedPosts = await prisma.post.findMany({
    where: {
      published: false,
    },
    include: {
      author: {
        select: { name: true },
      }
    },
  });

  return NextResponse.json(publishedPosts, {status:200});
}

//add a post
export async function POST (request: NextRequest) {
  const {title, content} = await request.json();
  const session = await getServerSession(OPTIONS);

  try{
    // const id = params.id;
    const res = await prisma.post.create({
      data: {
        title,
        content,
        author:{connect:{email:session?.user?.email!}}
      }
    })
    return NextResponse.json("created !",{status:201})
  }catch (e){
    console.log(e)
  }



}