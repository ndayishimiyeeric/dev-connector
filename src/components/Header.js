import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const winLoc = window.location.pathname;
  let locaN;
  let devLoc;
  let showLink;
  if (winLoc === '/' || winLoc === '/home/register' || winLoc === '/home/login' || winLoc === 'home/developers') {
    locaN = '/';
    devLoc = 'home/developers';
    showLink = false;
  } else {
    locaN = 'posts';
    devLoc = '/developers';
    showLink = true;
  }
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link
          to={locaN}
        >
          <i className="fas fa-code" />
          DevConnector
        </Link>
      </h1>
      <ul>
        {showLink && (
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        )}
        <li>
          <Link
            to={devLoc}
          >
            Developers
          </Link>
        </li>
        {showLink && (
        <li>
          <Link to="/dashboard">
            <i className="fas fa-user" />
            <span className="hide-sm">Dashboard</span>
          </Link>
        </li>
        )}
        {!showLink && (
        <li>
          <Link to="/home/register">Sign Up</Link>
        </li>
        )}
        {!showLink && (
        <li>
          <Link to="/home/login">Sign In</Link>
        </li>
        )}
        {showLink && (
        <li>
          <Link to="/">
            <i className="fas fa-sign-out-alt" />
            <span className="hide-sm">Logout</span>
          </Link>
        </li>
        )}
      </ul>
    </nav>
  );
}

export default Header;
