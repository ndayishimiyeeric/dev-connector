import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import React from 'react';

export default function Error() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <FaExclamationTriangle className="text-danger" size={100} />
      <h1>404</h1>
      <p className="lead">Sorry, this page does not exist</p>
      <Link to="/posts" className="btn btn-primary">Go Back</Link>
    </div>
  );
}
