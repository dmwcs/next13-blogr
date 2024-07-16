import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

//switch publish status
export async function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: string } },
) {
  const { searchParams } = new URL(request.url);
  const publish = searchParams.get("publish") === "true";

  const res = await prisma.post.update({
    where: { id: id },
    data: { published: publish },
  });
  return NextResponse.json(res);
}
