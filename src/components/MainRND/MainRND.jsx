import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import oc from 'open-color';
import ReactPlayer from 'react-player'

// import constants from config.js
import * as constants from '../../lib/constants';

// import contents from mainRND.js
import mainRNDContents from '../../lib/rnd';


class MainRND extends Component {

  handleClick = (url) => {
    this.props.history.push(url);
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
      <RNDWrapper>
        <div className="contentsWrapper">
          <div className="titleText">R&D</div>
          <div className='mainText'>
          공공기관 및 기업과 연계한 연구개발 과제를 통해<br/>
          인공지능과 데이터 부분에서의 사업을 주도적으로 이끌어가고 있습니다.
          </div>
          <div className="itemWrapper">
            {rndItems}
          </div>
          <div className="videoWrapper">
            <ReactPlayer 
              url='https://www.youtube.com/watch?v=Ajz4B6t28EU'
              width={854}
              height={480}
            />
          </div>
        </div>
      </RNDWrapper>
    );
  }
}

export default withRouter(MainRND);

const RNDWrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  .contentsWrapper {
    width: ${constants.TOTAL_WIDTH}px;
    height: ${constants.MAIN_RND_HEIGHT}px;
    margin: 0 auto;

    border: 1px solid white;
    background-color: white;
    position: relative;

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

    .itemWrapper {
      margin: 0 auto;
      margin-top: 41px;
      width: 973px;
      height: 462px;
      display: flex;
      flex-flow: wrap;
      justify-content: space-between;
      align-content: space-between;
    }

    .rndItem {
      width: 311px;
      height: 221px;
      cursor: pointer;
    }

    .videoWrapper {
      margin: 0 auto;
      margin-top: 80px;
      width: 854px;
      height: 480px;
      background-color: gray;

    }
  }
`;

