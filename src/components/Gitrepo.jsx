import React from 'react';
import { PropTypes } from 'prop-types';

function Gitrepo(props) {
  const {
    name, stars, forks, watchers,
  } = props;
  return (
    <div className="repo bg-white my-1 p-1">
      <div>
        <h4><a href="https://www.github.com">{name}</a></h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Tempora, alias.
        </p>
      </div>
      <div>
        <ul>
          <li className="bdge badge-primary">
            Stars:
            &nbsp;
            {stars}
          </li>
          <li className="bdge badge-dark">
            Watchers:
            &nbsp;
            {watchers}
          </li>
          <li className="bdge">
            Forks:
            &nbsp;
            {forks}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Gitrepo;

Gitrepo.propTypes = {
  name: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  forks: PropTypes.number.isRequired,
  watchers: PropTypes.number.isRequired,
};
