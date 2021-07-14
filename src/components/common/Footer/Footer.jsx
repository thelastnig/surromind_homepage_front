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
      <Wrapper>
        <div className='contentsWrapper'>
          <div className='upperArea'>
            <div className='upperInnerArea'>
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
            서울특별시 관악구 관악로 116 학선빌딩 2층
            <span>Tel +82-2-872-5127</span>
            E-mail contact@surromind.ai
            </div>
            <div className='lowerRight'>Copyright© 2020 SurroMind. All rights reserved.</div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default withRouter(Footer);

const Wrapper = styled.div`
  width: 100%;
  height: ${constants.FOOTER_HEIGHT}px;
  margin: 0 auto;
  background-color: #f1f1f1;

  .contentsWrapper {
    width: ${constants.LIMIT_WIDTH}px;
    margin: 0 auto;
  }

  .upperArea {
    width: 100%;
    height: ${constants.FOOTER_HEIGHT - constants.FOOTER_LOWER_HEIGHT}px;
    border: 1px solid #f1f1f1;

    .upperInnerArea {
      width: ${constants.FOOTER_INNER_WIDTH}px;
      margin-top: 56px;
      margin-left: ${constants.FOOTER_INNER_LEFT_MARGIN}px;
      display: flex;
      justify-content: space-between;
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

  .contentsLowerWrapper {
    width: 100%;
    margin: 0 auto;
    background-color: #1e1f22;
    border: 1px solid #1e1f22;
  }

  .lowerArea {
    margin: 0 auto;
    width: ${constants.LIMIT_WIDTH}px;
    height: ${constants.FOOTER_LOWER_HEIGHT}px;

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
    }
  }
    
`;



