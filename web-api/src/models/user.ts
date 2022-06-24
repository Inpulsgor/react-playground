import { Schema, model } from "mongoose";
import { UserModelTypes } from "types/user";

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

const UserModel = model<UserModelTypes>("User", userSchema);

export default UserModel;
