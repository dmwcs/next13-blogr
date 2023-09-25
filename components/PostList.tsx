import Post from "@/components/Post";
import {post} from "@/types/tpyes";

interface PostListProps {
  posts:post[]
}
function PostList({posts}:PostListProps) {
  return (
    <div className="flex flex-col gap-8 p-2 mt-5">
      post.map
      <Post></Post>
      <Post></Post>
      <Post></Post>
    </div>
  );
}

export default PostList;