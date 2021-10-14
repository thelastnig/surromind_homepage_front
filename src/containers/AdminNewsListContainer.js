import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Map, List } from 'immutable';
import AdminNewsList from '../components/Admin/AdminNewsList';


class AdminNewsListContainer extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <AdminNewsList {...this.props} />
      </div>
    );
  }
}


export default connect(
  (state) => ({
  }),
  (dispatch) => ({
  })
)(withRouter(AdminNewsListContainer));