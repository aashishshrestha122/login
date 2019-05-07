import React, { Component } from 'react';
// import history from './history';
import './navbar.css';
import * as jwt from 'jwt-decode';
import { Redirect } from 'react-router-dom';
import history from '../../../../utils/history';

class Navbar extends Component {
  logout() {
    localStorage.removeItem('token');
    history.push('/');
  }
  testimonial = () => {
    history.push('/testimonial');
  }
  home  = () => {
    history.push('/dash');
  }
  render() {
    const decoded = jwt(localStorage.getItem('token'));
    // console.log(decoded.user.username);
    return (
      <div className="ui inverted segment">
        <div className="ui inverted secondary menu">
          <ul>
            <li className="active item">
              <a onClick = {this.home}>Home</a>
            </li>
            {/* <li className="item">
              <a onClick = {this.testimonial}>Testimonial</a>
            </li> */}
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
              <a> </a>
            </li>
            <li className="item last">
              <a>{decoded.user.username}</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Navbar;
