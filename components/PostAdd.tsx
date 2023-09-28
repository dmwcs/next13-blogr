"use client";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

function PostAdd() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const onFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/post`, {
        method: "POST",
        body: JSON.stringify({ title, content }),
      });
      if (!res.ok) {
        throw new Error("some thing wrong!");
      }
      router.push("/drafts");
      router.refresh();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={onFormSubmit}>
      <input
        id="1"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Type your title..."
        className="p-2 border-2 border-gray-400 rounded-xl"
      />
      <textarea
        id="2"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Type your content..."
        className="p-2 border-2 border-gray-400 rounded-xl h-40"
      />
      <div className="flex gap-4 ">
        <button className="bg-gray-200 p-3 rounded" type="submit">
          Create
        </button>
        <Link href="/" className="text-white bg-red-600 p-3 rounded">
          or Cancel
        </Link>
      </div>
    </form>
  );
}

export default PostAdd;
