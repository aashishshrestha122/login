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
import { Card, Button } from 'semantic-ui-react';
import Navbar from '../Navbar/navbar';
import './index.css';
import history from '../../../../utils/history';

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
        // () => console.log(this.state.data ),
      );
      // console.log(this.state.data);
      // console.log(data, 'data');
      // console.log(data.gettestimonial.response[0], 'index recieved');
      // console.log(data.gettestimonial.response[0]._id);
    }
  }
  
  onEditChange() {
    // e.preventDefault();
    // console.log()
    history.push('/edittestimonials');
  }
  render() {
    return (
      <div>
        <Navbar />
        <div>List Testimonials</div>

        {this.state.data &&
          this.state.data.gettestimonial.response.map((element, index) => (
            <div key={index}>
              <br />

              <Card>
                <ul>
                  <li>
                    <Button
                      color="blue"
                      className="px-4"
                      className="button"
                      onClick={this.onEditChange}
                    >
                      Edit
                    </Button>
                  </li>
                  <li>
                    <Button color="red" className="px-4">
                      Delete
                    </Button>
                  </li>
                </ul>
                <Card.Content header={element.personName} />
                <Card.Content
                  meta="Testimonial"
                  description={element.testimonialContent}
                />
                <Card.Content
                  meta="Organization"
                  description={element.organization}
                />
              </Card>
            </div>
          ))}
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
