import {NextRequest, NextResponse} from "next/server";
import prisma from "@/prisma/client";


// find post by id
export async function GET(request:NextRequest,{params:{id}}:{params:{id:string}}) {
  const res =await prisma.post.findUnique({
    where:{id:id},
    include:{
      author:{
        select:{name:true}
      }
    }
  });
  return NextResponse.json(res);
}


//delete post by id
export async function DELETE(request:NextRequest,{params:{id}}:{params:{id:string}}) {
  const res =await prisma.post.delete({
    where:{id:id},
  });
  return NextResponse.json(res);
}

