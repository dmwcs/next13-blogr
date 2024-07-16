import { Post } from "@/types/tpyes";
import Link from "next/link";

function Post({ title, content, author, id }: Post) {
  const name = author?.name;
  return (
    <Link
      className="flex flex-col gap-5 p-[32px] bg-white rounded-2xl hover:bg-gray-200 transition"
      href={`/p/${id}`}
    >
      <p className="font-bold text-[24px]">{title}</p>
      <p>by {name && name}</p>
      <p>{content}</p>
    </Link>
  );
}

export default Post;
