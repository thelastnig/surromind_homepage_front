import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Map, List } from 'immutable';
import AdminMain from '../components/Admin/AdminMain';


class AdminMainContainer extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <AdminMain/>
      </div>
    );
  }
}


export default connect(
  (state) => ({
  }),
  (dispatch) => ({
  })
)(withRouter(AdminMainContainer));