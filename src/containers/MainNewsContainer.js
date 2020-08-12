import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as articleActions from '../store/modules/article'
import { bindActionCreators } from 'redux';
import { Map, List } from 'immutable';
import MainNews from '../components/MainNews';


class MainNewsContainer extends Component {

  componentDidMount() {
  }
  
  handleClickArticle = (newsArticleID) => {
    const { ArticleActions } = this.props;
    if (newsArticleID === null || newsArticleID === '') {
      return;
    } else {
      ArticleActions.setNewsArticleID(newsArticleID);
      this.props.history.push('/surromindnews/article/' + newsArticleID);
    }
  }

  render() {
    return (
      <div>
        <MainNews handleClickArticle={this.handleClickArticle}/>
      </div>
    );
  }
}


export default connect(
  (state) => ({
    newsArticleID: state.article.get('newsArticleID'),
  }),
  (dispatch) => ({
    ArticleActions: bindActionCreators(articleActions, dispatch)
  })
)(withRouter(MainNewsContainer));