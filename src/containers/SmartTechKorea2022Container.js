import React, { Component } from 'react';
import SmartTechKorea2022 from '../components/Company/SmartTechKorea2022';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Map, List } from 'immutable';

class SmartTechKorea2022Container extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <SmartTechKorea2022 {...this.props}/>
      </div>
    );
  }
}


export default connect(
  (state) => ({
  }),
  (dispatch) => ({
  })
)(withRouter(SmartTechKorea2022Container));