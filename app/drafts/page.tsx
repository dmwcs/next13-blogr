import MainContent from "@/components/MainContent";

async function getData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASIC_URL}/api/post`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.error(error);
    // 返回默认数据或缓存数据
    return { message: "Default data" };
  }
}

const DraftPage = async () => {
  const posts = await getData();
  console.log(posts);

  return (
    <div>
      <MainContent title="My Drafts" type="read" posts={posts}></MainContent>
    </div>
  );
};

export default DraftPage;
