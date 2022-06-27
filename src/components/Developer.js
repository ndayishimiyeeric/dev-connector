import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

function Developer(props) {
  const {
    img, name, position, company, location, skills,
  } = props;

  const winLoc = window.location.pathname;
  let toProfile;
  let toPath;

  if (winLoc === '/home/developers') {
    toProfile = false;
    toPath = '/home/register';
  } else {
    toPath = '/profile';
    toProfile = true;
  }

  const skillElement = skills.map((skill) => (
    <li
      key={skill}
      className="text-primary"
    >
      <i className="fas fa-check" />
      &nbsp;
      {skill}
    </li>
  ));

  return (
    <div className="profile bg-light">
      <img
        src={img}
        alt={name}
        className="round-img"
      />
      <div>
        <h2>{name}</h2>
        <p>
          {position}
          &nbsp;
          at
          &nbsp;
          {company}
        </p>
        <p>{location}</p>
        <Link
          to={toPath}
          className="btn btn-primary"
        >
          {toProfile ? 'View Profile' : 'Register & connect'}
        </Link>
      </div>
      <ul className="hide-sm">
        {skillElement}
      </ul>
    </div>
  );
}

export default Developer;

Developer.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  company: PropTypes.string,
  location: PropTypes.string,
  skills: PropTypes.array, //eslint-disable-line
};

Developer.defaultProps = {
  img: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
  name: 'user name',
  position: 'user position',
  company: 'user company',
  location: 'user location',
};
