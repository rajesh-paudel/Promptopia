import React from "react";
import Container from "./Container";

const Feed = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-lg mx-auto">
      <input
        placeholder="Search for a tag or a username"
        type="text"
        className=" rounded-sm outline-none shadow-lg py-2 px-5 w-full mb-20"
      ></input>
      <Container></Container>
    </div>
  );
};

export default Feed;
