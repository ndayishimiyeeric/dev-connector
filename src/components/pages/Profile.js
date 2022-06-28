import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../Header';
import Gitrepo from '../Gitrepo';

function Profile() {
  const params = useParams();
  const { username } = params;

  let img;
  let skills;
  let position;
  let company;
  let location;
  let expduration;
  let university;
  let eduduraction;
  let degree;
  let field;
  if (username === 'John doe') {
    img = 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200';
    skills = ['Java', 'C++', 'C#', 'Python'];
    position = 'Senior Developer';
    company = 'Microsoft';
    location = 'Seattle, WA';
    expduration = 'Oct 2011 - current';
    university = 'University of Washington';
    eduduraction = 'Sept 1993 - June 1999';
    degree = 'Masters';
    field = 'Computer science';
  } else {
    img = 'https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg?w=200&t=st=1656431102~exp=1656431702~hmac=8127660fc89ca71332ba3ac84efe8844ef6d3167a4f7162a58dddd304ddf6d2b';
    skills = ['HTML', 'CSS', 'Javascript', 'React'];
    position = 'Junior Developer';
    company = 'Facebook';
    location = 'England';
    expduration = 'Oct 2020 - current';
    university = 'University of London';
    eduduraction = 'Sept 2015 - June 2018';
    degree = 'Bachelor';
    field = 'Software Engineering';
  }
  const skillElement = skills.map((skill) => (
    <div className="p-1" key={skill}>
      <i className="fa fa-check" />
      &nbsp;
      {skill}
    </div>
  ));
  return (
    <>
      <Header />
      <section className="container">
        <Link
          to="/developers"
          className="btn"
        >
          Back to profiles
        </Link>
        <div className="profile-grid my-1">
          {/* Top */}
          <div className="profile-top bg-primary p-2">
            <img
              src={img}
              alt={username}
              className="round-img my-1"
            />
            <h1 className="large">{username}</h1>
            <p className="lead">
              {position}
              &nbsp;
              at
              &nbsp;
              {company}
            </p>
            <p>
              {location}
            </p>
            <div className="icons my-1">
              <a href="https://www.github.com">
                <i className="fas fa-globe fa-2x" />
              </a>
              <a href="https://www.twitter.com">
                <i className="fab fa-twitter fa-2x" />
              </a>
              <a href="https://www.facebook.com">
                <i className="fab fa-facebook fa-2x" />
              </a>
              <a href="https://www.linkedin.com">
                <i className="fab fa-linkedin fa-2x" />
              </a>
              <a href="https://www.instagram.com">
                <i className="fab fa-instagram fa-2x" />
              </a>
            </div>
          </div>
          {/* About */}
          <div className="profile-about bg-light p-2">
            <h2 className="text-primary">
              {`${username}'s`}
              &nbsp;
              Bio
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              alias possimus est iusto quis aperiam corporis saepe blanditiis nisi
              doloribus.
            </p>
            <div className="line">{ }</div>
            <h2 className="text-primary">Skill set</h2>
            <div className="skills">
              {skillElement}
            </div>
          </div>
          {/* Experience */}
          <div className="profile-exp bg-white p-2">
            <h2 className="text-primary">Experiences</h2>
            <div>
              <h3>{company}</h3>
              <p>{expduration}</p>
              <p>
                <strong>Position: </strong>
                {position}
              </p>
              <p>
                <strong>Description: </strong>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
                temporibus nesciunt unde et alias deleniti.
              </p>
            </div>
            <div>
              <h3>Sun microsystems</h3>
              <p>Oct 2005 - Nov 2010</p>
              <p>
                <strong>Position: </strong>
                Systems Admin
              </p>
              <p>
                <strong>Description: </strong>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
                temporibus nesciunt unde et alias deleniti.
              </p>
            </div>
          </div>
          {/* Education */}
          <div className="profile-edu bg-white p-2">
            <h2 className="text-primary">Education</h2>
            <div>
              <h3>{university}</h3>
              <p>{eduduraction}</p>
              <p>
                <strong>Degree: </strong>
                {degree}
              </p>
              <p>
                <strong>Field: </strong>
                {field}
              </p>
              <p>
                <strong>Description: </strong>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
                temporibus nesciunt unde et alias deleniti.
              </p>
            </div>
          </div>
          {/* Github repos */}
          <div className="profile-github">
            <h2 className="text-primary my-1">
              <i className="fab fa-github" />
              &nbsp;
              Github Repos
            </h2>
            <Gitrepo
              name="Repo one"
              stars={200}
              forks={300}
              watchers={100}
            />
            <Gitrepo
              name="Repo two"
              stars={150}
              forks={280}
              watchers={120}
            />
            <Gitrepo
              name="Repo three"
              stars={93}
              forks={100}
              watchers={50}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
