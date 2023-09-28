import PostEdit from "@/components/PostEdit";

function EditPost({params:{id}}:{params:{id:string}}) {
  return <PostEdit id={id}></PostEdit>
}

export default EditPost;
