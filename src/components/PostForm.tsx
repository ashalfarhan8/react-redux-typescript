import React, { ChangeEvent, FormEvent } from "react";
import { API_URL } from "../constants";

const PostForm = () => {
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
    fetch(API_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    setTitle("");
    setBody("");
  };
  return (
    <div>
      <h1 className="text-4xl text-center uppercase">Add Posts</h1>
      <form className="max-w-sm w-full mx-auto" onSubmit={handleSubmitForm}>
        <div className="flex flex-col">
          <label>Title: </label>
          <input
            type="text"
            name="title"
            onChange={handleTitleChange}
            value={title}
          />
        </div>
        <div className="flex flex-col">
          <label>Body: </label>
          <textarea name="body" value={body} onChange={handleBodyChange} />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default PostForm;
