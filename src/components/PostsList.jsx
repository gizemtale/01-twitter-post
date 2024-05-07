import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";

import classes from "./PostsList.module.css";

import { useState } from "react";

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    //this function is executed as the form is submitted
    // postData NewPost'ta. functioni NewPost'a gonderiyoruz
    setPosts((existingPosts) => [postData, ...existingPosts]); //postData is the new post as the first element in this array, and the existing posts come thereafter
    //this arrow function will automatically receive the current state snapshot, so the existingPosts
  }

  return (
    <>
      {/* If isPosting is true, content(Modal) should be output, otherwise it will output nothing */}
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      <ul className={classes.posts}>
        {posts.map((post) => (
          <Post author={post.author} body={post.body} />
        ))}
        {/* author ve body datasi posts objectinden geliyor */}
        {/* posts arrayindeki her bir post objectini <Post/>'a donusturdu. array of objectsi (posts), map() methodu ile array of JSX elementse donusturucez sayfada render etmek icin */}
      </ul>
    </>
  );
}

export default PostsList;
