import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Map, List } from 'immutable';
import NewsView from '../components/NewsView';


class NewsViewContainer extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <NewsView {...this.props}/>
      </div>
    );
  }
}


export default connect(
  (state) => ({
  }),
  (dispatch) => ({
  })
)(withRouter(NewsViewContainer));