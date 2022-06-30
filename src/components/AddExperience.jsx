import React from 'react';

function AddExperience() {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#AddExperienceModal"
      >
        <i className="fab fa-black-tie" />
        &nbsp;
        Add Experience
      </button>
      <div className="modal fade" id="AddExperienceModal" tabIndex="-1" aria-labelledby="AddExperienceModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title t-primary" id="AddExperienceModalLabel">
                <i className="fas fa-code-branch" />
                &nbsp;
                Add An Experience
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddExperience;
