import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// import constants from config.js
import * as constants from '../../lib/constants';

import companyImg from '../../images/company.jpg';
import companyImgMobile from '../../images/mobile/companyMobile.jpg';
import iconCompany from '../../images/icon-company.png';
import iconProduct from '../../images/icon-product.png';

// PDF Viewer
import companyPamphlet from '../../images/companyPamphlet.pdf';
import productPamphlet from '../../images/productPamphlet.pdf';
// import { Document, Page, pdfjs } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
        <div className='titleTextMobile'>Who We Are?</div>
        <div className='contentsWrapper' ref={(ref) => {this.mainCompanySection=ref}}>
          <img src={companyImg} alt={companyImg} className='imgCompany'/>
          <div className='textWrapper'>
            <div className='titleText'>Who We Are?</div>
            <div className='mainText'>
            다양한 산업군에서 문제를 해결하고, 사용할 수 있는<br/>
            AI 솔루션을 만나보세요.
            </div>
            <div className='subText'>
              Surromind는 딥러닝을 통해 문제를 해결 할 수 있도록<br/>
              실용적인 AI 솔루션을 개발하고 있습니다. 또한 사용자들이<br/> 
              쉽게 사용할 수 있도록 개발없이 AI 알고리즘을 적용할 수 있는<br/> 
              자동화된 AI 플랫폼을 제공하고 있습니다.<br/>
            </div>
          </div>
          <div className='pdfFileArea'>
            <div className='pdfItem'>
              <div className="pdfFileArrow">
              <img src={iconCompany} alt={iconCompany} className='iconPdf' width='42px'/>
              </div>
              <div className="pdfFileLink">
                <a href={companyPamphlet} className='pdfLink'>회사 소개서</a>
              </div>
            </div>
            <div className='pdfItem'>
              <div className="pdfFileArrow">
              <img src={iconProduct} alt={iconProduct} className='iconPdf' width='42px'/>
              </div>
              <div className="pdfFileLink">
                <a href={productPamphlet} className='pdfLink'>제품 소개서</a>
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
    max-width: ${constants.LIMIT_WIDTH}px;
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
    max-width: ${constants.LIMIT_WIDTH}px;

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
    position: absolute;
    top: 188px;
    left: 200px;

    @media (max-width: ${constants.TOTAL_WIDTH}px) {
      top: 0px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .titleText {
    font-size: 90px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1.93px;
    color: #ffffff;
    font-family: ${constants.NOTO_FONT};

    @media (max-width: ${constants.TOTAL_WIDTH}px) {
      font-size: ${constants.RESPONSIVE_MAIN_TITLE_SIZE};
    }

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      display: none;
    }
  }

  .mainText {
    font-family: ${constants.NOTO_FONT};
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: -0.6px;
    color: #ffffff;
    margin-top: 98px;

    @media (max-width: ${constants.TOTAL_WIDTH}px) {
      font-size: ${constants.RESPONSIVE_MAIN_SUB_TITLE_SIZE};
    }

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      font-size: 3.5vw;
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
    font-family: ${constants.NOTO_FONT};
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: -0.6px;
    color: #ffffff;
    margin-top: 40px;

    @media (max-width: ${constants.TOTAL_WIDTH}px) {
      font-size: ${constants.RESPONSIVE_MAIN_SUB_TITLE_SIZE};
    }

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      font-size: 2.5vw;
      margin-left: 10px;
    }
  }

  .pdfFileArea {
    position: absolute;
    top: 668px;
    right: 200px;
    display: flex;
    item-aligns: center;
    justify-content: center;

    @media (max-width: ${constants.TOTAL_WIDTH}px) {
      width: 100%;
      top: 80%;
      left: 50%;
      transform: translateX(-50%);
    }

    .pdfItem {
      display: flex;
      item-aligns: center;
      justify-content: center;
      margin-left: 36px;
      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        margin-left: 10px;
      }
    }

    .iconPdf {
      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        width: 25px;
      }
    }

    .pdfFileLink {
      margin-left: 10px;
      .pdfLink {
        font-family: ${constants.NOTO_FONT};
        font-size: 26px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.56px;
        color: #ffffff;
        text-decoration:none;
  
        @media (max-width: ${constants.TOTAL_WIDTH}px) {
          font-size: ${constants.RESPONSIVE_MAIN_SUB_TITLE_SIZE};
          margin-left: 0;
        }
  
        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          font-size: 2.5vw;
        }
      }
    }
  }
`;

