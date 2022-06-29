import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../Header';
import Comment from '../Comment';

function ViewPost() {
  const params = useParams();
  const { username } = params;
  let img;
  let cmName;
  let cmImg;
  if (username === 'John doe') {
    img = 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200';
    cmName = 'Jane doe';
    cmImg = `https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg?
           w=200&t=st=1656431102~exp=1656431702~hmac=8127660fc89ca71332ba3ac84efe8844ef6d3167a4f7162a58dddd304ddf6d2b`;
  } else {
    img = `https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg?
           w=200&t=st=1656431102~exp=1656431702~hmac=8127660fc89ca71332ba3ac84efe8844ef6d3167a4f7162a58dddd304ddf6d2b`;
    cmName = 'John doe';
    cmImg = 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200';
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Header />
      <section className="container">
        <Link
          to="/posts"
          className="btn"
        >
          Back To Posts
        </Link>
        <div className="post bg-white p-1 my-1">
          <div>
            <Link
              to={`/profile/${username}`}
            >
              <img
                src={img}
                alt={username}
                className="round-img"
              />
              <h4>
                {username}
              </h4>
            </Link>
          </div>
          <div>
            <p className="my-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              possimus corporis sunt necessitatibus! Minus nesciunt soluta
              suscipit nobis. Amet accusamus distinctio cupiditate blanditiis
              dolor? Illo perferendis eveniet cum cupiditate aliquam?
            </p>
          </div>
        </div>
        {/* Add comment */}
        <div className="post-form">
          <div className="post-form-header bg-primary">
            <h3>Leave a comment</h3>
          </div>
          <form className="form my-1" onSubmit={handleSubmit}>
            <textarea
              name="text"
              cols="30"
              rows="5"
              placeholder="Comment on this post"
              required
            />
            <button
              type="submit"
              className="btn btn-dark my-1"
            >
              Submit
            </button>
          </form>
        </div>
        {/* Comments */}
        <div className="posts">
          <p className="lead text-primary">Comments</p>
          <Comment
            name={cmName}
            img={cmImg}
          />
        </div>
      </section>
    </>
  );
}

export default ViewPost;
