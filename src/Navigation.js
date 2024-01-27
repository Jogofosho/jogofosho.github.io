import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
					<Link to="https://www.linkedin.com/in/joseph-gonzales-bb0525169/" target="_blank">LinkedIn</Link>
        </li>
				<li>
					<Link to="https://github.com/joemgonzales" target="_blank">GitHub</Link>
				</li>
      </ul>
    </nav>
  );
};

export default Navigation;
