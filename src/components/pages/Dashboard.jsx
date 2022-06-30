import React from 'react';
import Header from '../Header';
import AddEducation from '../AddEducation';
import AddExperience from '../AddExperience';
import EditProfile from '../EditProfile';
import '../../scss/index.scss';

function Dashboard() {
  return (
    <>
      <Header />
      <section className="container">
        <h1 className="large t-primary">Dashboard</h1>
        <p className="lead">
          <i className="fas fa-user" />
          &nbsp;
          Welcome Jason Doe
        </p>
        <div className="dash-buttons mt-4 mb-5">
          <EditProfile />
          <AddExperience />
          <AddEducation />
        </div>
        <h2 className="mb-4">Experience Credentials</h2>
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
        <h2 className="mt-4 mb-4">Education Credentials</h2>
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
        <div className="my-5">
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
