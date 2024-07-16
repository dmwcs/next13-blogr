"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useSession, signOut, signIn } from "next-auth/react";

function Navbar() {
  const pathname = usePathname();

  const { data: session } = useSession();

  const isFeed = pathname === "/";
  const isDrafts = pathname.endsWith("/drafts");

  return (
    <div className="flex justify-between p-7 bg-gray-500 rounded">
      {/*left*/}
      <div className="flex gap-5">
        <Link href="/" className={isFeed ? "font-bold" : ""}>
          Feed
        </Link>
        {session && (
          <Link href="/drafts" className={isDrafts ? "font-bold" : ""}>
            My drafts
          </Link>
        )}
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
