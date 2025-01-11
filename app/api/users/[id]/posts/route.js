import { connectDB } from "@/app/utils/db";
import Prompt from "@/app/models/prompt.model";

export const GET = async (req, { params }) => {
  await connectDB();
  try {
    const posts = await Prompt.find({ creator: params.id }).populate("creator");
    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new Response("cannot fetch posts", { status: 500 });
  }
};
