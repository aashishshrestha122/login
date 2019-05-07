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
  render() {
    return (
      <div>
        <Navbar />
        <div>List Testimonials</div>
        <div className="container">
          <div className="align">
            <div className="element" />
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