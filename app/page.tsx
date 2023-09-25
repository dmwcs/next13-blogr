import Image from 'next/image'
import Post from "@/components/Post";
import PostList from "@/components/PostList";
import MainContent from "@/components/MainContent";

export default function FeedPage() {
  return (
    <MainContent title="Public Feed" type="read"></MainContent>
  )
}
