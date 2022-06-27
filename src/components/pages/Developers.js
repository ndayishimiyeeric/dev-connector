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
            skills={skills1}
          />
          <Developer
            name="Jane Doe"
            position="Junior Developer"
            company="Facebook"
            location="England"
            skills={skills2}
          />
        </div>
      </section>
    </>
  );
}

export default Developers;
