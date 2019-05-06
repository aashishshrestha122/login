import React, { Component } from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from 'semantic-ui-react';
import history from '../../../../utils/history';
import { Redirect, Switch } from 'react-router-dom';

class Sidebar extends Component {
  handlePageChange = () => {
    history.push('/testimonial');
  };
  render() {
    return (
      <div>
        <Button color="blue" className="px-4" onClick={this.handlePageChange}>
        {/* <Link to="/" /> */}
          Add Testimonial
        </Button>
      </div>
    );
  }
}
export default Sidebar;
