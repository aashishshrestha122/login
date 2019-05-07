/**
 *
 * Gettestimonial
 *
 */

import React, { memo, Component } from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectGettestimonial from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getRequest } from './actions';

import Navbar from '../Navbar/navbar';

class Gettestimonial extends Component {
  // useInjectReducer({ key: 'gettestimonial', reducer });
  // useInjectSaga({ key: 'gettestimonial', saga });
  constructor(props) {
    super(props);
    this.state = {
      isFetchingData: false,
      data: null,
    };
  }
  componentDidMount() {
    this.props.dataRequest();
  }

  componentWillReceiveProps(data) {
    if (data.gettestimonial.response) {
      this.setState(
        {
          data,
        },
        () => console.log(this.state.data, 'bhitrako'),
      );
      console.log(this.state.data, 'bairako');
      // console.log(data, 'data');
      // console.log(data.gettestimonial.response[0], 'index recieved');
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <div>List Testimonials</div>
        <div className="container">
          <h1 />
          <div className="align">
            {console.log(this.state.data, 'bhitra bhitra')}
            <div className="element" />
            {this.state.data &&
              this.state.data.gettestimonial.response.map((element, index) => (
                <div key={index}>
                  <br />
                  <div>{element.personName}</div>
                  <br />
                  <div>{element.testimonialContent}</div><br />
                  <div>{element.organization}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

// Gettestimonial.propTypes = {
//   dispatch: PropTypes.func,
// };

const withReducer = injectReducer({ key: 'gettestimonial', reducer });
const withSaga = injectSaga({ key: 'gettestimonial', saga });

const mapStateToProps = createStructuredSelector({
  gettestimonial: makeSelectGettestimonial(),
});

const mapDispatchToProps = dispatch => ({
  dataRequest: data => dispatch(getRequest()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withReducer,
  withSaga,
)(Gettestimonial);
