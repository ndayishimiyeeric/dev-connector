import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header';

function Landing() {
  return (
    <>
      <Header />
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">Developer Connector</h1>
            <p className="lead">
              Create developer profile/portfolio, share posts and get help from
              other developers
            </p>
            <div className="buttons">
              <Link
                to="/home/register"
                className="btn btn-primary"
              >
                Sign Up
              </Link>
              <Link
                to="/home/login"
                className="btn"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
