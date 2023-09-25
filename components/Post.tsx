function Post() {
  return (
    <div className="flex flex-col gap-5 p-[32px] bg-white rounded-2xl hover:bg-pink-500 transition">
      <p className="font-bold text-[24px]">title</p>
      <p>by shelton</p>
      <p>content</p>
    </div>
  );
}

export default Post;