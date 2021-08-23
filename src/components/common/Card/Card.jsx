import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import oc from 'open-color';

// import constants from constants.js
import * as constants from '../../../lib/constants';

// import icon from material-ui/icon
import ArrowForward from "@material-ui/icons/ArrowForward";


class Card extends Component {

  handleClick = (url) => {
    this.props.history.push(url);
  }

  render() {
  const { image, title, type, url } = this.props;
  const isClickDisable = url.includes('/content/') ? false : true;
    return (
      <CardWrapper>
        <div className="cardInnerWrapper">
          <div className="imageWrapper">
            <img src={image} width={constants.CARD_WIDTH} height={isClickDisable ? null : constants.CARD_IMAGE_HEIGHT} alt={title} className='imgItem'/>
          </div>
          <div className='textWrapper'>
            <div className="textInnerWrapper">
              <div className="textInnerUpper">
                <span className="textType">{type}</span>
                <div className="textTitle">{title}</div>
                <div className="textSubTitle"></div>
              </div>
              <div className="textInnerLower">
                <div className='MoreBtn' onClick={() => this.handleClick(url)}>
                  Read More +
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardWrapper>
    )
  }
}

export default withRouter(Card);


const CardWrapper = styled.div`
  cursor: pointer;

  .cardInnerWrapper {
    width: ${constants.CARD_WIDTH}px;
    height: ${constants.CARD_HEIGHT}px;
    border: 1px solid ${oc.gray[4]};
  
    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      margin-bottom: 50px;
    }
  
    @media (max-width: ${constants.MOBILE_SMALL_WIDTH}px) {
      width: 300px;
    }
  }

  .imageWrapper {
    width: 100%;
    height: ${constants.CARD_IMAGE_HEIGHT}px;
  
    @media (max-width: ${constants.MOBILE_SMALL_WIDTH}px) {
      width: 300px;
      height: 163px;
    }

    .imgItem {
      width: ${constants.CARD_WIDTH}px;
      height: ${constants.CARD_IMAGE_HEIGHT}px;
  
      @media (max-width: ${constants.MOBILE_SMALL_WIDTH}px) {
        width: 300px;
        height: 163px;
      }
    }
  }

  .textWrapper {
    width: 100%;
    height: ${constants.CARD_HEIGHT - constants.CARD_IMAGE_HEIGHT}px;
    display: flex;
    align-items: center;
    justify-content: center;
  }  

  .textInnerWrapper {
    width: 95%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

  }

  .textType {
    padding: 4px;
    font-size: 10px;
    font-family: ${constants.APPLE_FONT};
    background: ${constants.POINT_COLOR};
    color: white;
  }

  .textTitle {
    font-family: ${constants.APPLE_FONT};
    font-size: 16px;
    font-weight: 500;
    color: ${oc.gray[8]};
    margin-top: 10px;
  }

  .MoreBtn {
    width: 100%;
    margin: 0 auto;
    border: 1px solid black;
    padding: 7px 0;
    text-align: center;
    font-family: ${constants.INTER_FONT};


    &:hover {
      border: 1px solid ${constants.POINT_COLOR};
      color: ${constants.POINT_COLOR};
    }

    .btnText {
      font-size: 20px;
      font-weight: 300;
    }
  }
`;