import Post from "@/components/Post";
import { Post as TypePost } from "@/types/tpyes";

interface PostListProps {
  posts?: TypePost[];
}
function PostList({ posts }: PostListProps) {
  return (
    <div className="flex flex-col gap-8 p-2 mt-5">
      {posts?.length === 0 && <div>You don`&apos;t have any post yet.</div>}
      {posts?.map((post) => {
        const { id, title, content, author } = post;
        return (
          <Post
            key={id}
            title={title}
            content={content}
            author={author}
            id={id}
          ></Post>
        );
      })}
    </div>
  );
}

export default PostList;
