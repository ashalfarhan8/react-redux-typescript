import "./App.css";
import React from "react";
import Header from "./components/Header";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";

function App() {
  return (
    <div>
      <Header />
      <PostForm />
      <Posts />
    </div>
  );
}

export default App;
