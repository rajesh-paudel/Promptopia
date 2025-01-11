import Prompt from "@/app/models/prompt.model";
import { connectDB } from "@/app/utils/db";

export const GET = async (req) => {
  try {
    await connectDB();
    const prompts = await Prompt.find({}).populate("creator");
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("failed to fetch posts", { status: 500 });
  }
};
