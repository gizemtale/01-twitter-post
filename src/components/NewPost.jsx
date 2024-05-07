import { useState } from "react";

import classes from "./NewPost.module.css";

function NewPost({ onCancel, onAddPost }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }
  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault(); //this prevents the browser default of generating and sending an HTTP request
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    console.log(postData);
    onAddPost(postData); // PostList'ten gelen addPostHandler functioni
    onCancel(); //App'ten PostList'e, PostList'ten NewPost'a gelen hideModalHandler functioni
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
        {/* required attribute is default browser validation */}
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
