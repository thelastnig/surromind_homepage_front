import React, { Component } from 'react';
import PHM from '../components/Company/PHM';
import { withRouter } from 'react-router-dom';

class PHMContainer extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <PHM {...this.props}/>
      </div>
    );
  }
}


export default withRouter(PHMContainer);