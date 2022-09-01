import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MainAIPlatform from '../components/MainAIPlatform';


class PlatformContainer extends MainAIPlatform {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <MainAIPlatform/>
      </div>
    );
  }
}


export default withRouter(PlatformContainer);