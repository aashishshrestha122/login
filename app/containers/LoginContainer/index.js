/**
 *
 * LoginContainer
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLoginContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import { LOGIN_REQUEST } from './constants';
import { loginRequest } from './actions';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        username: '',
        password: '',
      },
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      username: this.state.data.username,
      password: this.state.data.password,
    };
    // console.log(this.props);
    // console.log(data);
    this.props.login(data);
    // console.log(this.props.login(data));
  };

  handleChange = e => {
    const { name } = e.target;
    const { data } = this.state;
    data[name] = e.target.value;
    this.setState({
      data,
    });
  };

  render() {
    // useInjectReducer({ key: 'loginContainer', reducer });
    // useInjectSaga({ key: 'loginContainer', saga });

    return (
      <div>
        <h2>Login Form</h2>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              onChange={this.handleChange}
              value={this.state.data.username}
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.data.password}
            />
            <button type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

// LoginContainer.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  loginContainer: makeSelectLoginContainer(),
});

// function mapDispatchToProps(dispatch) {
//   return {
//     login: (data) => dispatch(LOGIN_REQUEST(data)),
//   };
// }

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(loginRequest(data)),
});

const withReducer = injectReducer({ key: 'LoginContainer', reducer });
const withSaga = injectSaga({ key: 'LoginContainer', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

// const withLoginContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(LoginContainer);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginContainer);
