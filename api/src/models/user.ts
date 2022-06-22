import { Schema, model } from "mongoose";

interface DocumentResult {
  _doc: any;
}

interface UserModelTypes extends DocumentResult {
  _id: string;
  username: string;
  email: string;
  password: string;
  avatar: string;
}

const userSchema = new Schema<UserModelTypes>(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

const userModel = model<UserModelTypes>("User", userSchema);

export default userModel;
