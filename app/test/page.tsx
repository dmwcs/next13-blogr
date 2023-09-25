"use client"
import {useRouter} from "next/navigation";


function Page() {
  const router = useRouter();
  return (
    <button onClick={()=>router.push("/")}>button</button>
  );
}

export default Page;