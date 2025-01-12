import { connectDB } from "@/app/utils/db";
import Prompt from "@/app/models/prompt.model";
export const GET = async (req, { params }) => {
  try {
    await connectDB();

    const { id } = await params;

    const post = await Prompt.findOne({ _id: id }).populate("creator");

    if (!post) {
      return new Response("could not get post ", { status: 404 });
    }
    return new Response(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new Response(" could not get  post ", { status: 500 });
  }
};

export const PATCH = async (req, { params }) => {
  try {
    const { prompt, tag } = await req.json();
    const { id } = await params;
    await connectDB();
    const newPost = await Prompt.findByIdAndUpdate(
      id,
      {
        prompt,
        tag,
      },
      { new: true }
    ).populate("creator");
    if (!newPost) {
      return new Response("cannot update", { status: 400 });
    }
    return new Response(JSON.stringify(newPost), { status: 200 });
  } catch (error) {
    return new Response("could not edit  post ", { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    const { id } = await params;
    await connectDB();
    await Prompt.findByIdAndDelete({ _id: id });
    return new Response("post deleted", { status: 200 });
  } catch (error) {
    return new Response("could not delete  post ", { status: 500 });
  }
};
