import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Post(props) {
  const {
    name, img, likes, dislikes,
  } = props;
  return (
    <div className="post bg-white my-1 p-1">
      <div>
        <Link
          to={`/profile/${name}`}
        >
          <img
            src={img}
            alt={name}
            className="round-img"
          />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className="my-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          possimus corporis sunt necessitatibus! Minus nesciunt soluta
          suscipit nobis. Amet accusamus distinctio cupiditate blanditiis
          dolor? Illo perferendis eveniet cum cupiditate aliquam?
        </p>
        <button type="button" className="btn">
          <i className="fas fa-thumbs-up" />
          &nbsp;
          <span>{likes}</span>
        </button>
        <button type="button" className="btn">
          <i className="fas fa-thumbs-down" />
          &nbsp;
          <span>{dislikes}</span>
        </button>
        <Link
          to={`/posts/post-${name}`}
          className="btn btn-primary"
        >
          Discussion
        </Link>
      </div>
    </div>
  );
}

export default Post;

Post.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  likes: PropTypes.number,
  dislikes: PropTypes.number,
};

Post.defaultProps = {
  likes: 0,
  dislikes: 0,
};
