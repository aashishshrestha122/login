import React, { Component } from 'react';
// import history from './history';
import './navbar.css';

class Navbar extends Component {
    logout(){
        localStorage.removeItem("token");
        history.pushState("/");
    }
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
          <li>
            <a onClick={this.logout}>Logout</a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Navbar;
