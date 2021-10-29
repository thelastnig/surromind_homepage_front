import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import axios from 'axios';

// import constants from constants.js
import * as constants from '../../lib/constants';

// import UpperImage Component for upper image area
import UpperImage from '../common/UpperImage';

// import Card Component 
import CardNews from '../common/CardNews';

// import careers content
import newsContents from '../../lib/mainNews';

// import default list image
import defaultListImage from '../../images/default_thumb.jpg';

// import pagination
import ReactPaginate from 'react-paginate';

// import utils
import { stringToDate, dateToString, dateToStringId } from '../../lib/utils';


class NewsList extends Component {
  state = {
    newsContents: [],
    page: 1,
    pageNum: 0,
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const page = this.checkPageValid();
    this.loadNewsContent(page);
  }

  checkPageValid = () => {
    const { page } = this.props.match.params;
    const pageInt = parseInt(page);
    if (isNaN(pageInt) || pageInt <= 0) {
      alert('잘못된 접근입니다.');
      this.props.history.push('/admin/main');
    }
    return page;
  }

  loadNewsContent = (page) => {
    const url = process.env.REACT_APP_BACKEND_API_ENDPOINT + 'list/' + page + '/';

    axios.get(url)
    .then(response => {
      this.setState({
        newsContents: response.data.data,
        page: page,
        pageNum: response.data.page_num,
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  handleClick = (url) => {
	  this.props.history.push(url)
  }

  handlePageClick = (data) => {
    const selectedPage = data.selected + 1;
    this.props.history.push('/surromindnews/list/' + String(selectedPage));
    this.loadNewsContent(String(selectedPage));
    window.scrollTo(0, 0);
  }

  
  render() {
    const { newsContents, pageNum, page } = this.state;
    const cardList = newsContents.map((item, index) => {
      const tempDate = stringToDate(item.publish_date);
      const itemDate = dateToString(tempDate);
      const itemID = dateToStringId(tempDate) + String(item.id);
      const url = `/surromindnews/article/${itemID}`;
      const imageList = item.newsimages;
      const listImage = imageList.find(image => image.type === 'list');
      const imagePath = (typeof listImage == 'undefined' || listImage == null)  ? defaultListImage : process.env.REACT_APP_BACKEND_IMAGE_ENDPOINT + listImage.image;
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
    });
  
    return (
      <Wrapper>
        <UpperImage text='News'/>
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
        <div className='pagenationWrapper'>
        {pageNum > 1
        ?          
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageNum}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
          forcePage={parseInt(page) - 1}
        />
        :
        null
        }
        </div>
      </Wrapper>
    );
  }
}

export default NewsList;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  color: ${oc.gray[9]};

  .newsInnerWrapper {
    width: ${constants.LIMIT_WIDTH}px;
    margin: 0 auto;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 95%;
    }
  }

  .cardWrapper {
    width: ${constants.CARD_WRAPPER_WIDTH}px;
    min-height: ${constants.CARD_WRAPPER_MIN_HEIGHT}px;
    margin: 0 auto;
    padding: 100px 0;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    align-content: flex-start;
  
  
    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 100%;
      justify-content: center;
    }
  }

  .pagenationWrapper {
    width: ${constants.LIMIT_WIDTH}px;
    margin: 0 auto;
    margin-bottom: 200px;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 95%;
    }
  
    .pagination { 
      display: flex; 
      justify-content: center; 
      margin-top: 15px; 
    }

    ul { 
      list-style: none; 
      padding: 0px; 
    }

    ul.pagination li { 
      display: inline-block; 
      width: 35px; 
      height: 35px; 
      border: 1px solid ${oc.gray[3]}; 
      display: flex; 
      justify-content: center; 
      align-items: center; 
      font-size: 16px;
    }

    ul.pagination li:first-child { 
      border-radius: 5px 0 0 5px; 
    } 
      
    ul.pagination li:last-child { 
      border-radius: 0 5px 5px 0; 
    }

    ul.pagination li a { 
      width: 100%; 
      height: 100%; 
      text-decoration: none; 
      color: ${oc.gray[8]};
      font-size: 16px; 
      display: table-cell; 
      text-align: center;
      line-height: 35px;
      cursor: pointer;
    }

    ul.pagination li.active a { 
      color: white; 
    }

    ul.pagination li.active { 
      background-color: #ED7100;
    }

    ul.pagination li a:hover, ul.pagination li a.active { 
      color: #ED7100; 
    }

    .page-selection { 
      width: 48px; 
      height: 30px; 
      color: #ED7100;
    }
  }



`;

const EmptyCardNews = styled.div`
  width: ${constants.CARD_WIDTH}px;
  height: ${constants.CARD_NEWS_HEIGHT}px;

  @media (max-width: ${constants.MOBILE_WIDTH}px) {
    display: none;
  }
`; 