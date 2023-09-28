"use client";
import {Post} from "@/types/tpyes";
import {useEffect} from "react";
import {use} from "react"
import {useRouter} from "next/navigation";

const getData = async (id:string) => {
  const res = await fetch(`http://localhost:3000/api/post/${id}`, {
    cache: "no-cache",
  })
  return  res.json()
}



function PostEdit({ id }: { id: string }) {
  const router = useRouter();

  const {title,published,author,content} = use(getData(id));
  const onDeleteClick = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/post/${id}`,{method:"DELETE"})
      if(!res.ok) throw Error("something wrong!")
      router.push("/drafts")
      router.refresh();
      alert("Post has been deleted!")
    }catch (e){
      console.log(e)
    }
  };
  const onPublishClick = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/publish/${id}`,{cache:"no-cache"})
      if(!res.ok) throw Error("something wrong!")
      router.push("/drafts")
      router.refresh();
      alert("Post has been updated!")
    }catch (e){
      console.log(e)
    }

  };




    return (
      <div  className="flex flex-col gap-5 mx-7 p-8">
        <div className="flex flex-col p-8 gap-5 bg-gray-200 rounded-2xl">
          <h2 className="text-[24px] font-bold">
            {title} {!published && "(draft)"}
          </h2>
          <p>by {author?.name}</p>
          <p>{content}</p>
        </div>

        <div className="flex gap-5">
          <button
            className=" bg-gray-600 py-3 px-5 rounded"
            onClick={onPublishClick}
          >
            Publish
          </button>
          <button
            className="text-white bg-red-600 py-3 px-5 rounded"
            onClick={onDeleteClick}
          >
            Delete
          </button>
        </div>
      </div>
    );

}

export default PostEdit;
