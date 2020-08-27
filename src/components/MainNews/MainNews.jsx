import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link, withRouter } from 'react-router-dom';

// import constants from constants.js
import * as constants from '../../lib/constants'

// import news contents from mainNews.js
import mainNewsContents from '../../lib/mainNews';

class MainNews extends Component {

  handleClick = (url) => {
    this.props.history.push(url);
  }
  
  handleMoreClick = () => {
    this.props.history.push('/surromindnews/list/1');
  }

  render() {
    const newsItems = mainNewsContents.map((item, index) => {
      return (
        <div className='newsItem' key={index} onClick={() => this.handleClick(item.url)}>
          <img src={item.image} alt={item.image}/>
          <div className='newsAddLayer'>
            <div className='newsTextWrapper'>
              <div className='itemType'>{item.type}</div>
              <div className='itemDate'>{item.date}</div>
              <div className='itemTitle'>{item.title}</div>
            </div>
          </div>
        </div>
      )
    })

    return (
      <MainNewsWrapper>
        <div className="newsInnerWrapper">
          <div className="innerLeft">
            <div className="innerLeftUpperText">
              SurroMind<br/>News
            </div>
            <div className="innerLeftLowerLink">
              <div className="styledLink" onClick={this.handleMoreClick}>MORE +</div>
            </div>
          </div>
          <div className="innerRight">
            {newsItems}
          </div>
        </div>
      </MainNewsWrapper>
    );
  }
}

export default withRouter(MainNews);

const MainNewsWrapper = styled.div`
  width: 100%;
  padding: ${constants.MAIN_NEWS_AREA_HEIGHT / 4}px 0;
  margin: 0 auto;

  display: flex;
  align-items: center;

  .newsInnerWrapper {
    width: ${constants.TOTAL_WIDTH}px;
    height: ${constants.MAIN_NEWS_AREA_HEIGHT / 2}px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${constants.TOTAL_WIDTH}px) {
      width: 100%;
      height: 100%;
      flex-direction: column;
    }
  }

  .innerLeft {
    width: 15%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: ${constants.TOTAL_WIDTH}px) {
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
    }

    .innerLeftUpperText {
      font-size: ${constants.MAIN_TITLE_SIZE - 5}px;
      font-weight: 600;
      line-height: 1.2em;

      @media (max-width: ${constants.TOTAL_WIDTH}px) {
        margin-left: 10px;
        font-size: ${constants.RESPONSIVE_MAIN_TITLE_SIZE};
      }
    }

    .innerLeftLowerLink {
      cursor: pointer;

      @media (max-width: ${constants.TOTAL_WIDTH}px) {
        margin-right: 10px;
      }

      .styledLink {
        font-size: 16px;
        color: ${oc.gray[8]};
        text-decoration: none;
  
        &:hover {
          color: ${constants.POINT_COLOR};
        }
      }
    }
  }

  .innerRight {
    width: 85%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${constants.TOTAL_WIDTH}px) {
      width: 100%;
    }

    .newsItem {
      color: white;
      position: relative;
      border-radius: 10px;
      cursor: pointer;

      @media (max-width: ${constants.TOTAL_WIDTH}px) {
        margin: 0 10px;
      }

      img {
        max-width: 250px;

        @media (max-width: ${constants.TOTAL_WIDTH}px) {
          width: 100%;
        }
      }

      .newsAddLayer {
        background-color: rgba(0, 0, 0, 0.3);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 10px;

        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        &:hover {
          background-color: rgba(237, 113, 0, 0.7);
        }
      }

      .newsTextWrapper {
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 20px;
      }

      .itemType {

      }

      .itemDate {
        font-size: 12px;
        font-weight: 300;
        margin-top: 5px;
        margin-bottom: 5px;
      }

      .itemTitle {
        font-family: ${constants.KOR_FONT};
        font-size: 20px;

        @media (max-width: ${constants.TOTAL_WIDTH}px) {
          font-size: ${constants.RESPONSIVE_MAIN_SUB_TITLE_SIZE};
        }
      }
    }
    
  }
`;

