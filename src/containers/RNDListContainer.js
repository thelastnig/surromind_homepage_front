import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Map, List } from 'immutable';
import RNDList from '../components/RNDList';


class RNDListContainer extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <RNDList/>
      </div>
    );
  }
}


export default connect(
  (state) => ({
  }),
  (dispatch) => ({
  })
)(withRouter(RNDListContainer));