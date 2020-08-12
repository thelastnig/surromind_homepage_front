import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Map, List } from 'immutable';
import RNDView from '../components/RNDView';


class RNDViewContainer extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <RNDView/>
      </div>
    );
  }
}


export default connect(
  (state) => ({
  }),
  (dispatch) => ({
  })
)(withRouter(RNDViewContainer));