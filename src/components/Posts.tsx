import * as React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postAction";
import { Post } from "../types";

const Posts = (props) => {
  const [posts, setPosts] = React.useState<Post[]>([]);
  React.useEffect(() => {
    props.fetchPosts();
    console.log(props);
  });
  return (
    <div>
      <h1 className="text-4xl text-center uppercase">Posts</h1>
      {props.items.map((post, idx) => {
        return (
          <div>
            <h1 className="text-2xl font-semibold capitalize">{post.title}</h1>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};

const mapStateProps = (state) => ({
  posts: state.posts.items,
});

export default connect(mapStateProps, { fetchPosts })(Posts);
