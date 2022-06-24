import { createSlice } from "@reduxjs/toolkit";
import {} from "entities/posts/redux/postsOperations";
import { PostsState } from "entities/posts/model/types";
import { REQUEST_STATUS } from "types/enum";

const initialState: PostsState = {
  posts: {
    items: [],
    status: REQUEST_STATUS.IDLE,
  },
  tags: {
    items: [],
    status: REQUEST_STATUS.IDLE,
  },
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  // extraReducers: builder => {},
});

// export const {} = postsSlice.actions;

export default postsSlice;
