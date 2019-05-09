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
import { getRequest, deleteRequest } from './actions';
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
    const id =
      this.props.match && this.props.match.params.test_id
        ? this.props.match.params.test_id
        : null;
    if (id) this.props.deleteRequest(id);
  }

  componentWillReceiveProps(data) {
    if (data.gettestimonial.response) {
      this.setState({
        data,
      });
    }
  }

  onEditChange(id) {
    // console.log('>>>', id);
    // e.preventDefault();
    // console.log(e)
    // data = id;
    // console.log(data);
    history.push(`/edit-testimonial/${id}`);
  }

  onDelete(id) {
    // history.push(`/delete-testimonial/${id}`)
    this.props.deleteRequest(id);
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
              <div className="card">
                <Card>
                  <ul>
                    <li>
                      <Button
                        color="blue"
                        className="px-4"
                        className="button"
                        onClick={() => this.onEditChange(element._id)}
                      >
                        Edit
                      </Button>
                    </li>
                    <li>
                      <Button
                        color="red"
                        className="px-4"
                        className="button"
                        onClick={() => this.onDelete(element._id)}
                      >
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
  deleteRequest: id => dispatch(deleteRequest(id)),
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
