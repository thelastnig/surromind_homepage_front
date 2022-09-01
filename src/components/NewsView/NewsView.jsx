import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import axios from 'axios';

// import constants from constants.js
import * as constants from '../../lib/constants';

// import UpperImage Component for upper image area
import UpperImage from '../common/UpperImage';

// import backto component
import BackToList from '../common/BackToList';

// import utils
import { stringToDate, dateToString, dateToStringId } from '../../lib/utils';

class NewsView extends Component {
  state = {
    newsItem: {
      newscontents: []
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.loadArticle();
  }

  loadArticle = () => {
    const { articleID } = this.props.match.params;
    const newsID = articleID.substr(8, articleID.length);
    const url = process.env.REACT_APP_BACKEND_API_ENDPOINT + 'detail/' + newsID + '/'

    axios.get(url)
    .then(response => {
      this.setState({
        newsItem: response.data.data
      });
    })
    .catch(error => {
      console.log(error);
    });
  }
  
  render() {
    const { newsItem } = this.state;

    const makeDivWithClassName = (content, index) => {
      const imageRoot = process.env.REACT_APP_BACKEND_IMAGE_ENDPOINT;
      let div = <div className="eachContent normal" key={index}></div>

      if (content.type === 'image') {
        div = <div className="eachContentImage" key={index}>
          <img src={imageRoot + content.image} alt='news image'/>
        </div>
      } else if (content.type === 'imageWithCaption') {
        div = <div className="eachContentImage withCaption" key={index}>
          <img src={imageRoot + content.image} alt='news image'/>
        </div>
      } else if (content.type === 'imageWithLink') {
        div = <div className="eachContentImage withLink" key={index}>
          <a href={content.link}><img src={content.src} alt='news image'/></a>
        </div>
      } else if (content.type === 'subTitle') {
        div = <div className="eachContent subTitle" key={index}>{content.desc}</div>
      } else if (content.type === 'textNormalCenter') {
        div = <div className="eachContent center" key={index}>{content.desc}</div>
      } else if (content.type === 'link') {
        div = <a key={index} className='eachContent link' href={content.desc}>{content.desc}</a>
      } else if (content.type === 'imageCaption') {
        div = <div className="eachContent caption" key={index}>{content.desc}</div>
      } else if (content.type === 'normalLink') {
        div = <div className="eachContent normalLink" key={index}>{content.desc}</div>
      } else {
        div = <div className="eachContent normal" key={index}>{content.desc}</div>
      }
      return div
    }

    const newsContentsList = newsItem.newscontents.map((content, index) => {
      if (content.type === "image") {
        const newsImageItem = newsItem.newsimages.filter(image => image.news_content == content.id)[0];
        const div = makeDivWithClassName(newsImageItem, index)
        return (div);
      } else if (content.type === "imageWithCaption") {
        const newsImageItem = newsItem.newsimages.filter(image => image.news_content == content.id)[0];
        const divImage = makeDivWithClassName(newsImageItem, index);
        const divCaption = makeDivWithClassName({
          type: "imageCaption",
          desc: newsImageItem.caption
        }, String(index) + '-');
        return (
          <Fragment>
            {divImage}
            {divCaption}
          </Fragment>
        )
      } else {
        const div = makeDivWithClassName(content, index);
        return (div);
      }
    });

    let keywordsList = [];

    if (newsItem.tags) {
      const keywords = newsItem.tags.split(',');
      keywordsList = keywords.map((keyword, index) => {
          return (
            <div key={index} className='keyword'>#{keyword}</div>
          );
        });
    }

    let newsDate = '';

    if (newsItem.publish_date) {
      const tempDate = stringToDate(newsItem.publish_date);
      newsDate = dateToString(tempDate);
    }

    return (
      <Wrapper>
        <UpperImage text='News'/>
        <div className='newsViewInnerWrapper'>
          <div className='newsContentWrapper'>
            <div className='newsWrapper'>
              <div className='newsUpperArea'>
                <div className='newsInfo'>NEWS</div>
                <div className='newsKewordsWrapper'>{keywordsList}</div>
              </div>
              <div className='newsDate'>{newsDate}</div>
              <div className='newsText'>
                <div className='newsTextTitle'>{newsItem.title}</div>
                <div className='newsTextContents'>
                  {newsContentsList}
                </div>
              </div>
              <BackToList />
            </div>
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

  .newsViewInnerWrapper {
    width: ${constants.LIMIT_WIDTH}px;
    margin: 0 auto;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 95%;
    }
  }

  .newsContentWrapper {
    width: ${constants.TOTAL_WIDTH}px;
    min-height: ${constants.VIEW_PAGE_MIN_HEIGHT}px;
    margin: 0 auto;
    padding-top: 100px;
    padding-bottom: 100px;
  
    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 100%;
    }
  }

  .newsWrapper {
    width: ${constants.NEWS_CONTENT_WIDTH}px;
    margin: 0 auto;
  
    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 100%;
    }
  }

  .newsUpperArea {
    display: flex;
    align-items: center;
    justify-content: space-between;
  
    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      flex-direction: column;
    }

    .newsInfo {
      width: 15%;
      font-family: ${constants.INTER_FONT};
      color: ${constants.POINT_COLOR};
      font-size: 30px;
      font-weight: 300;
  
      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        width: 100%;
        margin-bottom: 10px;
      }
    }

    .newsKewordsWrapper {
      width: 85%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
  
      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        width: 100%;
      }

      .keyword {
        color: ${oc.gray[6]};
        font-size: 12px;
        margin-right: 20px;
        padding-top: 7px;
        padding-bottom: 5px;
        padding-left: 15px;
        padding-right: 15px;
        margin-bottom: 5px;
        
        font-family: ${constants.APPLE_FONT};
        
        -moz-border-radius: 50px;
        -webkit-border-radius: 50px;
        border-radius: 50px;
        border: 1px solid ${oc.gray[6]};
  
        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          margin-right: 10px;
        }
      }
    }
  }

  .newsDate {
    font-family: ${constants.APPLE_FONT};
    font-size: 13px;
    margin: 15px 0;
  }

  .newsText {

  }

  .newsTextTitle {
    font-family: ${constants.APPLE_FONT};
    font-size: 20px;
    font-weight: 600;
    color: black;
    margin-bottom: 20px;
  }

  .eachContent {
    font-family: ${constants.APPLE_FONT};
    font-size: 14px;
    line-height: 1.7;
    margin-bottom: 25px;
    &.subTitle {
      font-weight: 600;
      margin-bottom: 5px;
    }

    &.link {
      overflow: hidden;
      word-break: break-all;
      line-height: 1.3;
      cursor: pointer;
      text-decoration: underline;
      color: ${oc.blue[7]};
    }

    &.normalLink {
      margin-bottom: 0px;
    }

    &.caption {
      font-size: 14px;
      font-color: ${oc.gray[8]};
      text-align: center;
      margin-bottom: 50px;
    }
  }

  .eachContentImage {
    width: 100%;
    text-align: center;
    margin-bottom: 50px;

    &.withCaption {
      margin-bottom: 10px;
    }

    &.withLink {
      cursor: pointer;
    }

    img {
      max-width: 80%;
    }
  }
`;

