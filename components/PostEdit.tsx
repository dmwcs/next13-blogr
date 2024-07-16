"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Post } from "@/types/tpyes";

const getData = async (id: string): Promise<Post> => {
  const res = await fetch(`http://localhost:3000/api/post/${id}`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

function PostEdit({ id }: { id: string }) {
  const router = useRouter();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(id);
        setPost(data);
      } catch (e) {
        setError("Failed to load post");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const onDeleteClick = async () => {
    setIsSubmitting(true);
    try {
      const res = await fetch(`http://localhost:3000/api/post/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete post");
      router.push("/");
      router.refresh();
      alert("Post has been deleted!");
    } catch (e) {
      console.log(e);
      alert("Failed to delete post");
    } finally {
      setIsSubmitting(false);
    }
  };

  const onToDraftClick = async () => {
    setIsSubmitting(true);
    try {
      const res = await fetch(
        `http://localhost:3000/api/publish/${id}?publish=false`,
        {
          cache: "no-cache",
        },
      );
      if (!res.ok) throw new Error("Failed to publish post");
      router.push("/");
      router.refresh();
      alert("Post has been updated!");
    } catch (e) {
      console.log(e);
      alert("Failed to publish post");
    } finally {
      setIsSubmitting(false);
    }
  };

  const onPublishClick = async () => {
    setIsSubmitting(true);
    try {
      const res = await fetch(
        `http://localhost:3000/api/publish/${id}?publish=true`,
        {
          cache: "no-cache",
        },
      );
      if (!res.ok) throw new Error("Failed to publish post");
      router.push("/drafts");
      router.refresh();
      alert("Post has been updated!");
    } catch (e) {
      console.log(e);
      alert("Failed to publish post");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!post) return <div>No post found</div>;

  return (
    <div className="flex flex-col gap-5 mx-7 p-8">
      <div className="flex flex-col p-8 gap-5 bg-white rounded-2xl">
        <h2 className="text-[24px] font-bold">
          {post.title} {!post.published && "(draft)"}
        </h2>
        <p>by {post.author?.name}</p>
        <p>{post.content}</p>
      </div>

      <div className="flex gap-5">
        {post.published === true ? (
          <button
            className="bg-white border py-3 px-5 rounded w-[95px]"
            onClick={onToDraftClick}
            disabled={isSubmitting}
          >
            To draft
          </button>
        ) : (
          <button
            className="bg-white border py-3 px-5 rounded w-[95px]"
            onClick={onPublishClick}
            disabled={isSubmitting}
          >
            Publish
          </button>
        )}

        <button
          className="text-white bg-red-600 py-3 px-5 rounded w-[95px]"
          onClick={onDeleteClick}
          disabled={isSubmitting}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default PostEdit;
