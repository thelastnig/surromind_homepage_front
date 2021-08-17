import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Map, List } from 'immutable';
import AdminSideBar from '../components/Admin/AdminSideBar';


class AdminSideBarContainer extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <AdminSideBar/>
      </div>
    );
  }
}


export default connect(
  (state) => ({
  }),
  (dispatch) => ({
  })
)(withRouter(AdminSideBarContainer));