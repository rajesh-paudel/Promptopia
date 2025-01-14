"use client";

import React from "react";
import { useState, useEffect } from "react";
import Container from "./Container";

const Feed = () => {
  const [serachText, setSerchText] = useState("");
  const [posts, setPosts] = useState([]);
  const handleSearchSubmit = () => {
    e.preventDefault();

    setSerchText("");
  };
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="w-full  flex flex-col items-center   ">
      <form
        onSubmit={handleSearchSubmit}
        className="w-full flex flex-col items-center"
      >
        <input
          required
          placeholder="Search for a tag or a username"
          type="text"
          className="w-full rounded-sm outline-none shadow-lg py-2 px-5 max-w-xl mb-20"
          value={serachText}
          onChange={(e) => setSerchText(e.target.value)}
        ></input>
      </form>
      <div className="w-full flex flex-row-reverse justify-center items-center flex-wrap gap-5">
        {posts.map((post) => {
          return <Container key={post._id} post={post}></Container>;
        })}
      </div>
    </div>
  );
};

export default Feed;
