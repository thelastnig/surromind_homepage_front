import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link, withRouter } from 'react-router-dom';

// import constants from constants.js
import * as constants from '../../../lib/constants'

// import image
import smartTechKorea2022 from '../../../images/smartTechKorea2022_desktop.png';
import smartTechKorea2022Mobile from '../../../images/mobile/smartTechKorea2022_mobile.jpg';
import smartTechKorea2022_AIStudio from '../../../images/smartTechKorea2022_AIStudio.png';
import smartTechKorea2022_VisionInspection from '../../../images/smartTechKorea2022_VisionInspection.png';
import smartTechKorea2022_PHM from '../../../images/smartTechKorea2022_PHM.png';

// PDF Viewer
import smartTechKorea_AIS from '../../../images/smartTechKorea_AIS.pdf';
import smartTechKorea_vision from '../../../images/smartTechKorea_vision.pdf';
import smartTechKorea_phm from '../../../images/smartTechKorea_phm.pdf';


class SmartTechKorea2022 extends Component {
  
  handleClick = (url) => {
    this.props.history.push(url);
  }    
  
  
  handleClickGoogle = () => {
    window.open('https://forms.gle/H46cY1rPmMNVCcKZ6', '_blank');
  }    

  render() {
  
    return (
      <Wrapper>
        <div className='contentsWrapper'>
          <div className='backgroundImageWrapper'>
            <img src={smartTechKorea2022} alt="smartTechKorea2022" width="1200px" className="voucherContents"/>
            <div className='pointBox'></div>
          </div>
          <div className='middleWrapper'>
            <div className='middleItem'>
              <div className='middleLeft'>
                <img src={smartTechKorea2022_AIStudio} width="250px" alt="smartTechKorea2022_AIStudio" className="voucherContents"/>
              </div>
              <div className='middleRight'>
                <div className='middleTitle'>SURROMIND&nbsp;&nbsp;&nbsp;&nbsp;AI Studio
                  <div className='supTM'>TM</div>
                </div>
                <div className='middleSubTitle'>손쉬운 인공지능 개발/운영 플랫폼</div>
                <div className='middleDesc'>인공지능 개발 전문가가 없어도, 고객 데이터로<br/>최적의 모델을 만들어 사업에 적용할 수 있습니다.</div>
                <a href={smartTechKorea_AIS} className='pdfLink'>
                <div className='middleButton'>SURROMIND&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AI Studio 바로가기 &gt;
                  <div className='supTM'>TM</div>
                </div>
                </a>
              </div>
            </div>

            <div className='middleItem middle'>
              <div className='middleLeft'>
                <img src={smartTechKorea2022_VisionInspection} width="250px" alt="smartTechKorea2022_VisionInspection" className="voucherContents"/>
              </div>
              <div className='middleRight'>
                <div className='middleTitle'>SURROVISION&nbsp;&nbsp;&nbsp;&nbsp;Inspection
                  <div className='supTM vision'>TM</div>
                </div>
                <div className='middleSubTitle'>인공지능 머신 비전 솔루션</div>
                <div className='middleDesc'>기존 Rule 기반 방식의 한계를 극복한 딥러닝 인공지능 검사<br/>방식으로, 제조 환경에 최적화된 솔루션을 제공합니다.</div>
                <a href={smartTechKorea_vision} className='pdfLink'>
                <div className='middleButton'>SURROVISION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Inspection 바로가기 &gt;
                  <div className='supTM vision'>TM</div>
                </div>
                </a>
              </div>
            </div>

            <div className='middleItem'>
              <div className='middleLeft'>
                <img src={smartTechKorea2022_PHM} width="250px" alt="smartTechKorea2022_PHM" className="voucherContents"/>
              </div>
              <div className='middleRight'>
                <div className='middleTitle'>SURROMIND&nbsp;&nbsp;&nbsp;&nbsp;PHM
                  <div className='supTM'>TM</div>
                </div>
                <div className='middleSubTitle'>인공지능 예지보전 솔루션</div>
                <div className='middleDesc'>음향, 진동, 전류 및 온도, 각종 센서 데이터로 설비의<br/>고장과 장애 여부를 진단하고 보수 시기를 사전에 예측할 수 있습니다.</div>
                <a href={smartTechKorea_phm} className='pdfLink'>
                <div className='middleButton'>SURROMIND&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PHM 바로가기 &gt;
                  <div className='supTM'>TM</div>
                </div>
                </a>
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
            <img src={smartTechKorea2022Mobile} alt="smartTechKorea2022Mobile" className="voucherContents"/>
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

export default withRouter(SmartTechKorea2022);

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

    &.middle {
      border-top: 1px solid #000421;
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
    background: #000421;
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

  .bottomWrapperMobile {
    width: 100%;
    height: 180px;
    background: #000421;
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

