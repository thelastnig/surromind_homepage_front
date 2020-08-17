import React, { Component } from 'react';
// import TarotMain from '../components/Tarot/TarotMain';
// import * as tarotActions from '../store/modules/tarot';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Map, List } from 'immutable';
import MainCareers from '../components/MainCareers';


class MainCareersContainer extends Component {

  render() {
    return (
      <div>
        <MainCareers/>
      </div>
    );
  }
}

export default connect(
  (state) => ({
  }),
  (dispatch) => ({
  })
)(withRouter(MainCareersContainer));