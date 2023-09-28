import {NextRequest, NextResponse} from "next/server";
import prisma from "@/prisma/client";


//switch publish status
export async function GET(request:NextRequest,{params:{id}}:{params:{id:string}}) {
  const res =await prisma.post.update({
    where:{id:id},
    data:{published: true}
  });
  return NextResponse.json(res);
}