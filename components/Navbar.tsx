"use client";
import Link from "next/link";
import { useState } from "react";
import {useRouter} from "next/navigation";

function Navbar() {
  const [logIn, setIfLogin] = useState(false);
  const router = useRouter();

  const onButtonClick = () => {
    router.push("http://localhost:3000/api/auth/signin")
    setIfLogin(!logIn);
  };

  return (
    <div className="flex justify-between p-7">
      <div className="flex gap-5">
        <Link href="/" className="font-bold">
          Feed
        </Link>
        {logIn && <Link href="/drafts">My drafts</Link>}
      </div>

      {logIn ? (
        <div className="flex gap-10">
          <p>User name and email</p>
          <Link href="/create">New post</Link>
          {
            /*<Link href="/">Log out</Link>*/
            <button onClick={onButtonClick}>Log Out</button>
          }
        </div>
      ) : (
        <button onClick={onButtonClick}>Log in</button>
        // <Link href="/">Log in</Link>
      )}
    </div>
  );
}

export default Navbar;
