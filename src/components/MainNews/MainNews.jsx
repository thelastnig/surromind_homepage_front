import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';


// import constants from constants.js
import * as constants from '../../lib/constants'

// import news contents from mainNews.js
import mainNewsContents from '../../lib/mainNews';

// import images
import btnMore from '../../images/btn-more-n.png';

// import backgound-icon images
import imgBg01 from '../../images/backgound-icon/img-bg-graphic-01.png';
import imgBg02 from '../../images/backgound-icon/img-bg-graphic-02.png';
import imgBg08 from '../../images/backgound-icon/img-bg-graphic-08.png';
import imgBg09 from '../../images/backgound-icon/img-bg-graphic-09.png';

// import default main image
import defaultListImage from '../../images/default.jpg';

// import utils
import { stringToDate, dateToString, dateToStringId } from '../../lib/utils';



class MainNews extends Component {

  state = {
    newsContents: []
  }

  componentDidMount() {
    this.loadNewsContent(1);
  }
  
  loadNewsContent = (page) => {
    const url = process.env.REACT_APP_BACKEND_API_ENDPOINT + 'list/' + page + '/';

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
    this.props.history.push(url);
  }
  
  handleMoreClick = () => {
    this.props.history.push('/surromindnews/list/1');
  }

  render() {
    const { newsContents } = this.state;
    let newsItems = null;

    if (newsContents.length === 0) {
      newsItems = null;
      // newsItems = mainNewsContents.map((item, index) => {
      //   if (index > 3) {
      //     return;
      //   }
      //   return (
      //     <div className='newsItem' key={index} onClick={() => this.handleClick(item.url)}>
      //       <img src={item.image} alt={item.image}/>
      //       <div className='newsAddLayer'>
      //         <div className='newsTextWrapper'>
      //           <div className='itemType'>{item.type}</div>
      //           <div className='itemDate'>{item.date}</div>
      //           <div className='itemTitle'>{item.title}</div>
      //         </div>
      //       </div>
      //     </div>
      //   )
      // })
    } else {
      newsItems = newsContents.map((item, index) => {
        if (index > 3) {
          return;
        }
      const tempDate = stringToDate(item.publish_date);
      const itemDate = dateToString(tempDate);
      const itemID = dateToStringId(tempDate) + String(item.id);
      const url = `/surromindnews/article/${itemID}`;
      const imageList = item.newsimages;
      const listImage = imageList.find(image => image.type === 'main');
      const imagePath = (typeof listImage == 'undefined' || listImage == null)  ? defaultListImage : process.env.REACT_APP_BACKEND_IMAGE_ENDPOINT + listImage.image;
        return (
          <div className='newsItem' key={index} onClick={() => this.handleClick(url)}>
            <img src={imagePath} alt={imagePath}/>
            <div className='newsAddLayer'>
              <div className='newsTextWrapper'>
                <div className='itemType'>NEWS</div>
                <div className='itemDate'>{itemDate}</div>
                <div className='itemTitle'>{item.short_title}</div>
              </div>
            </div>
          </div>
        )
      })
    }

    return (
      <Fragment>
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
                  <div className="styledLink" onClick={this.handleMoreClick}>
                    <div className="moreText">more</div>
                    <div className="moreBtn"><img src={btnMore} alt="btnMore"/></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="innerLower">
              {newsItems}
            </div>
          </div>
          <div className="newsLowerLine"></div>
        </MainNewsWrapper>
        <MainNewsWrapperMobile>
          <div className="newsInnerWrapper">
            <div className="innerUpper">
              <div className="innerUpperTitle">SURROMIND News</div>
              <div className="innerUpperSubWrapper">
                <div className="innerUpperSubLeft"></div>
                <div className="innerUpperSubTitle">써로마인드의 최신 소식을 확인해보세요.</div>
                <div className="innerUpperSubRight">
                  <div className="styledLink" onClick={this.handleMoreClick}>
                    <div className="moreText">more</div>
                    <div className="moreBtn"><img src={btnMore} alt="btnMore" width="14px"/></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="innerLower">
              {newsItems}
            </div>
          </div>
        </MainNewsWrapperMobile>
      </Fragment>
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
    display: none;
  }

  .newsInnerWrapper {
    width: ${constants.TOTAL_WIDTH - 8}px;
    height: ${constants.MAIN_NEWS_AREA_HEIGHT}px;
    margin: 0 auto;
  }

  .innerUpper {
    margin: 0 auto;
    border: 1px solid white;

    .innerUpperTitle {
      margin-top: 162px;
      height: 65px;
      font-family: ${constants.INTER_FONT};
      font-size: 54px;
      font-weight: 800;  
      letter-spacing: -1px;
      text-align: center;
      color: #000000;
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

      .styledLink {
        width: 61px;  
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.6px;
        color: #000000;
        text-decoration: none;
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .moreText {
        font-family: ${constants.APPLE_FONT};
      }

      .moreBtn {
      }
    }
  }

  .innerLower {
    margin-top: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .newsItem {
      color: white;
      position: relative;
      border-radius: 10px;
      cursor: pointer;
      
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;

      img {
        width: 250px;
        border-radius: 10px;
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
      }

      .itemType {
        font-family: ${constants.APPLE_FONT};

      }

      .itemDate {
        font-family: ${constants.APPLE_FONT};
        font-size: 12px;
        font-weight: 300;
        margin-top: 5px;
        margin-bottom: 5px;
      }

      .itemTitle {
        font-family: ${constants.APPLE_FONT};
        font-size: 20px;
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

const MainNewsWrapperMobile = styled.div`
  width: 100%;
  margin: 0 auto;
  display: none

  @media (max-width: ${constants.MOBILE_WIDTH}px) {
    display: block;
  }

  @media (min-width: ${constants.MOBILE_WIDTH}px) {
    display: none;
  }

  .newsInnerWrapper {
    width: 95%;
    margin: 0 auto;
    margin-bottom: 10px;
  }

  .innerUpper {
    margin: 0 auto;

    .innerUpperTitle {
      margin-top: 50px;
      font-family: ${constants.INTER_FONT};
      font-size: 22px;
      font-weight: 800;    
      letter-spacing: -0.82px;
      text-align: center;
      color: #000000;
    }

    .innerUpperSubWrapper {
      width: 100%;
      margin-top: 5px;
    }

    .innerUpperSubTitle {
      font-family: ${constants.APPLE_FONT};
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.15;
      letter-spacing: -0.39px;
      text-align: center;
      color: #000000;
    }

    .innerUpperSubRight {
      width: 100%;
      cursor: pointer;

      .styledLink {
        width: 48px;
        margin: 0 auto; 
        margin-top: 10px; 
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: #000000;
        text-decoration: none;
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .moreText {
        font-family: ${constants.APPLE_FONT};
      }

      .moreBtn {
        height: 16px;
      }
    }
  }

  .innerLower {
    margin: 0 auto;
    margin-top: 21px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: ${constants.MOBILE_SMALL_WIDTH}px) {
      justify-content: center;
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
      margin-bottom: 20px;

      img {
        width: 156px;
        border-radius: 10px;
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
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 15px;
      }

      .itemType {
        font-family: ${constants.APPLE_FONT};
        font-size: 12px;
      }

      .itemDate {
        font-family: ${constants.APPLE_FONT};
        font-size: 11px;
        font-weight: 300;
        margin-top: 5px;
        margin-bottom: 5px;
      }

      .itemTitle {
        font-family: ${constants.APPLE_FONT};
        font-size: 14px;
      }
    }
  }
`;

