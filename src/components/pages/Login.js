import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';

function Login() {
  const text = 'Don\'t have an account?';
  return (
    <>
      <Header />
      <section className="container">
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead">
          <i className="fas fa-user" />
          Sign into your account
        </p>
        <form className="form">
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
          >
            Login
          </button>
        </form>
        <p className="my-1">
          {text}
          <Link
            to="/home/register"
          >
            Sign Up
          </Link>
        </p>
      </section>
    </>
  );
}

export default Login;
