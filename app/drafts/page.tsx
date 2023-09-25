import MainContent from "@/components/MainContent";
import {post} from "@/types/tpyes";

function DraftPage() {
const posts:post[] = [{title:"title1",postContent:"content1"},{title:"title2",postContent:"content2"}]
  return (
    <MainContent title="My Drafts" type="read" posts={posts}></MainContent>
  );
}

export default DraftPage;