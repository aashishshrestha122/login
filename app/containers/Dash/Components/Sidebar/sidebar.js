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

import { Redirect } from 'react-router-dom'

class Sidebar extends Component {
    handlePageChange= () => {
        <Redirect to='/testimonial' />
    }
  render() {
    return (
      <div>
        <Button
          color ="blue"
          className="px-4"
          onClick={this.handlePageChange}
        >
          Add Testimonial
        </Button>
      </div>
    );
  }
}
export default Sidebar;
