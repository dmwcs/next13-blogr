import Link from "next/link";

function PostEdit() {
  return (
    <form className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Type your title..."
        className="p-2 border-2 border-gray-400 rounded-xl"
      />
      <textarea
        placeholder="Type your content..."
        className="p-2 border-2 border-gray-400 rounded-xl h-40"
      />
      <div className="flex gap-4 ">
        <button className="bg-gray-200 p-3  rounded">Create</button>
        <Link href="/" className="text-white bg-red-600 p-3 rounded" >or Cancel</Link>
      </div>

    </form>
  );
}

export default PostEdit;