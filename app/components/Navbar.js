"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import Link from "next/link";
import { useSession, signIn, signOut, getProviders } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);

  return (
    <nav className="flex items-center justify-between mb-20">
      <div className="font-bold font-xl sm:text-2xl md:text-4xl">
        Promptopia
      </div>
      {session?.user ? (
        <div className="flex items-center gap-3 sm:gap-4 md:gap-7">
          <Button text="create Post" dark />

          <div onClick={signOut}>
            <Button text="Sign Out" light />
          </div>
          <div>
            <Image
              src={session?.user.image}
              alt="profile"
              className="rounded-full"
              width={37}
              height={37}
            />
          </div>
        </div>
      ) : (
        <div onClick={() => signIn(Object.values(providers).id)}>
          <Button text="Sign In" dark />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
