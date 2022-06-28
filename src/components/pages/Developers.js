import React from 'react';
import Header from '../Header';
import Developer from '../Developer';

function Developers() {
  const skills1 = ['Java', 'C++', 'C#', 'Python'];
  const skills2 = ['HTML', 'CSS', 'Javascript', 'React'];
  return (
    <>
      <Header />
      <section className="container">
        <h1 className="large text-primary">Developers</h1>
        <p className="lead">
          <i className="fab fa-connectdevelop" />
          Browse and connect with developers
        </p>
        <div className="profiles">
          <Developer
            name="John Doe"
            position="Senior Developer"
            company="Microsoft"
            location="Seatle, WA"
            nameLoc="John doe"
            skills={skills1}
          />
          <Developer
            img="https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg?
                 w=200&t=st=1656431102~exp=1656431702~hmac=8127660fc89ca71332ba3ac84efe8844ef6d3167a4f7162a58dddd304ddf6d2b"
            name="Jane Doe"
            position="Junior Developer"
            company="Facebook"
            location="England"
            nameLoc="Jane doe"
            skills={skills2}
          />
        </div>
      </section>
    </>
  );
}

export default Developers;
