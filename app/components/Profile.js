import React from "react";
import Image from "next/image";
import Container from "./Container";

const Profile = ({ session, posts }) => {
  return (
    <div className="flex flex-col items-center gap-16">
      <div className="w-full max-w-md border border-slate-600 rounded-md flex flex-col mx-auto items-center justify-center  gap-3 text-sm sm:text-sm md:text-xl p-3">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={60}
          height={60}
          alt="profile"
        />
        <div className="w-full">
          <span>Username</span>
          <p className="w-full border border-slate-400 mt-2 p-1 ">
            {session.user.name}
          </p>
        </div>
        <div className="w-full">
          <span>Email</span>
          <p className="w-full border border-slate-400 p-1 mt-2 ">
            {session.user.email}
          </p>
        </div>
      </div>
      <div className="w-full">
        <h1 className=" w-full font-bold text-xl sm:text-2xl md:text-4xl border-t-2 text-center border-slate-400 pt-4">
          Posts
        </h1>
        <div className="w-full flex gap-2 flex-wrap">
          {posts.map((post) => {
            return <Container key={post._id} post={post} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
