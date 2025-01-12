"use client";

import React from "react";
import Image from "next/image";
import { FaRegCopy } from "react-icons/fa6";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Container = ({ post, handleDelete }) => {
  const pathName = usePathname();
  const router = useRouter();
  const { data: session } = useSession();

  const [copied, setCopied] = useState("");

  const handleTagClick = () => {};

  const handleEdit = async () => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(""), 10000);
  };
  return (
    <div className=" border p-4 rounded-md  border-slate-500   flex flex-col max-w-80 gap-3 ">
      <div className="flex items-center justify-between gap-12">
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
      <div className=" flex justify-between text-blue-500">
        <span className="" onClick={handleTagClick}>
          #{post.tag}
        </span>
        {pathName === "/profile" && session.user?.id === post.creator._id && (
          <div>
            <span className="mr-3 cursor-pointer" onClick={() => handleEdit()}>
              Edit
            </span>
            <span className="cursor-pointer" onClick={() => handleDelete()}>
              Delete
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Container;
