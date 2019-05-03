import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li className="active">
            <a>Home</a>
          </li>
          <li>
            <a>News</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Navbar;
