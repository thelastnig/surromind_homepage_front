import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

// import constants from config.js
import * as constants from '../../lib/constants';

// import images
import productMainStudio from '../../images/new/productMainStudio.png';
import productMainInspection from '../../images/new/productMainInspection.png';
import productMainPHM from '../../images/new/productMainPHM.png';

// setting GA
import ReactGA from 'react-ga';

class MainProduct extends Component {

  handleClick = (url) => {
    this.props.history.push(url);
  }

  clickButton = () => {
    ReactGA.event({
      category: 'User',
      action: 'play video',
      label: 'company promotion video',
    });
  }
  
  render() {
    return (
      <Wrapper>
        <div className="productInnerWrapper">
          <div className="contentsWrapper">
            <div className="titleText">PRODUCT</div>
            <div className="itemWrapper">
              <div className='item'>
                <div className='itemText'>SURROMIND™ AI Studio</div>
                <div className='itemSubText'>손쉬운 인공지능 개발/운영 플랫폼</div>
                <div className='itemImage'>
                  <img src={productMainStudio} width='330px' alt='productMainStudio'/>
                </div>
              </div>
              <div className='item middle' onClick={() => this.handleClick('visioninspection')}>
                <div className='itemText'>SURROVISION™ Inspection</div>
                <div className='itemSubText'>인공지능 머신 비전 솔루션</div>
                <div className='itemImage'>
                  <img src={productMainInspection} width='330px' alt='productMainInspection'/>
                </div>
              </div>
              <div className='item' onClick={() => this.handleClick('phm')}>
                <div className='itemText'>SURROMIND™ PHM​</div>
                <div className='itemSubText'>인공지능 예지보전 솔루션​</div>
                <div className='itemImage'>
                  <img src={productMainPHM} width='330px' alt='productMainPHM'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default withRouter(MainProduct);

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  
  .productInnerWrapper {
    width: ${constants.INNER_WIDTH}px;
    border: 1px solid white;
    background-color: white;
    margin: 0 auto;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 95%;
      height: 100%;
      margin: 0 auto;
      border: none;
      background-color: white;
    }
  }

  .contentsWrapper {
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 100%;
      margin: 0 auto;
    }

    .titleText {
      height: 65px;
      margin: 0 auto;
      text-align: center;
      font-family: ${constants.INTER_FONT};  
      font-size: 65px;
      font-weight: 800;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      color: #070304;

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        height: 100%;
        font-style: normal;
        font-weight: 800;
        font-size: 24px;
        line-height: 29px;
        margin-top: 40px;
        margin-bottom: 20px;
      }
    }

    .itemWrapper {
      width: 100%;
      margin-top: 80px;
      margin-bottom: 150px; 
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0;
      }
    }

    .item {
      width: calc(410px - 60px);
      height: calc(450px - 80px);
      border: 1px solid #D7D7D7;
      border-radius: 30px;
      padding: 40px 30px;
      gap: 3px;

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        width: calc(100% - 60px);
        margin: 0 auto;
        height: 100%;
        border-radius: 10px;
        padding: 30px;
        &.middle {
          margin: 20px 0;
        }
      }
    }

    .itemText {
      font-family: ${constants.INTER_FONT};  
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 34px;
      letter-spacing: -0.05em;
      color: #FF5000;

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        font-size: 20px;
        line-height: 24px;
        letter-spacing: -0.05em;
      }
    }

    .itemSubText {
      font-family: ${constants.NOTO_FONT};
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      line-height: 32px;
      color: #070304;

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        font-size: 16px;
        line-height: 23px;
      }
    }

    .itemImage {
      margin: 0 auto;
      margin-top: 30px;
      text-align: center;
      
      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        img {
          width: 100%;
        }
      }
    }
  }
`;

