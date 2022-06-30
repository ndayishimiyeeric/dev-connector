import React from 'react';
import Header from '../../Header';
import Post from '../../Post';

function Posts() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Header />
      <div className="container">
        <h1 className="large t-primary">Posts</h1>
        <p className="lead">
          <i className="fas fa-user" />
          &nbsp;
          Welcome to the community
        </p>
        <div className="post-form">
          <div className="post-form-header mb-3">
            <h4>Say something...</h4>
          </div>
          <form onSubmit={handleSubmit} className="form mb-3">
            <textarea cols="30" rows="5" placeholder="Create a post" required />
            <button
              type="submit"
              className="btn btn-dark mt-3"
            >
              Submit
            </button>
          </form>
          <div className="posts mt-5">
            <Post
              img="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
              name="John doe"
              likes={30}
              dislikes={3}
            />
            <Post
              img="https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg?
                 w=200&t=st=1656431102~exp=1656431702~hmac=8127660fc89ca71332ba3ac84efe8844ef6d3167a4f7162a58dddd304ddf6d2b"
              name="Jane doe"
              likes={100}
              dislikes={1}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Posts;
