import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

// import constants from constants.js
import * as constants from '../../../lib/constants';

// import backto component
import BackToList from '../../common/BackToList';

// import utils
import { stringToDate, dateToString, dateToStringId } from '../../../lib/utils';
import { ContactSupportOutlined } from '@material-ui/icons';


class AdminNewsView extends Component {
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
      <AdminNewsViewWrapper>
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
      </AdminNewsViewWrapper>
    );
  }
}

export default AdminNewsView;

const AdminNewsViewWrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  color: ${oc.gray[9]};

  .newsViewInnerWrapper {
    width: ${constants.TOTAL_WIDTH}px;
  }

  .newsContentWrapper {
    width: 100%;
    min-height: ${constants.VIEW_PAGE_MIN_HEIGHT}px;
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
      font-family: ${constants.INTER_FONT};
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
        padding-top: 7px;
        padding-bottom: 5px;
        padding-left: 15px;
        padding-right: 15px;
        
        font-family: ${constants.APPLE_FONT};
        
        -moz-border-radius: 50px;
        -webkit-border-radius: 50px;
        border-radius: 50px;
        border: 1px solid ${oc.gray[6]};
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

