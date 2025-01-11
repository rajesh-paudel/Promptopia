import { connectDB } from "@/app/utils/db";
import Prompt from "@/app/models/prompt.model";
export const POST = async (req) => {
  const { userId, prompt, tag } = await req.json();
  try {
    await connectDB();
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag,
    });
    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response("failed to create a new Prompt", { status: 500 });
  }
};
