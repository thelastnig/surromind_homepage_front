import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Map, List } from 'immutable';
import AdminNews from '../components/Admin/AdminNews';


class AdminNewsContainer extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <AdminNews/>
      </div>
    );
  }
}


export default connect(
  (state) => ({
  }),
  (dispatch) => ({
  })
)(withRouter(AdminNewsContainer));