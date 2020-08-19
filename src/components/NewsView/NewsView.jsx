import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// import constants from constants.js
import * as constants from '../../lib/constants';

// import UpperImage Component for upper image area
import UpperImage from '../common/UpperImage';

// import news contents 
import newsContents from '../../lib/mainNews';

import BackToList from '../common/BackToList';

class NewsView extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render() {
    const newsItem = newsContents.find(item => 
      item.id === 1
    );

    const newsContentsList = newsItem.contents.contentsList.map((content, index) => {
      let div = 
        <div index={index} className='eachContent normal'>
            {content.desc}
        </div>
      if (content.type === 'normal') {
        div = 
          <div index={index} className='eachContent normal'>
              {content.desc}
          </div>
      } else if (content.type === 'subTitle') {
        div = 
          <div index={index} className='eachContent subTitle'>
              {content.desc}
          </div>
      } else if (content.type === 'link') {
        div = <a index={index} className='eachContent link' href={content.desc}>{content.desc}</a>
      }
      return (div);
    });
    
    const keywordsList = newsItem.keywords.map((keyword, index) => {
      return (
        <div index={index} className='keyword'>#{keyword}</div>
      );
    });

    return (
      <Wrapper>
        <UpperImage text='News'/>
        <div className='newsContentWrapper'>
          <div className='newsWrapper'>
            <div className='newsUpperArea'>
              <div className='newsInfo'>NEWS</div>
              <div className='newsKewordsWrapper'>{keywordsList}</div>
            </div>
            <div className='newsDate'>{newsItem.date}</div>
            <div className='newsText'>
              <div className='newsTextTitle'>{newsItem.contents.title}</div>
              <div className='newsTextContents'>
                {newsContentsList}
              </div>
            </div>
            <BackToList url='/'/>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default NewsView;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  color: ${oc.gray[9]};

  .newsContentWrapper {
    width: ${constants.TOTAL_WIDTH}px;
    min-height: ${constants.VIEW_PAGE_MIN_HEIGHT}px;
    margin: 0 auto;
    padding-top: 100px;
    padding-bottom: 100px;
  }

  .newsWrapper {
    width: ${constants.NEWS_CONTENT_WIDTH}px;
    margin: 0 auto;
  }

  .newsUpperArea {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .newsInfo {
      width: 15%;
      color: ${constants.POINT_COLOR};
      font-size: 30px;
      font-weight: 300;
    }

    .newsKewordsWrapper {
      width: 85%;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .keyword {
        color: ${oc.gray[6]};
        font-size: 12px;
        margin-right: 20px;
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 15px;
        padding-right: 15px;
        
        -moz-border-radius: 50px;
        -webkit-border-radius: 50px;
        border-radius: 50px;
        border: 1px solid ${oc.gray[6]};
      }
    }

  }

  .newsDate {
    font-size: 13px;
    margin: 15px 0;
  }

  .newsText {

  }

  .newsTextTitle {
    font-family: ${constants.NOTO_FONT};
    font-size: 20px;
    font-weight: 600;
    color: black;
    margin-bottom: 20px;
  }

  .eachContent {
    font-family: ${constants.NOTO_FONT};
    font-size: 14px;
    line-height: 1.7;
    margin-bottom: 25px;

    &.subTitle {
      font-weight: 600;
      margin-bottom: 5px;
    }

    &.link {
      line-height: 1.3;
      cursor: pointer;
      text-decoration: underline;
      color: ${oc.blue[7]};
    }
  }



  
`;

