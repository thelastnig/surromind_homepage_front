import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Map, List } from 'immutable';
import AdminBanner from '../components/Admin/AdminBanner';


class AdminBannerContainer extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <AdminBanner {...this.props} />
      </div>
    );
  }
}


export default connect(
  (state) => ({
  }),
  (dispatch) => ({
  })
)(withRouter(AdminBannerContainer));