import PostList from "@/components/PostList";
import PostAdd from "@/components/PostAdd";
import {Post as TypePost} from "@/types/tpyes";


interface MainContentProps{
  title:string
  type: "read" | "add"
  posts?: TypePost[]
}

function MainContent({title, type, posts}:MainContentProps) {
  return (
    <div className="px-7">
      <h1 className="text-[2em] font-extrabold my-5">{title}</h1>
      {
        type === "read" ?  <PostList posts={posts}></PostList>
          : <PostAdd></PostAdd>
      }
    </div>
  );
}

export default MainContent;