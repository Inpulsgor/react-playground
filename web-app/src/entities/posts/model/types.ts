type PostsType = {
  items: Array<unknown>;
  status: string;
};

export interface PostsState {
  posts: PostsType;
  tags: PostsType;
}
