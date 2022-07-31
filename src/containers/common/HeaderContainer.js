import React, { Component } from 'react';
import Header from '../../components/common/Header';
import { withRouter } from 'react-router-dom';
import * as baseActions from '../../store/modules/base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class HeaderContainer extends Component {

  handleClickHome = () => {
    this.props.history.push('/');
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Header {...this.props} 
        handleClickHome={this.handleClickHome}
      />
    );
  }
}

export default connect(
  (state) => ({
    isFooterOpen: state.base.getIn(['footer', 'isFooterOpen']),
    isFooterClose: state.base.getIn(['footer', 'isFooterClose']),
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
  })
)(withRouter(HeaderContainer));