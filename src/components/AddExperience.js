import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

function AddExperience() {
  return (
    <>
      <Header />
      <section className="container">
        <h1 className="large text-primary">Add An Experience</h1>
        <p className="lead">
          <i className="fas fa-code-branch" />
          &nbsp;
          Add any developer/programming position that you have had in the past
        </p>
        <small>* = required field</small>
        <form className="form">
          <div className="form-group">
            <input type="text" placeholder="* Job Title" name="title" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="* Company" name="company" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Location" name="location" />
          </div>
          <div className="form-group">
            <h4>From Date</h4>
            <input type="date" name="from" />
          </div>
          <div className="form-group">
            <h4>To Date</h4>
            <input type="date" name="to" />
          </div>
          <div className="form-group">
            <p>
              <input type="checkbox" name="current" />
              &nbsp;
              Current
            </p>
          </div>
          <div className="form-group">
            <textarea
              name="description"
              cols="30"
              rows="5"
              placeholder="Job Description"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary my-1"
          >
            Submit
          </button>
          <Link
            to="/dashboard"
            className="btn my-1"
          >
            Go Back
          </Link>
        </form>
      </section>
    </>
  );
}

export default AddExperience;
