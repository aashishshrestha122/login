/**
 *
 * Testimonial
 *
 */

import React, { memo, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectTestimonial from './selectors';
import reducer from './reducer';
import saga from './saga';
import { POST_REQUEST, POST_SUCCESS, POST_ERROR } from './constants';
import { postRequest } from './actions';
import * as jwt from 'jwt-decode';
import Navbar from '../Navbar/navbar';
import history from '../../../../utils/history';

import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from 'semantic-ui-react';

class Testimonial extends Component {
  // useInjectReducer({ key: 'testimonial', reducer });
  // useInjectSaga({ key: 'testimonial', saga });
  constructor(props) {
    super(props);
    this.state = {
      // decoded = jwt(localStorage.getItem("token")),
      data: {
        personName: '',
        testimonialContent: '',
        organization: '',
        message: '',
      },
      file: null,
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const formdata = new FormData();
    const data = {
      personName: this.state.data.personName,
      testimonialContent: this.state.data.testimonialContent,
      organization: this.state.data.organization,
      message: this.state.data.message,
    };

    this.props.submit(data, this.state.file);
    // console.log(data, this.state.file);
    history.push('/dash');
  };

  handleChange = e => {
    const { name } = e.target;
    const { data } = this.state;
    data[name] = e.target.value;
    this.setState({
      data,
    });
  };

  handleFileChange = e => {
    // console.log(e.target.files[0]);
    this.setState({
      ...this.state,
      file: e.target.files[0],
    });
  };

  render() {
    // const decoded = jwt(localStorage.getItem('token'));
    // console.log(this.state);

    return (
      <div>
        <Navbar />
        <div className="login-form">
          <Grid
            textAlign="center"
            style={{ height: '100%' }}
            verticalAlign="middle"
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as="h2" color="teal" textAlign="center">
                Add Testimonial
              </Header>
              <Form size="large" onSubmit={this.handleSubmit}>
                <Segment stacked>
                  <Form.Input
                    fluid
                    required
                    type="text"
                    name="personName"
                    placeholder="Name"
                    onChange={this.handleChange}
                    value={this.state.data.personName}
                  />
                  <Form.TextArea
                    fluid
                    required
                    placeholder="Testimonial Content"
                    type="text"
                    name="testimonialContent"
                    onChange={this.handleChange}
                    value={this.state.data.testimonialContent}
                  />
                  <Form.Input
                    fluid
                    required
                    placeholder="Organization"
                    type="text"
                    name="organization"
                    onChange={this.handleChange}
                    value={this.state.data.organization}
                  />
                  <Form.Input
                    fluid
                    placeholder="Message"
                    type="text"
                    name="message"
                    onChange={this.handleChange}
                    value={this.state.data.message}
                  />
                  <Form.Input
                    fluid
                    placeholder="file"
                    type="file"
                    name="file"
                    onChange={this.handleFileChange}
                  />
                  <Button
                    color="teal"
                    fluid
                    size="large"
                    onSubmit={this.handleSubmit}
                  >
                    Post
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
// Testimonial.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  testimonial: makeSelectTestimonial(),
});

const withReducer = injectReducer({ key: 'Testimonial', reducer });
const withSaga = injectSaga({ key: 'Testimonial', saga });

const mapDispatchToProps = dispatch => ({
  submit: (data, file) => dispatch(postRequest(data, file)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withReducer,
  withSaga,
)(Testimonial);
