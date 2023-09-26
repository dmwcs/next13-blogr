import { Post } from "@/types/tpyes";

function Post({title,content,author}:Post) {
  const name =author?.name;
  return (
    <div className="flex flex-col gap-5 p-[32px] bg-white rounded-2xl hover:bg-pink-500 transition">
      <p className="font-bold text-[24px]">{title}</p>
      <p>by {name && name}</p>
      <p>{content}</p>
    </div>
  );
}

export default Post;