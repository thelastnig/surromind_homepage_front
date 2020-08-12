import React, { Component } from 'react';
// import TarotMain from '../components/Tarot/TarotMain';
// import * as tarotActions from '../store/modules/tarot';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as articleActions from '../store/modules/article'
import { Map, List } from 'immutable';
import MainProjects from '../components/MainProjects';

class MainProjectsContainer extends Component {

  componentDidMount() {

  }
  
  handleClickArticle = (projectID) => {
    const { ArticleActions } = this.props;
    if (projectID === null || projectID === '') {
      return;
    } else {
      ArticleActions.setProjectID(projectID);
      this.props.history.push('/project/content/' + projectID);
    }
  }

  render() {
    return (
      <div>
        <MainProjects handleClickArticle={this.handleClickArticle}/>
      </div>
    );
  }
}


export default connect(
  (state) => ({
    projectID: state.article.get('projectID'),
  }),
  (dispatch) => ({
    ArticleActions: bindActionCreators(articleActions, dispatch)
  })
)(withRouter(MainProjectsContainer));