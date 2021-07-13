import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// import constants from config.js
import * as constants from '../../lib/constants';

// import images from config.js
import imgAiacademy from '../../images/img-aiacademy.png';
import imgAiplatform from '../../images/img-aiplatform.png';
import imgVisionaisolution from '../../images/img-visionaisolution.png';

import imgBg03 from '../../images/backgound-icon/img-bg-graphic-03.png';
import imgBg04 from '../../images/backgound-icon/img-bg-graphic-04.png';
import imgBg05 from '../../images/backgound-icon/img-bg-graphic-05.png';
import imgBg10 from '../../images/backgound-icon/img-bg-graphic-10.png';
import imgBg11 from '../../images/backgound-icon/img-bg-graphic-11.png';
import imgBg13 from '../../images/backgound-icon/img-bg-graphic-13.png';

// PDF Viewer
import companyPamphlet from '../../images/companyPamphlet.pdf';
import productPamphlet from '../../images/productPamphlet.pdf';

// import icon from material-ui/icon
import ArrowForward from "@material-ui/icons/ArrowForward";

class MainCompany extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }
 
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
  
    return (
      <Wrapper>
        <div className='contentsWrapper' ref={(ref) => {this.mainCompanySection=ref}}>
          <div className="backgroundIcon imgBg03"><img src={imgBg03} alt="imgBg03" /></div>
          <div className="backgroundIcon imgBg04"><img src={imgBg04} alt="imgBg04" /></div>
          <div className="backgroundIcon imgBg05"><img src={imgBg05} alt="imgBg05" /></div>
          <div className="backgroundIcon imgBg05_right"><img src={imgBg05} alt="imgBg05" /></div>
          <div className="backgroundIcon imgBg10"><img src={imgBg10} alt="imgBg10" /></div>
          <div className="backgroundIcon imgBg11"><img src={imgBg11} alt="imgBg11" /></div>
          <div className="backgroundIcon imgBg13"><img src={imgBg13} alt="imgBg13" /></div>
          <div className='titleText'>Who We Are?</div>
          <div className='mainText'>
          국내 최고의 인공지능 핵심기술 보유 AI 전문기업 써로마인드 입니다.<br/>
          서울대 인공지능 박사들을 중심으로 인공지능에 대한 명확한 이해와 풍부한 연구 개발 역량을 보유하고 있습니다.
          </div>
          <div className='pdfFileArea'>
            <a href={productPamphlet} className='pdfLink'>
              <div className='pdfItem'>
                <div className="pdfFileArrow">
                </div>
                <div className="pdfFileLink">회사 소개서</div>
              </div>
            </a>
            <a href={productPamphlet} className='pdfLink'>
              <div className='pdfItem'>
              <div className="pdfFileArrow">
              </div>
              <div className="pdfFileLink">제품 소개서</div>
              </div>
            </a>
          </div>
          <div className="imgWrapper">
            <div className="imgItem"><img src={imgAiacademy} alt='imgAiacademy'/></div>
            <div className="imgItem"><img src={imgAiplatform} alt='imgAiplatform'/></div>
            <div className="imgItem"><img src={imgVisionaisolution} alt='imgVisionaisolution'/></div>
          </div>
          <div className="titleWrapper">
            <div className="titleItem">AI Platform</div>
            <div className="titleItem">Vision AI Solution</div>
            <div className="titleItem">AI Academy</div>
          </div>
          <div className="textWrapper">
            <div className="textItem">
              써로마인드의 <span>All-in-one 인공지능 플랫폼으로</span><br/>
              인공지능 모델을 개발할 수 있습니다.<br/>
              또한 <span>Auto Labeling 툴</span>을 사용하여 빠른<br/>
              학습데이터를 구축할 수 있습니다.<br/>
            </div>
            <div className="textItem">
              제조 분야에서의 <span>스마트펙토리로 전환을 위한 솔루션</span>을 제공하며,<br/>
              자동차 자율주행 분야의 다양한 인식 엔진을 제공합니다. 
            </div>
            <div className="textItem">
              기업의 AI Transformation을 위한<br/>
              <span>현장 적용 인공지능 실습 교육을 제공</span>합니다.
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
    width: ${constants.LIMIT_WIDTH}px;
    height: ${constants.MAIN_COMPANY_HEIGHT}px; 
    margin: 0 auto;
    background-color: white;
    position: relative;
  }

  .titleText {
    height: 65px;
    margin: 0 auto;
    margin-top: 56px;
    text-align: center;
    font-family: ${constants.INTER_FONT};  
    font-size: 54px;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -2.02px;
    color: #000000;
  }

  .mainText {
    height: 56px;
    margin: 0 auto;
    margin-top: 5px;
    text-align: center;    
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

  .pdfFileArea {
    margin: 0 auto;
    margin-top: 21px;
    width: 252px;
    height: 36px;
    display: flex;
    align-items: center;  
    justify-content: space-between;

    .pdfItem {
      display: flex;
      align-items: center;  
      justify-content: center;  
      width: 120px;
      height: 36px;
      border-radius: 4px;
      background-color: #5371e5;

      &:hover {
        background-color: #4863c9;
      }

      &:active {
        background-color: #3e56af;
      }
    }

    .pdfLink {
      text-decoration:none;
    }

    .pdfFileLink {
      font-family: ${constants.APPLE_FONT};
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.53px;
      text-align: center;
      color: #ffffff;
    }
  }

  .imgWrapper {
    width: ${constants.TOTAL_WIDTH - 36}px;
    margin: 0 auto;
    margin-top: 51px;
    display: flex;
    justify-content: space-between; 
    align-items: center;  
  }

  .titleWrapper {
    width: ${constants.TOTAL_WIDTH - 36}px;
    margin: 0 auto;
    margin-top: 19px;
    display: flex;
    justify-content: space-between; 
    align-items: center;  
  }

  .titleItem {
    width: 252px;
    font-family: ${constants.INTER_FONT};    
    font-size: 22px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.86;
    letter-spacing: -0.79px;
    text-align: center;
    color: #3c3f4b;
  }

  .textWrapper {
    width: ${constants.TOTAL_WIDTH}px;
    margin: 0 auto;
    margin-top: 12px;
    display: flex;
    justify-content: space-between; 
    align-items: flex-start;  
  }

  .textItem {
    font-family: ${constants.APPLE_FONT};  
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: -0.6px;
    text-align: center;
    color: #3c3f4b;
    
    span {
      font-family: ${constants.APPLE_FONT};  
      font-weight: bold;
    }
  }

  .backgroundIcon {
    position: absolute;

    &.imgBg03 {
      top: 56px;
      left: 237px;
    }

    &.imgBg04 {
      top: 179px;
      left: 102px;
    }

    &.imgBg05 {
      top: 394px;
      left: 186px;
    }

    &.imgBg05_right {
      top: 483px;
      right: 198px;
    }

    &.imgBg10 {
      top: 63px;
      right: 207px;
    }

    &.imgBg11 {
      top: 194px;
      right: 105px;
    }

    &.imgBg13 {
      top: 526px;
      right: 115px;
    }
  }
`;

