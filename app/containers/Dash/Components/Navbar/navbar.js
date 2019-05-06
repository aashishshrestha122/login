import React, { Component } from 'react';
// import history from './history';
import './navbar.css';

class Navbar extends Component {
  logout() {
    localStorage.removeItem('token');
    history.pushState('/');
  }
  render() {
    return (
      <div className="ui inverted segment">
        <div className="ui inverted secondary menu">
          <ul>
            <li className="active item">
              <a>Home</a>
            </li>
            <li className = "item">
              <a>News</a>
            </li>
            <li className="item">
              <a>About</a>
            </li>
            <li className="item">
              <a>Contact</a>
            </li>
            <li className="item">
              <a onClick={this.logout}>Logout</a>
            </li>
            <li className="item">
            <a ></a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Navbar;
