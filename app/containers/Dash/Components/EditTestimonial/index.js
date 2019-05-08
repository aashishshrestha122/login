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
import { editRequest } from './actions';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectEditTestimonial from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Navbar from '../Navbar/navbar';

class EditTestimonial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  // useInjectReducer({ key: 'editTestimonial', reducer });
  // useInjectSaga({ key: 'editTestimonial', saga });
  componentDidMount() {
    this.props.dataRequest();
  }

  componentWillReceiveProps(data) {
    if (data.gettestimonial.response) {
      this.setState(
        {
          data,
        },
        () => console.log(this.state.data, 'edittest'),
      );
    }
  }
  render() {
    return (
      <div>
        <Navbar />
        EditTestimonial
        <div />
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

const withReducer = injectReducer({ key: 'gettestimonial', reducer });
const withSaga = injectSaga({ key: 'gettestimonial', saga });

const mapDispatchToProps = dispatch => ({
  dataRequest: data => dispatch(editRequest()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withReducer,
  withSaga,
  memo,
)(EditTestimonial);
