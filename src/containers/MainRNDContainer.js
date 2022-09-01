import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as articleActions from '../store/modules/article'
import { bindActionCreators } from 'redux';
import MainRNDnew from '../components/MainRNDnew';


class MainRNDContainer extends Component {

  componentDidMount() {
  }
  
  handleClickArticle = (rndID) => {
    const { ArticleActions } = this.props;
    if (rndID === null || rndID === '') {
      return;
    } else {
      ArticleActions.setRNDID(rndID);
      this.props.history.push('/rnd/content/' + rndID);
    }
  }

  render() {
    return (
      <div>
        {/* <MainRND handleClickArticle={this.handleClickArticle}/> */}
        <MainRNDnew/>
      </div>
    );
  }
}


export default connect(
  (state) => ({
    rndID: state.article.get('rndID'),
  }),
  (dispatch) => ({
    ArticleActions: bindActionCreators(articleActions, dispatch)
  })
)(withRouter(MainRNDContainer));