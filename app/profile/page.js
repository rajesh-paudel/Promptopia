"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Profile from "../components/Profile";
const page = () => {
  const { data: session, status } = useSession();

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setPosts(data);
    };
    if (session?.user.id) fetchPosts();
  }, [session]);

  return (
    status == "authenticated" && (
      <Profile session={session} posts={posts} setPosts={setPosts}></Profile>
    )
  );
};

export default page;
