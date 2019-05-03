/**
 *
 * Dash
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
import makeSelectDash from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Navbar from './Components/Navbar/navbar';
import Sidebar from './Components/Sidebar/sidebar';

export function Dash() {
  useInjectReducer({ key: 'dash', reducer });
  useInjectSaga({ key: 'dash', saga });

  return (
    <div>
      <Navbar />
      <Sidebar />
    </div>
  );
}

Dash.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dash: makeSelectDash(),
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
)(Dash);
