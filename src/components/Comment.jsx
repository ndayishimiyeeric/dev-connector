import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Comment(props) {
  const {
    name, img,
  } = props;
  return (
    <div className="post bg-white p-1 my-1">
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
          dolor sit amet consectetur adipisicing elit
        </p>
      </div>
    </div>
  );
}

export default Comment;

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
