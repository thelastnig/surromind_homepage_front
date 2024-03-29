import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Map, List } from 'immutable';
import NewsList from '../components/NewsList';


class NewsListContainer extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <NewsList {...this.props}/>
      </div>
    );
  }
}


export default connect(
  (state) => ({
  }),
  (dispatch) => ({
  })
)(withRouter(NewsListContainer));