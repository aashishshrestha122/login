/**
 *
 * EditTestimonial
 *
 */

import React, { memo, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectEditTestimonial from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Navbar from '../Navbar/navbar';

class EditTestimonial extends Component {
  // useInjectReducer({ key: 'editTestimonial', reducer });
  // useInjectSaga({ key: 'editTestimonial', saga });
  render() {
    return (
      <div>
        <Navbar />
        Edit EditTestimonial
      </div>
    );
  }
}
// EditTestimonial.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  editTestimonial: makeSelectEditTestimonial(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(EditTestimonial);
