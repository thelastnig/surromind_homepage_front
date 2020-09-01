import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// import constants from config.js
import * as constants from '../../lib/constants';

import companyImg from '../../images/company.png';
import companyImgMobile from '../../images/mobile/companyMobile.jpg';

class MainCompany extends Component {
  render() {
  
    return (
      <Wrapper>
        <div className='titleTextMobile'>Who We Are?</div>
        <div className='contentsWrapper' ref={(ref) => {this.mainCompanySection=ref}}>
          <img src={companyImg} alt={companyImg} className='imgCompany'/>
          <div className='textWrapper'>
            <div className='leftArea'></div>
            <div className='rightArea'>
              <div className='titleText'>Who We Are?</div>
              <div className='mainText'>
                더  많은 기업과 사람들이 문제를 해결하는데<br/>
                사용할 수 있도록 쉽고 실용적인 <span>AI 솔루션</span>을 개발합니다.
              </div>
              <div className='subText'>
                Surromind는 고객의 요구에 따라 딥 러닝을 통해 실용적인 AI 솔루션을<br/> 
                개발하고 있습니다. 또한 사람들이 쉽게 사용할 수 있도록<br/> 
                자동화된 AI 플랫폼을 개발합니다.
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default MainCompany;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  .contentsWrapper {
    max-width: ${constants.TOTAL_WIDTH}px;
    margin: 0 auto;
    position: relative;
  }

  .titleTextMobile {
    display: none; 

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      display: block;
      font-size: ${constants.RESPONSIVE_MAIN_TITLE_SIZE_MOBILE_LARGE}px;
      font-weight: 600;
      text-align: center;
      margin-bottom: 50px;
    }
  }

  .imgCompany {
    max-width: ${constants.TOTAL_WIDTH}px;

    @media (max-width: ${constants.TOTAL_WIDTH}px) {
      width: 100%;
      height: 100%;
    }

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 100%;
      height: 100%;
      content: url(${companyImgMobile});
    }
  }

  .textWrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      flex-direction: column;
    }
  }

  .leftArea {
    width: 55%;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 100%;
      height: 50%;
    }
  }

  .rightArea {
    width: 45%;
    color: #003d4c;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 100%;
      height: 50%;
    }

    .titleText {
      font-size: ${constants.MAIN_TITLE_SIZE}px;
      font-weight: 600;
  
      @media (max-width: ${constants.TOTAL_WIDTH}px) {
        font-size: ${constants.RESPONSIVE_MAIN_TITLE_SIZE};
      }

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        display: none;
      }
    }

    .mainText {
      font-size: 22px;
      font-family: ${constants.KOR_FONT};
      line-height: 1.5em;
      font-weight: 600;
      margin-top: 50px;
      margin-bottom: 45px;
  
      @media (max-width: ${constants.TOTAL_WIDTH}px) {
        font-size: ${constants.RESPONSIVE_MAIN_SUB_TITLE_SIZE};
      }

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        font-size: 4vw;
        margin-left: 10px;
        margin-top: 1.5vw;
        margin-bottom: 3.0vw;
      }
  
      span {
        font-family: ${constants.KOR_FONT};
        color: ${constants.POINT_COLOR};
      }
    }

    .subText {
      font-family: ${constants.KOR_FONT};
      font-weight: 600;
      line-height: 1.5em;
      font-size: 18px;
  
      @media (max-width: ${constants.TOTAL_WIDTH}px) {
        font-size: ${constants.RESPONSIVE_MAIN_SUB_TITLE_SIZE};
      }

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        font-size: 3.0vw;
        margin-left: 10px;
      }
    }
  }


`;

