import PostList from "@/components/PostList";
import PostAdd from "@/components/PostAdd";
import { Post as TypePost } from "@/types/tpyes";
import { getServerSession } from "next-auth";
import { OPTIONS } from "@/app/api/auth/[...nextauth]/route";

interface MainContentProps {
  title: string;
  type: "read" | "add";
  posts?: TypePost[];
}

async function MainContent({ title, type, posts }: MainContentProps) {
  const session = await getServerSession(OPTIONS);

  return (
    <div className="px-7">
      <h1 className="text-[2em] font-extrabold my-5">{title}</h1>
      {
        session
        ? type === "read"
        && <PostList posts={posts}></PostList>
        || <PostAdd></PostAdd>
        : <p>You need to be authenticated to view this page.</p>
      }
    </div>
  );
}

export default MainContent;
