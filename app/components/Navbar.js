"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="flex items-center justify-between mb-20 text-sm sm:text-lg">
      <div className="font-bold font-xl sm:text-2xl md:text-4xl">
        Promptopia
      </div>
      {session?.user ? (
        <div className="flex items-center gap-2  md:gap-3">
          <Link href="/create-prompt">
            <Button text="create Post" dark />
          </Link>

          <div onClick={signOut}>
            <Button text="Sign Out" light />
          </div>
          <Link href="/profile">
            <Image
              src={session?.user.image}
              alt="profile"
              className="rounded-full"
              width={37}
              height={37}
            />
          </Link>
        </div>
      ) : (
        <div onClick={() => signIn("google")}>
          <Button text="Sign In" dark />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
