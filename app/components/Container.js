"use client";

import React from "react";
import Image from "next/image";
import { FaRegCopy } from "react-icons/fa6";
import { useState } from "react";
const Container = ({ post }) => {
  const [copied, setCopied] = useState("");
  const handleTagClick = () => {};
  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(""), 10000);
  };
  return (
    <div className=" border p-4 rounded-md  border-slate-500 min-w-80 flex flex-col gap-3 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <div>
            {
              <Image
                className="rounded-full"
                width={35}
                height={35}
                alt="profile"
                src={post.creator.image}
              />
            }
          </div>
          <div className="flex flex-col  flex-start ">
            <p>{post.creator.username}</p>
            <p>{post.creator.email}</p>
          </div>
        </div>
        <FaRegCopy
          className={copied == post.prompt ? "opacity-50" : ""}
          onClick={() => handleCopy()}
        />
      </div>
      <p>{post.prompt}</p>
      <div className="text-blue-500">
        <span onClick={handleTagClick}>#{post.tag}</span>
      </div>
    </div>
  );
};

export default Container;
