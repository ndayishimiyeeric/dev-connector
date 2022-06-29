import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';

function Dashboard() {
  return (
    <>
      <Header />
      <section className="container">
        <h1 className="large text-primary">Dashboard</h1>
        <p className="lead">
          <i className="fas fa-user" />
          &nbsp;
          Welcome Jason Doe
        </p>
        <div className="dash-buttons">
          <Link
            to="/dashboard/edit-profile"
            className="btn"
          >
            <i className="fas fa-user-circle text-primary" />
            &nbsp;
            Edit Profile
          </Link>
          <Link
            to="/dashboard/add-experience"
            className="btn"
          >
            <i className="fab fa-black-tie text-primary" />
            &nbsp;
            Add Experience
          </Link>
          <Link
            to="/dashboard/add-education"
            className="btn"
          >
            <i className="fas fa-graduation-cap text-primary" />
            &nbsp;
            Add Education
          </Link>
        </div>
        <h2 className="my-2">Experience Credentials</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Company</th>
              <th className="hide-sm">Title</th>
              <th className="hide-sm">Years</th>
              <th>{ }</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Amazom</td>
              <td className="hide-sm">Front End Developer</td>
              <td className="hide-sm">Oct 2019 - current</td>
              <td>
                <button type="button" className="btn btn-danger">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Facebook</td>
              <td className="hide-sm">Junior Developer</td>
              <td className="hide-sm">May 2016 - Aug 2019</td>
              <td>
                <button type="button" className="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <h2 className="my-2">Education Credentials</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Institution</th>
              <th className="hide-sm">Degree</th>
              <th className="hide-sm">Years</th>
              <th>{ }</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>University of Washington</td>
              <td className="hide-sm">Computer science</td>
              <td className="hide-sm">Sept 2011 - June 2015</td>
              <td>
                <button type="button" className="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="my-2">
          <button
            type="button"
            className="btn btn-danger"
          >
            <i className="fas fa-user-minus" />
            &nbsp;
            Delete My Account
          </button>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
