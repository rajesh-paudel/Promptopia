import mongoose from "mongoose";

const promptSchema = mongoose.Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
});
const Prompt = mongoose.models.Prompt || mongoose.model("Prompt", promptSchema);
export default Prompt;
