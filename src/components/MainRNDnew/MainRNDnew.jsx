import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

// import constants from config.js
import * as constants from '../../lib/constants';

// import images
import rndVQA from '../../images/new/rndVQA.png';
import rndHumanRobot from '../../images/new/rndHumanRobot.png';
import rndRobotAutoDriving from '../../images/new/rndRobotAutoDriving.png';
import rndVQAMobile from '../../images/new/rndVQAMobile.png';
import rndHumanRobotMobile from '../../images/new/rndHumanRobotMobile.png';
import rndRobotAutoDrivingMobile from '../../images/new/rndRobotAutoDrivingMobile.png';

// setting GA
import ReactGA from 'react-ga';

class MainRNDnew extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

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
        <div className="rndInnerWrapper">
          <div className="contentsWrapper">
            <div className="titleText">R&#38;D</div>
            <div className="itemWrapper">
              <div className='item vqa'>
                <div className='itemText'>영상/언어 복합지능</div>
                <div className='itemSubText'>손쉬운 인공지능 개발/운영 플랫폼</div>
              </div>
              <div className='item auto middle'>
                <div className='itemText'>로봇 실내 자율 주행</div>
                <div className='itemSubText'>로봇 상황 판단 및 실내 자율 주행 인공지능​</div>
              </div>
              <div className='item human'>
                <div className='itemText'>휴먼 로봇 인터랙션​</div>
                <div className='itemSubText'>인공지능으로 영상과 언어 종합 분석​</div>
              </div>
            </div>
          </div>
          <div className="contentsWrapperMobile">
            <div className="titleTextMobile">R&#38;D</div>
            <div className="itemWrapperMobile">
              <div className='itemMobile'>
                <div className='itemImage'>
                  <img src={rndVQAMobile} alt='rndVQAMobile'/>
                </div>
                <div className='itemTextWrapper'>
                  <div className='itemTextMobile'>영상/언어 복합지능</div>
                  <div className='itemSubTextMobile'>손쉬운 인공지능 개발/운영 플랫폼</div>
                </div>
              </div>
              <div className='itemMobile middle'>
                <div className='itemImage'>
                  <img src={rndRobotAutoDrivingMobile} alt='rndRobotAutoDrivingMobile'/>
                </div>
                <div className='itemTextWrapper'>
                  <div className='itemTextMobile'>로봇 실내 자율 주행</div>
                  <div className='itemSubTextMobile'>로봇 상황 판단 및 실내 자율 주행 인공지능​</div>
                </div>
              </div>
              <div className='itemMobile human'>
                <div className='itemImage'>
                  <img src={rndHumanRobotMobile} alt='rndHumanRobotMobile'/>
                </div>
                <div className='itemTextWrapper'>
                  <div className='itemTextMobile'>휴먼 로봇 인터랙션​</div>
                  <div className='itemSubTextMobile'>인공지능으로 영상과 언어 종합 분석​</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default withRouter(MainRNDnew);

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  
  .rndInnerWrapper {
    width: ${constants.INNER_WIDTH}px;
    margin: 0 auto;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: calc(100% - ${constants.MOBILE_HORIZONTAL_MARGIN}px);
      height: 100%;
      margin: 0 auto;
    }
  }

  .contentsWrapper {
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      display: none;
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
      background-size: cover;

      &.vqa {
        background-image: url(${rndVQA});
      }
      &.auto {
        background-image: url(${rndRobotAutoDriving});
      }
      &.human {
        background-image: url(${rndHumanRobot});
      }
    }

    .itemText {
      display:inline-block;
      font-family: ${constants.NOTO_FONT};
      font-style: normal;
      font-weight: 700;
      font-size: 34px;
      line-height: 49px;
      letter-spacing: -0.05em;
      color: #FF5000;
      background: rgba(35, 24, 21, 0.85);
    }

    .itemSubText {
      display:inline-block;
      font-family: ${constants.NOTO_FONT};
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 29px;
      color: #FFFFFF;
      margin-top: 8px;
      background: rgba(35, 24, 21, 0.85);
    }
  }

  .contentsWrapperMobile {
    display: none;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 40px;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      display: block;
    }

    .titleTextMobile {    
      height: 100%;
      margin: 0 auto;
      text-align: center;
      font-family: ${constants.INTER_FONT};  
      color: #070304; 
      font-style: normal;
      font-weight: 800;
      font-size: 24px;
      line-height: 29px;
      margin-top: 40px;
      margin-bottom: 20px;
    }

    .itemWrapperMobile {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0;
    }

    .itemMobile {
      width: 100%;
      margin: 0 auto;
      height: 100%;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      
      &.middle {
        margin: 20px 0;
      }

      img {
        width: 100%;
      }
    }

    .itemTextWrapper {
      position: absolute;
      top: 30px;
      left: 30px;
    }

    .itemTextMobile {
      display:inline-block;
      font-family: ${constants.NOTO_FONT};
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 35px;
      letter-spacing: -0.05em;
      color: #FF5000;
      background: rgba(35, 24, 21, 0.85);
    }

    .itemSubTextMobile {
      display:inline-block;
      font-family: ${constants.NOTO_FONT};
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #FFFFFF;
      margin-top: 8px;
      background: rgba(35, 24, 21, 0.85);
    }
  }
`;

