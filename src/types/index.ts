export type Post = {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
};

export type SubmittedPost = {
  title: string;
  body: string;
};

export type Action = {
  type: string;
  payload: string;
};

export type FetchAction = {
  type: string;
  payload: Post[];
};

export type CreateAction = {
  type: string;
  payload: Post;
};

export interface PostState {
  items: Post[];
  item: Post;
}

export interface NoteState {
  notes: String[];
}
