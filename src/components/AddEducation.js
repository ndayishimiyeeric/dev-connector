import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

function AddEducation() {
  return (
    <>
      <Header />
      <section className="container">
        <h1 className="large text-primary">Add Your Education</h1>
        <p className="lead">
          <i className="fas fa-graduation-cap" />
          &nbsp;
          Add any school, bootcamp, etc that you have attended
        </p>
        <small>* = required field</small>
        <form className="form">
          <div className="form-group">
            <input
              type="text"
              placeholder="* School or Bootcamp"
              name="school"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="* Degree or Certificate"
              name="degree"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="* Field Of Study"
              name="fieldofstudy"
              required
            />
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
              &nbps;
              Current School
            </p>
          </div>
          <div className="form-group">
            <textarea
              name="description"
              cols="30"
              rows="5"
              placeholder="Program Description"
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

export default AddEducation;
