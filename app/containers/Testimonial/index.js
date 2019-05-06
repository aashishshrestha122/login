/**
 *
 * Testimonial
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
import makeSelectTestimonial from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

class Testimonial extends Component {
  // useInjectReducer({ key: 'testimonial', reducer });
  // useInjectSaga({ key: 'testimonial', saga });

  render() {
    return (
      <div>
        Testimonial page
      </div>
    )
  }
}
Testimonial.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  testimonial: makeSelectTestimonial(),
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
)(Testimonial);
