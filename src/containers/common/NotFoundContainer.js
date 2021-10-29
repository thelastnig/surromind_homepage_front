import React, { Component } from 'react';
import NotFound from '../../components/common/NotFound';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Map, List } from 'immutable';

class NotFoundContainer extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <NotFound {...this.props}/>
      </div>
    );
  }
}


export default connect(
  (state) => ({
  }),
  (dispatch) => ({
  })
)(withRouter(NotFoundContainer));