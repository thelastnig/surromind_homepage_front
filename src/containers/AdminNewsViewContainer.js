import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Map, List } from 'immutable';
import AdminNewsView from '../components/Admin/AdminNewsView';


class AdminNewsViewContainer extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <AdminNewsView {...this.props} />
      </div>
    );
  }
}


export default connect(
  (state) => ({
  }),
  (dispatch) => ({
  })
)(withRouter(AdminNewsViewContainer));