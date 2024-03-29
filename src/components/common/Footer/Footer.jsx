import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link, withRouter } from 'react-router-dom';

// import constants from constants.js
import * as constants from '../../../lib/constants';

// import images
import surroLogo from '../../../images/surromind_logo_new.png';

// import project & rnd contents
import rndContents from '../../../lib/rnd';

class Footer extends Component {
  
  handleMenuClick = (url) => {
    this.props.history.push(url);
  }

  render() {
    const rndLists = rndContents.map((item, index) => {
      return (
        <div className="styledLink sub" key={index} onClick={() => this.handleMenuClick(item.url)}>{item.titleS}</div>
      )
    })
    return (
      <FooterInnerWrapper>
        <div className='contentsWrapper'>
          <div className='upperArea'>

            <div className='upperInnerArea'>
              <div className="leftItem">
                <div className="styledLink logo">
                  <img className='ImgLogo' src={surroLogo} alt='SurroMind Logo'/>
                </div>
              </div>
              <div className="rightItem">
                <div className="barMenu">
                  <div className="styledLink" onClick={() => this.handleMenuClick('/surromindnews/list/1')}>SURROMIND</div>
                  <div className='subBarMenu'>
                    <div className="styledLink sub" onClick={() => this.handleMenuClick('/surromindnews/list/1')}>당사 소식</div>
                  </div>
                </div>
                <div className="barMenu">
                  <div className="styledLink" onClick={() => this.handleMenuClick('/')}>Who we are</div>
                    <div className='subBarMenu'>
                      <div className="styledLink sub" onClick={() => this.handleMenuClick('/surromindnews/list/1')}>회사 소개</div>
                    </div> 
                </div>
                <div className="barMenu">
                  <div className="styledLink" onClick={() => this.handleMenuClick('/rnd/list/1')}>R&D</div> 
                    <div className='subBarMenu'>
                      {rndLists}
                    </div> 
                </div>
                <div className="barMenu">
                  <div className="styledLink" onClick={() => this.handleMenuClick('/careers/list/1')}>Careers</div> 
                  <div className='subBarMenu'>
                    <div className="styledLink sub" onClick={() => this.handleMenuClick('/careers/list/1')}>구인</div>
                  </div> 
                </div>
                <div className="barMenu">
                  <div className="styledLink contact" onClick={() => this.handleMenuClick('/contact')}>Contact</div> 
                  <div className='subBarMenu'>
                    <div className="styledLink sub" onClick={() => this.handleMenuClick('/contact')}>문의사항</div>
                  </div> 
                </div>
                </div>
            </div>

            <div className='upperInnerAreaMobile'>
              <div className="leftItem">
                <div className="styledLink">
                  <img className='ImgLogo' src={surroLogo} alt='SurroMind Logo'/>
                </div>
              </div>
              <div className="rightItem">
                <div className="barMenu">
                  <div className="styledLink" onClick={() => this.handleMenuClick('/surromindnews/list/1')}>SURROMIND</div>
                  <div className='subBarMenu'>
                    <div className="styledLink sub" onClick={() => this.handleMenuClick('/surromindnews/list/1')}>당사 소식</div>
                  </div>
                </div>
                <div className="barMenu">
                  <div className="styledLink" onClick={() => this.handleMenuClick('/')}>Who we are</div>
                    <div className='subBarMenu'>
                      <div className="styledLink sub" onClick={() => this.handleMenuClick('/surromindnews/list/1')}>회사 소개</div>
                    </div> 
                </div>
                <div className="barMenu">
                  <div className="styledLink" onClick={() => this.handleMenuClick('/rnd/list/1')}>R&D</div> 
                    <div className='subBarMenu'>
                      {rndLists}
                    </div> 
                </div>
                <div className="barMenu">
                  <div className="styledLink" onClick={() => this.handleMenuClick('/careers/list/1')}>Careers</div> 
                  <div className='subBarMenu'>
                    <div className="styledLink sub" onClick={() => this.handleMenuClick('/careers/list/1')}>구인</div>
                  </div> 
                </div>
                <div className="barMenu">
                  <div className="styledLink contact" onClick={() => this.handleMenuClick('/contact')}>Contact</div> 
                  <div className='subBarMenu'>
                    <div className="styledLink sub" onClick={() => this.handleMenuClick('/contact')}>문의사항</div>
                  </div> 
                </div>
                </div>
            </div>
          </div>
        </div>
        <div className='contentsLowerWrapper'>
          <div className='lowerArea'>
            <div className="lowerTitle">써로마인드</div>
            <div className='lowerInfo'>
            서울특별시 관악구 남부순환로 1802 관악캠퍼스타워 2층
            <span>Tel +82-2-872-5127</span>
            E-mail contact@surromind.ai
            </div>
            <div className='lowerInfoMobile'>
              <div>서울특별시 관악구 남부순환로 1802 관악캠퍼스타워 2층</div>
              <div>Tel +82-2-872-5127</div>
              <div>E-mail contact@surromind.ai</div>
            </div>
            <div className='lowerRight'>Copyright© 2020 SurroMind. All rights reserved.</div>
          </div>

        </div>
      </FooterInnerWrapper>
    );
  }
}

export default withRouter(Footer);

const FooterInnerWrapper = styled.div`
  width: ${constants.LIMIT_WIDTH}px;
  width: 100%;
  margin: 0 auto;
  background-color: #f1f1f1;

  .contentsWrapper {
    width: ${constants.LIMIT_WIDTH - 2}px;
    margin: 0 auto;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 95%;
      margin: 0 auto;
    }
  }

  .upperArea {
    width: 100%;
    height: ${constants.FOOTER_UPPER_HEIGHT}px;
    border: 1px solid #f1f1f1;
    background-color: #f1f1f1;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      height: 306px;
    }

    .upperInnerArea {
      width: ${constants.FOOTER_INNER_WIDTH}px;
      margin-top: 56px;
      margin-left: ${constants.FOOTER_INNER_LEFT_MARGIN}px;
      display: flex;
      justify-content: space-between;

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        display: none;
      }    
      
      .leftItem {
        width: 256px;
        height: 28px;
    
        .ImgLogo {
          width: 256px;
          height: 28px;
        }
      }
  
      .styledLink {
        color: black;
        cursor: pointer;

        &.logo {
          cursor: default;
        }
      }
  
      .rightItem {
        width: 885px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
  
        .barMenu {
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: -0.4px;
          color: #1e1f22;
          position: relative;
        }
  
        .subBarMenu {
          width: 100px;
          position: absolute;
          top: 300%;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
  
          @media (max-width: ${constants.MOBILE_WIDTH}px) {
            width: 100%;
          }
        }
    
        .styledLink {
          font-family: ${constants.INTER_FONT};
          text-decoration: none;
  
          &.sub {
            font-family: ${constants.APPLE_FONT};
            text-decoration: none;
            margin-bottom: 16px;
          }
    
          &:hover {
            color: ${constants.POINT_COLOR};
          }
        }
      }
    }

    .upperInnerAreaMobile {
      width: 100%;
      margin: 0 auto;
      height: 306px;
      display: none;
      margin-left: 0px;

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        display: block;
      }
      @media (min-width: ${constants.MOBILE_WIDTH}px) {
        display: none;
      }      
      
      .leftItem {
        width: 123px;
        height: 14px;
        margin-top: 22px;

        .ImgLogo {        
          width: 123px;
          height: 14px;
        }
      }
  
      .styledLink {
        color: black;
        cursor: pointer;
      }
  
      .rightItem {
        width: 100%;
        display: flex;
        flex-flow: wrap;
        justify-content: space-between;
        align-content: center;
        margin-top: 18px;
  
        .barMenu {
          width: 95px;
          font-size: 13px;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: -0.37px;
          color: #1e1f22;
        }
  
        .subBarMenu {
          font-size: 13px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: -0.37px;
          text-align: left;
          color: #1e1f22;
        }
    
        .styledLink {
          font-family: ${constants.INTER_FONT};
          text-decoration: none;
          margin-bottom: 8px;
  
          &.sub {
            font-family: ${constants.APPLE_FONT};
            text-decoration: none;
            margin-bottom: 8px;
          }
    
          &:hover {
            color: ${constants.POINT_COLOR};
          }
        }
      }
    }
  }

  .contentsLowerWrapper {
    width: 100%;
    margin: 0 auto;
    background-color: #1e1f22;
  }

  .lowerArea {
    margin: 0 auto;
    width: ${constants.LIMIT_WIDTH - 2}px;
    height: ${constants.FOOTER_LOWER_HEIGHT}px;
    background-color: #1e1f22;
    border: 1px solid #1e1f22;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 95%;
      height: 126px;
      margin: 0 auto;
    }

    .lowerTitle {
      margin: 0 auto;
      margin-top: 24px;
      font-family: ${constants.APPLE_FONT};
      font-size: 20px;
      font-weight: 200;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: -0.57px;
      text-align: center;
      color: #ffffff;

      @media (max-width: ${constants.MOBILE_WIDTH}px) {      
        font-size: 13px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.37px;
        text-align: center;
        color: #fff;
      }
    }

    .lowerInfo {
      margin: 0 auto;
      margin-top: 10px; 
      font-family: ${constants.APPLE_FONT};
      font-size: 14px;
      font-stretch: normal;
      font-weight: 400;
      line-height: 1.43;
      letter-spacing: -0.4px;
      text-align: center;
      color: #ffffff;

      span {
        padding-left: 16px;
        padding-right: 16px;
      }

      @media (max-width: ${constants.MOBILE_WIDTH}px) {      
        display: none;
      }   
    }

    .lowerInfoMobile {
      display: none;

      @media (max-width: ${constants.MOBILE_WIDTH}px) {      
        display: block;
      }     
      @media (min-width: ${constants.MOBILE_WIDTH}px) {      
        display: none;
      }
      margin-top: 6px;    
      margin-bottom: 16px;         
      font-size: 11px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.09;
      letter-spacing: -0.31px;
      text-align: center;
      color: #fff;
      div {
        margin-bottom: 4px;
      }
    }

    .lowerRight {
      margin: 0 auto;
      margin-top: 4px; 
      font-family: ${constants.APPLE_FONT};
      font-size: 14px;
      font-weight: 100;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: -0.4px;
      text-align: center;
      color: #ffffff;

      @media (max-width: ${constants.MOBILE_WIDTH}px) {         
        font-size: 10px;
        font-weight: 200;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.29px;
        text-align: center;
        color: #fff;
      }
    }
  }
    
`;


