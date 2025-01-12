"use client";

import React from "react";
import { useState, useEffect } from "react";
import Form from "../components/Form";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
const page = () => {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const postId = searchParams.get("id");
  const router = useRouter();
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/prompt/${postId}`, {
        method: "PATCH",
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

  useEffect(() => {
    const getPost = async () => {
      const response = await fetch(`/api/prompt/${postId}`);
      const editingPost = await response.json();
      setPost({
        prompt: editingPost.prompt,
        tag: editingPost.tag,
      });
    };
    getPost();
  }, []);
  return (
    <Form
      type="Update"
      handleSubmit={handleSubmit}
      post={post}
      setPost={setPost}
    />
  );
};

export default page;
