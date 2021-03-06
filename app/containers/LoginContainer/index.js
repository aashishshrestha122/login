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
// import './index.css';
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from 'semantic-ui-react';

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
        <div className="login-form">
          <Grid
            textAlign="center"
            style={{ height: '100%' }}
            verticalAlign="middle"
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as="h2" color="teal" textAlign="center">
                Login Page
              </Header>
              <Form size="large" onSubmit={this.handleSubmit}>
                <Segment stacked>
                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={this.handleChange}
                    value={this.state.data.username}
                  />
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                    value={this.state.data.password}
                  />
                  <Button color="teal" fluid size="large">
                    Login
                  </Button>
                </Segment>
              </Form>
            </Grid.Column>
          </Grid>
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
