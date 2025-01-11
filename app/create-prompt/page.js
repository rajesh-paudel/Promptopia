"use client";

import React from "react";
import { useState } from "react";
import Form from "../components/Form";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
const page = () => {
  const { data: session } = useSession();

  const router = useRouter();
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form
      type="Create"
      handleSubmit={handleSubmit}
      post={post}
      setPost={setPost}
    />
  );
};

export default page;
