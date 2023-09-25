import Image from 'next/image'
import Post from "@/components/Post";
import PostList from "@/components/PostList";
import MainContent from "@/components/MainContent";
import {post} from "@/types/tpyes";

export default function FeedPage() {
  const posts:post[] = [{title:"title1",postContent:"content1"},{title:"title2",postContent:"content2"}]
  return (
    <MainContent title="Public Feed" type="read" posts={posts}></MainContent>
  )
}
