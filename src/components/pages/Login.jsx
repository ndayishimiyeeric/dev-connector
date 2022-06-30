import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Header';

function Login() {
  const [formData, setFormData] = useState({
    userEmail: '',
    userPassword: '',
  });
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.userEmail === 'test@devcon.com' && formData.userPassword === '123') {
      navigate('/posts');
    }
  };

  const handleChange = (event) => {
    const {
      name, value, checked, type,
    } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  const text = 'Don\'t have an account?';
  return (
    <>
      <Header />
      <section className="container">
        <h1 className="large t-primary">Sign In</h1>
        <p className="lead">
          <i className="fas fa-user" />
          &nbsp;
          Sign into your account
        </p>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <input
              type="email"
              name="userEmail"
              value={formData.userEmail}
              onChange={handleChange}
              placeholder="Email Address"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="userPassword"
              value={formData.userPassword}
              onChange={handleChange}
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
          &nbsp;
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
