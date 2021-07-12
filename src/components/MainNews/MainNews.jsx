import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link, withRouter } from 'react-router-dom';

// import constants from constants.js
import * as constants from '../../lib/constants'

// import news contents from mainNews.js
import mainNewsContents from '../../lib/mainNews';

// import backgound-icon images
import imgBg01 from '../../images/backgound-icon/img-bg-graphic-01.png';
import imgBg02 from '../../images/backgound-icon/img-bg-graphic-02.png';
import imgBg08 from '../../images/backgound-icon/img-bg-graphic-08.png';
import imgBg09 from '../../images/backgound-icon/img-bg-graphic-09.png';

class MainNews extends Component {

  handleClick = (url) => {
    this.props.history.push(url);
  }
  
  handleMoreClick = () => {
    this.props.history.push('/surromindnews/list/1');
  }

  render() {
    const newsItems = mainNewsContents.map((item, index) => {
      if (index > 3) {
        return;
      }
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
        <div className="backgroundIcon imgBg01"><img src={imgBg01} alt="imgBg01" /></div>
        <div className="backgroundIcon imgBg02"><img src={imgBg02} alt="imgBg02" /></div>
        <div className="backgroundIcon imgBg08"><img src={imgBg08} alt="imgBg08" /></div>
        <div className="backgroundIcon imgBg09"><img src={imgBg09} alt="imgBg09" /></div>
        <div className="newsInnerWrapper">
          <div className="innerUpper">
            <div className="innerUpperTitle">SURROMIND News</div>
            <div className="innerUpperSubWrapper">
              <div className="innerUpperSubLeft"></div>
              <div className="innerUpperSubTitle">써로마인드의 최신 소식을 확인해보세요.</div>
              <div className="innerUpperSubRight">
                <div className="styledLink" onClick={this.handleMoreClick}>MORE +</div>
              </div>
            </div>
          </div>
          <div className="innerLower">
            {newsItems}
          </div>
        </div>
        <div className="newsLowerLine"></div>
      </MainNewsWrapper>
    );
  }
}

export default withRouter(MainNews);

const MainNewsWrapper = styled.div`
  width: ${constants.LIMIT_WIDTH}px;
  margin: 0 auto;
  position: relative;
  height: ${constants.MAIN_NEWS_AREA_HEIGHT}px;
  @media (max-width: ${constants.MOBILE_WIDTH}px) {
    margin-left: 0;
    padding: ${constants.MAIN_NEWS_AREA_HEIGHT / 10}px 0;
  }

  .newsInnerWrapper {
    width: ${constants.TOTAL_WIDTH - 8}px;
    height: ${constants.MAIN_NEWS_AREA_HEIGHT}px;
    margin: 0 auto;

    @media (max-width: ${constants.TOTAL_WIDTH}px) {
      width: 100%;
      height: 100%;
      flex-direction: column;
    }
  }

  .innerUpper {
    margin: 0 auto;
    border: 1px solid white;

    @media (max-width: ${constants.TOTAL_WIDTH}px) {
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
    }

    .innerUpperTitle {
      margin-top: 162px;
      height: 65px;
      font-family: ${constants.INTER_FONT};
      font-size: 54px;
      font-weight: 800;  
      letter-spacing: -1px;
      text-align: center;
      color: #000000;

      @media (max-width: ${constants.TOTAL_WIDTH}px) {
        margin-left: 10px;
        font-size: ${constants.RESPONSIVE_MAIN_TITLE_SIZE};
      }

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        margin-left: 0;
        font-size: ${constants.RESPONSIVE_MAIN_TITLE_SIZE_MOBILE_LARGE}px;
      }
    }

    .innerUpperSubWrapper {
      width: 100%;
      height: 28px;
      margin-top: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;  
    }

    .innerUpperSubTitle {
      font-family: ${constants.APPLE_FONT};
      font-size: 20px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.4;
      letter-spacing: -0.6px;
      text-align: center;
      color: #000000;
    }

    .innerUpperSubRight {
      cursor: pointer;

      @media (max-width: ${constants.TOTAL_WIDTH}px) {
        margin-right: 10px;
      }

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        margin-right: 0;
        display: flex;
        align-items: flex-end;
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

  .innerLower {
    margin-top: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${constants.TOTAL_WIDTH}px) {
      width: 100%;
      margin: 0 auto;
    }

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      flex-wrap: wrap;
    }

    .newsItem {
      color: white;
      position: relative;
      border-radius: 10px;
      cursor: pointer;
      
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;

      @media (max-width: ${constants.TOTAL_WIDTH}px) {
        margin: 0 10px;
      }

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        width: 45%;
        max-width: 250px;
        margin: 0 0;
        margin-top: 20px;
      }

      img {
        width: 250px;
        border-radius: 10px;

        @media (max-width: ${constants.TOTAL_WIDTH}px) {
          width: 100%;
        }

        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          width: 100%;
          height: 100%;
        }
      }

      .newsAddLayer {
        background-color: rgba(0, 0, 0, 0.2);
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
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 20px;

        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          padding-left: 10px;
          padding-right: 10px;
        }
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

        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          font-size: ${constants.RESPONSIVE_MAIN_TITLE_SIZE_MOBILE};
        }
      }
    }
  }

  .newsLowerLine {
    margin: 0 auto;
    width: ${constants.TOTAL_WIDTH}px;
    border-bottom: 1px solid #e1e2e3;
  }

  .backgroundIcon {
    position: absolute;

    &.imgBg01 {
      bottom: 229px;
      left: 159px;
    }

    &.imgBg02 {
      bottom: 152px;
      left: 94px;
    }

    &.imgBg08 {
      bottom: 240px;
      right: 95px;
    }

    &.imgBg09 {
      bottom: 110px;
      right: 223px;
    }
  }
`;

