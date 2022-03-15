import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  creator: String,
  name: String,
  fullname: String,
  jobRole: String,
  tags: [String],
  birthday: Date,
  contract: Date,
  health: Number,
  fitpass: Number,
  healthUsers: [String],
  fitpassUsers: [String],
  debtHealth: String,
  debtFitpass: String,
  eyes: Date,
  safety: Date,
  fire: Date,
  firstAid: Date,
  bankOne: String,
  bankTwo: String,
  selectedFile: String,
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
