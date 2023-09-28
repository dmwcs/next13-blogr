"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession, signOut, signIn } from "next-auth/react";

function Navbar() {
  const router = useRouter();

  const { data: session, status } = useSession();


  return (
    <div className="flex justify-between p-7">
      {/*left*/}
      <div className="flex gap-5">
        <Link href="/" className="font-bold">
          Feed
        </Link>
        {session && <Link href="/drafts">My drafts</Link>}
      </div>

      {/*right*/}
      {session ? (
        <div className="flex gap-10">
          <p>
            {session.user?.name} ({session.user?.email})
          </p>

          <Link href="/create">New post</Link>
          {<button onClick={() => signOut()}>Log Out</button>}
        </div>
      ) : (
        <button onClick={() => signIn()}>Log in</button>
      )}
    </div>
  );
}

export default Navbar;
