import MainContent from "@/components/MainContent";

async function DraftPage() {

  const res = await fetch("http://localhost:3000/api/post");
  if(!res.ok) {
    throw new Error("something wrong!")
  }
  const posts = await res.json();
  console.log(posts)

  return (
    <div>
      <MainContent title="My Drafts" type="read" posts={posts}></MainContent>
    </div>

  );
}

export default DraftPage;