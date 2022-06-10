import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link, withRouter } from 'react-router-dom';

// import constants from constants.js
import * as constants from '../../../lib/constants'

// import image
import nextRise2022 from '../../../images/nextRise2022_desktop.jpg';
import nextRise2022_AIStudio from '../../../images/nextRise2022_aistudio.jpg';
import nextRise20222Mobile from '../../../images/mobile/nextRise2022_mobile.jpg';
import smartTechKorea2022_AIStudio from '../../../images/smartTechKorea2022_AIStudio.png';

// PDF Viewer
import nextRise2020Pamphlet from '../../../images/nextRise2020Pamphlet.pdf';


class NextRise2022 extends Component {
  
  handleClick = (url) => {
    this.props.history.push(url);
  }    
  
  
  handleClickGoogle = () => {
    window.open('https://forms.gle/UGvA1fLWbMLU7gY66', '_blank');
  }    

  render() {
  
    return (
      <Wrapper>
        <div className='contentsWrapper'>
          <div className='backgroundImageWrapper'>
            <img src={nextRise2022} alt="nextRise2022" width="1200px" className="voucherContents"/>
            <div className='pointBox'></div>
          </div>
          <div className='middleWrapper'>
            <div className='middleItem first'>
              <div className='middleLeft'>
                <img src={smartTechKorea2022_AIStudio} width="250px" alt="smartTechKorea2022_AIStudio" className="voucherContents"/>
              </div>
              <div className='middleRight'>
                <div className='middleTitle'>SURROMIND&nbsp;&nbsp;&nbsp;&nbsp;AI Studio
                  <div className='supTM'>TM</div>
                </div>
                <div className='middleSubTitle'>손쉬운 인공지능 개발/운영 플랫폼</div>
                <div className='middleDesc'>인공지능 개발 전문가가 없어도, 고객 데이터로<br/>최적의 모델을 만들어 사업에 적용할 수 있습니다.</div>
                <a href={nextRise2020Pamphlet} className='pdfLink'>
                <div className='middleButton'>SURROMIND&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AI Studio 바로가기 &gt;
                  <div className='supTM'>TM</div>
                </div>
                </a>
              </div>
            </div>

            <div className='middleItem'>
              <div className='middle'>
                <img src={nextRise2022_AIStudio} width="840" alt="nextRise2022_AIStudio" className="voucherContents"/>
              </div>
            </div>


          </div>
          <div className='bottomWrapper'>
            <div className='bottomTitle'>고객님의 소중한 데이터, 써로마인드의 AI 솔루션으로 최대한 활용하세요.</div>
            <div className='bottomSub'>전시회 방문 일정을 사전 신청하시면 기다리시지 않고 제품과 기술 상담을 하실 수 있습니다.</div>
            <div className='bottomButton' onClick={this.handleClickGoogle}>상담 요청하기</div>
          </div>
        </div>
        <div className='contentsWrapperMobile'>
          <div className='backgroundImageWrapperMobile'>
            <img src={nextRise20222Mobile} alt="nextRise20222Mobile" className="voucherContents"/>
          </div>
          <div className='pamphletButtonArea'>
            <a href={nextRise2020Pamphlet} className='pdfLink'>
            <div className='pamphletButton'>제품 소개서 보기</div>
            </a>
          </div>
          <div className='bottomWrapperMobile'>
            <div className='bottomTitle'>고객님의 소중한 데이터,<br/> 써로마인드의 AI 솔루션으로 최대한 활용하세요.</div>
            <div className='bottomSub'>전시회 방문 일정을 사전 신청하시면 기다리시지 않고 제품과 기술 상담을 하실 수 있습니다.</div>
            <div className='bottomButton' onClick={this.handleClickGoogle}>상담 요청하기</div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default withRouter(NextRise2022);

const Wrapper = styled.div`
  width: ${constants.LIMIT_WIDTH}px;
  height: 100%;
  margin: 0 auto;

  @media (max-width: ${constants.MOBILE_WIDTH}px) {
    width: 100%;
  }

  .pdfLink {
    text-decoration: none;
  }
  
  .contentsWrapper {
    display: block;
    width: ${constants.TOTAL_WIDTH}px;
    margin: 0 auto;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      display: none;
    }
  }

  .backgroundImageWrapper {
    position: relative;

    .pointBox {
      width: 12px;
      height: 50px;
      background: #FC5000;
      position: absolute;
      border-radius: 10px;
      left: 50%;
      bottom: -20px;
      transform: translate(-50%, 0);
    }

  }

  .middleWrapper {
    width: ${constants.TOTAL_WIDTH}px;
  }

  .middleItem {
    padding: 40px 0;
    width: 770px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    
    &.first {
      padding: 80px 0;
      border-bottom: 1px solid #000421;
    }
  }

  .middleLeft {
    width: 250px;
    margin-right: 70px;
  }

  .middleRight {
    width: 400px;
  }

  .middleTitle {
    position: relative;
    display:inline-block;
    height: 40px;
    line-height: 40px;
    font-size: 22px; 
    font-weight: 800; 
    color: #FC5000;
    border: 1px solid #FC5000;
    padding-top: 5px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 22.5px;
    text-align: center;

    .supTM {
      font-size: 9px; 
      position: absolute;
      top: 0px;
      left: 145px;

      &.vision {
        left: 160px;
      }
    }
  }

  .middleSubTitle {
    margin-top: 20px;
    margin-left: 20px;
    margin-bottom: 10px;
    font-size: 22px; 
    font-weight: 700; 
    color: #000421;
  }

  .middleDesc {
    margin-left: 20px;
    margin-bottom: 10px;
    font-weight: 600; 
    font-size: 14px; 
    color: #000421;
  }

  .middleButton {
    position: relative;
    display:inline-block;
    height: 25px;
    line-height: 25px;
    margin-left: 20px;
    border-radius: 3px;
    border: 1px #3E3A39 solid;
    color: #3E3A39;
    font-weight: 700; 
    font-size: 12px;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;

    .supTM {
      font-size: 2px; 
      position: absolute;
      top: -1px;
      left: 78px;

      &.vision {
        left: 86px;
      }

    }
  }

  .bottomWrapper {
    width: ${constants.TOTAL_WIDTH}px;
    height: 280px;
    background: #5F17BB;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .bottomTitle {
      font-size: 24px; 
    }
  
    .bottomSub {
      font-size: 14px; 
      margin-top: 25px;
      margin-bottom: 25px;
    }
  
    .bottomButton {
      width: 120px;
      border-radius: 5px;
      height: 40px;    
      line-height: 40px;    
      text-align: center;
      background: #FC5000;
      cursor: pointer;
      font-size: 14px; 
    }
  }

  .contentsWrapperMobile {
    display: none;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
    }
    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      display: block;
    }
  }

  .pamphletButtonArea {
    width: 100%;
    height: 70px;
    .pamphletButton {
      width: 40%;
      height: 35px;
      line-height: 35px;
      text-align: center;
      margin: 0 auto;
      background: #FC5000;
      color: white;
      font-size: 0.8em;
      border-radius: 17.5px;
      cursor: pointer;
    }
  }

  .bottomWrapperMobile {
    width: 100%;
    height: 180px;
    background: #5F17BB;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .bottomTitle {
      font-size: 1em;
      text-align: center;
    }
  
    .bottomSub {
      font-size: 0.5em;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  
    .bottomButton {
      display: inline-block;
      padding-left: 15px;
      padding-right: 15px;
      padding-top: 7px;
      padding-bottom: 7px;
      border-radius: 5px;   
      text-align: center;
      background: #FC5000;
      cursor: pointer;
      font-size: 0.5em;
    }
  }
`;

