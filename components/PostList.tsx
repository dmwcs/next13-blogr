import Post from "@/components/Post";
import {Post as TypePost} from "@/types/tpyes";

interface PostListProps {
  posts?:TypePost[]
}
function PostList({posts}:PostListProps) {
  return (
    <div className="flex flex-col gap-8 p-2 mt-5">
      {
        posts?.map(post =>{
          const {id,title,content,author} = post;
          return <Post key={id} title={title} content={content} author={author}></Post>
        } )
      }
    </div>
  );
}

export default PostList;