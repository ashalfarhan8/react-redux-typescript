import * as React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";
import { Post } from "../types";

interface PostProps {
  fetchPosts: () => void;
  posts: Post[];
}

const Posts = ({ fetchPosts, posts }: PostProps) => {
  // Invoked fetchPosts action when COMPONENT MOUNTED
  React.useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      <h1 className="text-4xl text-center uppercase mb-12">Posts</h1>
      {posts.map((post, idx) => {
        return (
          <div key={idx} className="mx-4 mb-4">
            <h1 className="text-2xl font-semibold capitalize">{post.title}</h1>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};

// This will send a data to the props
const mapStateProps = (state: any) => ({
  posts: state.posts.items,
});

// Inside curly braces is registering the
// action to the props and we can use it inside the component
export default connect(mapStateProps, { fetchPosts })(Posts);
