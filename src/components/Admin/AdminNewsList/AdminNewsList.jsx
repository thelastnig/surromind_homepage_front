import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

// import constants from constants.js
import * as constants from '../../../lib/constants';

// import Card Component 
import CardNews from '../../common/CardNews';

// import utils
import { stringToDate, dateToString, dateToStringId } from '../../../lib/utils';
import { ContactSupportOutlined } from '@material-ui/icons';


class AdminNewsList extends Component {
  state = {
    newsContents: []
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.loadNewsContent();
  }

  loadNewsContent = () => {
    const url = process.env.REACT_APP_BACKEND_API_ENDPOINT + 'list/';
    const params = {
      index: 0
    }

    axios.get(url)
    .then(response => {
      this.setState({
        newsContents: response.data.data
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  handleClick = (url) => {
	  this.props.history.push(url)
  }

  render() {
    const { newsContents } = this.state;
    const cardList = newsContents.map((item, index) => {
      const tempDate = stringToDate(item.publish_date);
      const itemDate = dateToString(tempDate);
      const itemID = dateToStringId(tempDate) + String(item.id);
      const url = `/admin/news/article/${itemID}`;
      const imageList = item.newsimages;
      const listImage = imageList.filter(image => image.type === 'list');
      const imagePath = process.env.REACT_APP_BACKEND_IMAGE_ENDPOINT + listImage[0].image;
      return (
        <CardNews
          key={index} 
          image={imagePath} 
          title={item.short_title} 
          date={itemDate}
          type='NEWS' 
          url={url}
          />
      )
    })

    return (
      <AdminNewsWrapper>
        <div className='btnAddWrapper'>
          <div className='btnAdd' onClick={()=>this.handleClick('/admin/news/add')}>
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



