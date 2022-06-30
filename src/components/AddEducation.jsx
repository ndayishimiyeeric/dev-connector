import React from 'react';
// import { Link } from 'react-router-dom';

function AddEducation() {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#AddEducationModal"
      >
        <i className="fas fa-graduation-cap" />
        &nbsp;
        Add Education
      </button>
      <div className="modal fade" id="AddEducationModal" tabIndex="-1" aria-labelledby="AddEducationModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title t-primary" id="AddEducationModalLabel">
                <i className="fas fa-graduation-cap" />
                &nbsp;
                Add Your Education
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
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
                    &nbsp;
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
                  data-bs-dismiss="modal"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddEducation;
