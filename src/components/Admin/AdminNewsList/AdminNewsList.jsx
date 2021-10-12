import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

// import constants from constants.js
import * as constants from '../../../lib/constants';

// import careers content
import newsContents from '../../../lib/mainNews';

// import Card Component 
import CardNews from '../../common/CardNews';


class AdminNewsList extends Component {
  state = {
    newsContents: []
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  loadNewsContent = () => {
    const { newsContents } = this.state;
    const url = process.env.REACT_APP_BACKEND_API_ENDPOINT + 'list/';

    // axios.post(url, params)
    // .then(function (response) {
    //   console.log(response);
    //   alert("정상 처리 완료");
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  }

  handleClick = (url) => {
	  this.props.history.push(url)
  }

  render() {
    const cardList = newsContents.map((item, index) => {
      const url = `/surromindnews/article/${item.id}`;
      return (
        <CardNews
          key={index} 
          image={item.imageS} 
          title={item.title} 
          date={item.date}
          type={item.type} 
          url={url}
          />
      )
    })

    return (
      <AdminNewsWrapper>
        <div className='btnAddWrapper'>
          <div className='btnAdd' onClick={()=>this.handleClick('newsAdd')}>
            <div className='btnAddText'>추 가</div>
          </div>
        </div>
        <div className='newsInnerWrapper'>
          <div className="cardWrapper">
            {cardList}
            {
              newsContents.length % 3 === 2 
              ?
              <EmptyCardNews/>
              :
              null
            }
          </div>
        </div>
      </AdminNewsWrapper>
    );
  }
}

export default withRouter(AdminNewsList);

const AdminNewsWrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  .btnAddWrapper {
    width: ${constants.CARD_WRAPPER_WIDTH}px;
    padding-top: 50px;
    padding-left: 100px;
    padding-right: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .btnAdd {
    width: 130px;
    height: 40px;
    border-radius: 10px;
    background-color: #ED7100;
    color: white;
    font-size: 20px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .newsInnerWrapper {
    width: ${constants.CARD_WRAPPER_WIDTH}px;
    padding: 50px 100px;
  }

  .cardWrapper {
    width: 100%;
    min-height: ${constants.CARD_WRAPPER_MIN_HEIGHT}px;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    align-content: flex-start;
  }
`;

const EmptyCardNews = styled.div`
  width: ${constants.CARD_WIDTH}px;
  height: ${constants.CARD_NEWS_HEIGHT}px;
`; 



