import MainContent from "@/components/MainContent";
import {post} from "@/types/tpyes";

function Page() {
  const posts:post[] = [{title:"title1",postContent:"content1"},{title:"title2",postContent:"content2"}]
  return (
    <div>
      <MainContent title="New Draft" type="edit" posts={posts}></MainContent>
    </div>
  );
}

export default Page;