import React from "react";
import Feed from "./components/Feed";

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center max-w-lg mx-auto ">
      <p className=" font-bold text-3xl sm:text-4xl md:text-5xlf">
        Discover & Share
      </p>
      <p className=" gradient font-bold text-3xl sm:text-4xl md:text-5xlf mb-3">
        AI-Powered Prompts
      </p>
      <p className="text-center sm:text-lg mb-10">
        Promptopia is an open-source AI prompting tool for mordern world to
        discover,create, and share creative prompts
      </p>
      <Feed />
    </main>
  );
}
