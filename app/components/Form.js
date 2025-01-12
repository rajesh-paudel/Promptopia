import Link from "next/link";
import React from "react";

const Form = ({ post, setPost, handleSubmit, type }) => {
  return (
    <section className="w-full max-w-full flex  flex-col items-center gap-4 ">
      <h1 className=" font-bold text-3xl text-start sm:text-4xl md:text-5xl text-blue-500">
        {type} Post
      </h1>
      <p className="desc   text-left max-w-md">
        Create and Share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl flex flex-col gap-7 items-start"
      >
        <label className="w-full">
          <span className="font-semibold sm:text-xl md:2xl block mb-2">
            Your AI prompt
          </span>
          <textarea
            required
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            className="w-full max-w-md outline-none p-2  min-h-40 "
            placeholder="Write your prompt here..."
          ></textarea>
        </label>
        <label className="w-full">
          <span className="font-semibold sm:text-xl md:2xl block mb-2">
            Tag
          </span>
          <input
            required
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            className="outline-none w-full max-w-md p-2"
            type="text"
            placeholder="#tag"
          ></input>
        </label>
        <div className=" w-full flex flex-col items-center justify-center mx-3 mb -5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button type="submit" className="">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
