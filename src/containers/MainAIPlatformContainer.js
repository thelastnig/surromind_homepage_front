import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Map, List } from 'immutable';
import MainAIPlatform from '../components/MainAIPlatform';


class MainAIPlatformContainer extends Component {

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


export default connect(
  (state) => ({
  }),
  (dispatch) => ({
  })
)(withRouter(MainAIPlatformContainer));