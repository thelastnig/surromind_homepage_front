import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import oc from 'open-color';

// import constants from constants.js
import * as constants from '../../../lib/constants';

// import icon from material-ui/icon
import ArrowForward from "@material-ui/icons/ArrowForward";


class CardNews extends Component {

  handleClick = (url) => {
    this.props.history.push(url);
  }

  render() {
  const { image, title, type, url, date } = this.props;
    return (
      <CardWrapper>
        <div className="cardInnerWrapper">
          <div className="imageWrapper" onClick={() => this.handleClick(url)}>
            <img src={image} width={constants.CARD_WIDTH} height={constants.CARD_IMAGE_HEIGHT} alt={title}/>
          </div>
          <div className='textWrapper'>
            <div className="textInnerWrapper">
              <div className="textInnerUpper">
                <span className="textType">{type}</span>
                <div className="titleWrapper" onClick={() => this.handleClick(url)}>
                  <div className="textTitle">{title}</div>
                  <div className="textDate">{date}</div>
                </div>
                <div className="textSubTitle"></div>
              </div>
            </div>
          </div>
        </div>
      </CardWrapper>
    )
  }
}

export default withRouter(CardNews);


const CardWrapper = styled.div`

  .cardInnerWrapper {
    width: ${constants.CARD_WIDTH}px;
    height: ${constants.CARD_NEWS_HEIGHT}px;
  }

  .imageWrapper {
    width: 100%;
    height: ${constants.CARD_IMAGE_HEIGHT}px;
    border: 1px solid ${oc.gray[4]};
    margin-bottom: 10px;
    cursor: pointer;
  }

  .textWrapper {
    width: 100%;
    height: ${constants.CARD_NEWS_HEIGHT - constants.CARD_IMAGE_HEIGHT}px;
    display: flex;
    align-items: center;
    justify-content: center;
  }  

  .textInnerWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

  }

  .textType {
    padding: 4px;
    font-size: 10px;
    background: ${constants.POINT_COLOR};
    color: white;
  }

  .titleWrapper {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }

  .textTitle {
    font-family: ${constants.NOTO_FONT};
    font-size: 16px;
    font-weight: 500;
    color: ${oc.gray[8]};
  }
  
  .textDate {
    font-size: 14px;
    color: ${oc.gray[6]};
  }
`;