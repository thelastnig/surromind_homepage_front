import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MainProduct from '../components/MainProduct';


class MainProductContainer extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <MainProduct/>
      </div>
    );
  }
}


export default withRouter(MainProductContainer);