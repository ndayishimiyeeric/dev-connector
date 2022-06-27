import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';

function Register() {
  return (
    <>
      <Header />
      <section className="container">
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead">
          <i className="fas fa-user" />
          Create Your Account
        </p>
        <form className="form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              required
            />
            <small className="form-text">
              You can use gravatar email
            </small>
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
          >
            Register
          </button>
        </form>
        <p className="my-1">
          Already have an account?
          <Link
            to="/home/login"
          >
            Sign In
          </Link>
        </p>
      </section>
    </>
  );
}

export default Register;
