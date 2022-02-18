import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import oc from 'open-color';
import ReactPlayer from 'react-player'

// import constants from config.js
import * as constants from '../../lib/constants';

// import contents from mainRND.js
import mainRNDContents from '../../lib/rnd';

// setting GA
import ReactGA from 'react-ga';

class MainRND extends Component {

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
    const rndItems = mainRNDContents.map((item, index) => {
      const style = {
        "backgroundImage": `url(${item.image})`,
        "backgroundSize": "cover",
      }
      return (
        <div className='rndItem' key={index} style={style} onClick={() => this.handleClick(item.url)}>
        </div>
      )
    })

    return (
      <Wrapper>
        <div className="RNDInnerWrapper">
          <div className="contentsWrapper">
            <div className="titleText">R&#38;D</div>
            <div className='mainText'>
            공공기관 및 기업과 연계한 연구개발 과제를 통해<br/>
            인공지능과 데이터 부분에서의 사업을 주도적으로 이끌어가고 있습니다.
            </div>
            <div className="itemWrapper">
              {rndItems}
            </div>
            <div className="videoWrapper">
              <ReactPlayer 
                url='https://www.youtube.com/watch?v=W-qJCFx358c'
                width={854}
                height={480}
                onStart={this.clickButton}
              />
            </div>
            <div className="videoWrapperMobile">
              <ReactPlayer 
                url='https://www.youtube.com/watch?v=W-qJCFx358c'
                width="100%"
                onStart={this.clickButton}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default withRouter(MainRND);

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  .RNDInnerWrapper {
    width: ${constants.LIMIT_WIDTH - 2}px;
    height: ${constants.MAIN_RND_HEIGHT}px;
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
    width: ${constants.TOTAL_WIDTH}px;
    margin: 0 auto;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 100%;
      margin: 0 auto;
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

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        height: 100%; 
        margin-top: 36px; 
        font-size: 22px;
        font-weight: 800;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.82px;
        color: #000;
      }
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

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        height: 100%; 
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.43;
        letter-spacing: -0.42px;
        text-align: center;
        color: #000;
      }
    }

    .itemWrapper {
      width: 100%;
      margin: 0 auto;
      margin-top: 41px;
      width: 973px;
      height: 462px;
      display: flex;
      flex-flow: wrap;
      justify-content: space-between;
      align-content: space-between;

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        width: 100%;
        height: 100%; 
        margin-top: 24px;
        display: flex;
        flex-flow: wrap;
        justify-content: space-between;
        align-content: space-between;
      }

      @media (max-width: ${constants.MOBILE_MIDDLE_WIDTH}px) {
        width: 100%;
        height: 100%; 
        margin-top: 24px;
        display: flex;
        flex-flow: wrap;
        justify-content: center;
        align-content: center;
      }
    }

    .rndItem {
      width: 311px;
      height: 221px;
      cursor: pointer;

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        width: 170px;
        height: 121px;
        margin-bottom: 10px;
      }
    }

    .videoWrapper {
      margin: 0 auto;
      margin-top: 80px;
      width: 854px;
      height: 480px;

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        display: none;
      }
    }

    .videoWrapperMobile {
      width: 100%;
      margin: 0 auto;
      margin-top: 26px;
      margin-bottom: 36px;
      display: none;

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        display: block;
      }

      @media (min-width: ${constants.MOBILE_WIDTH}px) {
        display: none;
      }
    }
  }
`;

