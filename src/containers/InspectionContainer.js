import React, { Component } from 'react';
import Inspection from '../components/Company/Inspection';
import { withRouter } from 'react-router-dom';

class InspectionContainer extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Inspection {...this.props}/>
      </div>
    );
  }
}


export default withRouter(InspectionContainer);