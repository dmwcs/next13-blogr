import MainContent from "@/components/MainContent";
import { useSession } from "next-auth/react";

async function DraftPage() {
  // const {data: session} = useSession();
  // if(!session) return <div>You need to be authenticated to view this page.</div>

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASIC_URL}/api/post`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("something wrong!");
  }
  const posts = await res.json();

  return (
    <div>
      <MainContent title="My Drafts" type="read" posts={posts}></MainContent>
    </div>
  );
}

export default DraftPage;
