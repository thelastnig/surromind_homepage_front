import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Map, List } from 'immutable';
import AdminLogin from '../components/Admin/AdminLogin';


class AdminLoginContainer extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <AdminLogin {...this.props} />
      </div>
    );
  }
}


export default connect(
  (state) => ({
  }),
  (dispatch) => ({
  })
)(withRouter(AdminLoginContainer));