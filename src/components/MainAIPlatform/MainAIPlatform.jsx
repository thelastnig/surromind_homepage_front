import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// import constants from config.js
import * as constants from '../../lib/constants';

// import images from config.js
import imgAiplatform from '../../images/img-surromind-aiplatform.png';
import imgAiplatformGroup from '../../images/img-aiplatform_group.png';
import imgAutolabeling from '../../images/img-autolabeling.png';

import imgBg06 from '../../images/backgound-icon/img-bg-graphic-06.png';
import imgBg07 from '../../images/backgound-icon/img-bg-graphic-07.png';
import imgBg14 from '../../images/backgound-icon/img-bg-graphic-14.png';


class MainAIPlatform extends Component {
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
        <div className='contentsWrapper'>
          <div className="backgroundIcon imgBg06"><img src={imgBg06} alt="imgBg06" /></div>
          <div className="backgroundIcon imgBg07"><img src={imgBg07} alt="imgBg07" /></div>
          <div className="backgroundIcon imgBg14"><img src={imgBg14} alt="imgBg14" /></div>
          <div className="backgroundIcon rec"/>
          <div className='titleText'>SURROMIND AI Platform</div>
          <div className='mainText'>
            코딩없는 개발환경을 제공하는 All-in-One AI Platform으로 인공지능 개발과<br/>
            사업모델에 적용할 수 있습니다. 
          </div>
          <div className='subText'>코딩없는 개발환경 제공</div>
          <div className='imgWrapper'>
            <img src={imgAiplatform} alt='imgAiplatform'/>
          </div>

          <div className='detailWrapper upper'>
            <div className='detailTextWrapper upper'>
              <div className='detailTextTitle upper'>
              Tabular 데이터 및 이미지<br/>
              데이터 분석 Tool 제공 
              </div>
              <div className='detailTextSub upper'>
              경량데이터의 학습에 인공지능 모델을 적용하여<br/>
              데이터 처리, 학습, 모델링, 배포까지의 전 과정을<br/>
              단 몇번의 클릭으로 해결할 수 있습니다.
              </div>
            </div>
            <div className='detailImageWrapper upper'>
              <img src={imgAiplatformGroup} alt='imgAiplatformGroup'/>
            </div>
          </div>

          <div className='detailWrapper lower'>
            <div className='detailImageWrapper lower'>
              <img src={imgAutolabeling} alt='imgAutolabeling'/>
            </div>
            <div className='detailTextWrapper lower'>
              <div className='detailTextTitle lower'>
              Auto Labeling 기능을<br/>
              AI Platform에 탑재하여,<br/>
              데이터 구축의 생산성을 극대화
              </div>
              <div className='detailTextTitle sub'>
              Active learning 기반의 자동 라벨링 기능
              </div>
              <div className='detailTextSub lower'>
              라벨링은 사진을 인식하는 인공지능을 학습시키기 위해<br/>
              정답지를 만드는 과정으로 인공지능이 인식하는 문제의<br/>
              종류에 따라 각 사진별로 적절한 정답(라벨)을 부여하는<br/> 
              필수적인 과정입니다. 
              </div>
              <div className='detailTextOption first'>
                <div className='detailTextOptionLeft'>&#183;</div>
                <div className='detailTextOptionRight'>
                라벨링 작업은 정확한 정답지를 만드는 과정이기 때문에 사람의<br/>
                작업이 필수적
                </div>
              </div>
              <div className='detailTextOption'>
                <div className='detailTextOptionLeft'>&#183;</div>
                <div className='detailTextOptionRight'>
                수많은 사진에 대한 라벨링 작업시에 인공지능을 통해 빠르고<br/> 
                정확한 라벨링 작업 수행
                </div>
              </div>
              <div className='detailTextOption'>
                <div className='detailTextOptionLeft'>&#183;</div>
                <div className='detailTextOptionRight'>
                오토라벨링 : 문제에 대해 어느 정도 학습을 수행한 인공지능을<br/>  
                적용하여 자동으로 라벨링을 수행하는 과정
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default MainAIPlatform;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;

  .contentsWrapper {
    width: ${constants.LIMIT_WIDTH}px;
    height: ${constants.MAIN_AIPLATFORM_HEIGHT}px; 
    margin: 0 auto;
    
    border: 1px solid white;
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

  .subText {
    height: 33px;
    margin: 0 auto;
    margin-top: 48px;
    text-align: center;
    font-family: ${constants.APPLE_FONT};  
    font-size: 32px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.03;
    letter-spacing: -0.98px;
    color: #fe5f01;
  }

  .imgWrapper {
    width: 1200px;
    height: 472px;
    margin: 0 auto;
    margin-top: 9px;
    border-bottom: 1px solid #e1e2e3;
    text-align: center;
  }

  .detailWrapper {
    width: ${constants.TOTAL_WIDTH}px;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    &.upper {
      margin-top: 110px;
    }

    &.lower {
      margin-top: 136px;
    }
  }

  .detailTextWrapper {
    &.upper {

    }

    &.lower {

    }
  }

  .detailTextTitle {
    font-family: ${constants.APPLE_FONT};
    font-size: 32px;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: -1px;
    color: #000000;

    &.sub { 
      margin-top: 16px;
      font-family: ${constants.APPLE_FONT};
      font-size: 24px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.67;
      letter-spacing: -1.2px;
      color: #000000;

    }

    &.upper {
    }

    &.lower {
    }
  }

  .detailTextSub {
    font-family: ${constants.APPLE_FONT};
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: -0.72px;
    color: #3c3f4b;

    &.upper {  
      height: 84px;
      margin-top: 16px;
    }

    &.lower {
      height: 112px;
      margin-top: 4px;
    }
  }

  .detailTextOption {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 10px;
    &.first {
      margin-top: 16px;
    }
  }

  .detailTextOptionLeft {
    width: 14px;
    
    font-family: ${constants.APPLE_FONT};
    font-size: 15px;
    font-weight: 800;
    text-align: center;
    line-height: 1.6;
    color: #3c3f4b;
  }

  .detailTextOptionRight {
    font-family: ${constants.APPLE_FONT};
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: -0.56px;
    color: #3c3f4b;
  }

  .backgroundIcon {
    position: absolute;

    &.imgBg06 {
      top: 0px;
      left: 67px;
    }

    &.imgBg07 {
      top: 75px;
      left: 0px;
    }

    &.imgBg14 {
      top: 21px;
      right: 60px;
    }

    &.rec {
      top: 250px;
      left: 810px;
      width: 300px;
      height: 16px;
      background-color: #fe5f01;  
      opacity: 0.12;
    }
  }
`;

