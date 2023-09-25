import PostList from "@/components/PostList";
import PostEdit from "@/components/PostEdit";
import {post} from "@/types/tpyes";


interface MainContentProps{
  title:string
  type: "read" | "edit"
  posts: post[]
}

function MainContent({title, type, posts}:MainContentProps) {
  return (
    <div className="px-7">
      <h1 className="text-[2em] font-extrabold my-5">{title}</h1>
      {
        type === "read" ?  <PostList posts={posts}></PostList>
          : <PostEdit></PostEdit>
      }
    </div>
  );
}

export default MainContent;