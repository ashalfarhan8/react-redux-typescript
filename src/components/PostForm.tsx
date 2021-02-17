import React, { ChangeEvent, FormEvent } from "react";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";
import { SubmittedPost } from "../types";

interface PostFormProps {
  createPost: (e: SubmittedPost) => void;
}

const PostForm = ({ createPost }: PostFormProps) => {
  const [title, setTitle] = React.useState<string>("");
  const [body, setBody] = React.useState<string>("");
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const post = {
      title,
      body,
    };

    // Call Action
    // From where that action received ?
    // see below
    createPost(post);
    // Dont forget to clear the state
    setTitle("");
    setBody("");
  };
  return (
    <div className="mb-24 mt-4">
      <h1 className="text-4xl text-center mb-4">Add a post</h1>
      <form
        className="max-w-sm w-full mx-auto flex flex-col bg-gray-700 py-4 rounded-xl"
        onSubmit={handleSubmitForm}
      >
        <div className="flex flex-col mx-4">
          <label className="text-white">Title: </label>
          <input
            type="text"
            name="title"
            onChange={handleTitleChange}
            value={title}
            className="p-2 outline-none focus:outline-none"
          />
        </div>
        <div className="flex flex-col mx-4 mb-4">
          <label className="text-white">Body: </label>
          <textarea
            name="body"
            value={body}
            onChange={handleBodyChange}
            className="p-2 outline-none focus:outline-none"
          />
        </div>
        <input
          type="submit"
          value="Submit"
          className="py-2.5 mx-4 outline-none focus:outline-none cursor-pointer"
        />
      </form>
    </div>
  );
};

// Registering the actions in the connect method
// Then it will be passed to the props of this component
export default connect(null, { createPost })(PostForm);
