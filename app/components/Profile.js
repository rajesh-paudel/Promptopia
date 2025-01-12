import React from "react";
import Image from "next/image";
import Container from "./Container";

const Profile = ({ session, posts, setPosts }) => {
  const handleDelete = async (id) => {
    await fetch(`/api/prompt/${id}`, {
      method: "DELETE",
    });
    const filteredPosts = posts.filter((post) => post._id !== id);
    setPosts(filteredPosts);
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="w-full max-w-md border border-slate-600 rounded-md flex flex-col mx-auto items-center justify-center  gap-3 text-sm    md:text-lg p-3">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={50}
          height={50}
          alt="profile"
        />
        <div className="w-full">
          <span>Username</span>
          <p className="w-full border border-slate-400 mt-o.5 p-1 ">
            {session.user.name}
          </p>
        </div>
        <div className="w-full">
          <span>Email</span>
          <p className="w-full border border-slate-400 p-1 mt-0.5 ">
            {session.user.email}
          </p>
        </div>
      </div>
      <div className="w-full">
        <h1 className=" w-full font-bold text-xl sm:text-2xl md:text-4xl border-t-2 text-center border-slate-400 pt-4 pb-5">
          Posts
        </h1>
        <div className="w-full flex flex-row-reverse justify-center items-center flex-wrap gap-5">
          {posts.map((post) => {
            return (
              <Container
                key={post._id}
                post={post}
                handleDelete={() => handleDelete(post._id)}
              ></Container>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
