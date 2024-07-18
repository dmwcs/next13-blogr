import MainContent from "@/components/MainContent";
import { Post as TypePost } from "@/types/tpyes";
import prisma from "@/prisma/client";

export default async function FeedPage() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASIC_URL}/api/publish`,
      {
        cache: "no-cache",
        method: "GET",
      },
    );
    if (!res.ok) {
      throw new Error("something wrong!");
    }
    const publishedPosts = await res.json();
    return (
      <MainContent
        title="Public Feed"
        type="read"
        posts={publishedPosts}
      ></MainContent>
    );
  } catch (e) {
    console.log(e);
  }
}
