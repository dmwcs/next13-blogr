import {NextRequest, NextResponse} from "next/server";
import prisma from "@/prisma/client";

//get all published post
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

