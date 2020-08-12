import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { fadeOutLeft } from 'react-animations';

import oc from 'open-color';

// import constants from config.js
import * as constants from '../../lib/constants'

// import slider package
// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';
// import gandy0 from '../../images/gandy3.jpg'
// import gandy1 from '../../images/gandy4.jpg'
// import gandy2 from '../../images/gandy5.jpg'
import background from '../../images/19742.jpg'


class MainInteractive extends Component {
  state = {
    isLeftClick: false,
    isCenterClick: true,
    isRightClick: false,
    isLeftOut: false,
    isRightOut: false,
  }

  onItemClick = (item) => {
    if (item === 'isLeftClick') {
      this.setState({
        isLeftClick: true,
        isCenterClick: false,
        isRightClick: false,
        isLeftOut: false,
        isRightOut: true,
      })
    } else if (item === 'isCenterClick') {
      this.setState({
        isLeftClick: false,
        isCenterClick: true,
        isRightClick: false,
      })
    } else if (item === 'isRightClick') {
      this.setState({
        isLeftClick: false,
        isCenterClick: false,
        isRightClick: true,
        isLeftOut: true,
        isRightOut: false,
      })
    }
  }

  render() {
    const { isLeftClick, isCenterClick, isRightClick, isLeftOut, isRightOut } = this.state
    console.log('isLeftClick:' + isLeftClick )
    console.log('isCenterClick:' + isCenterClick )
    console.log('isRightClick:' + isRightClick )
    console.log('isLeftOut:' + isLeftOut )
    console.log('isRightOut:' + isRightOut )
    // const properties = {
    //   duration: 5000,
    //   transitionDuration: 300,
    // };
  
    return (
      <Wrapper isLeftClick={isLeftClick} isCenterClick={isCenterClick} isRightClick={isRightClick} isLeftOut={isLeftOut} isRightOut={isRightOut} >
        <div className='background'>
          <div className='aniWrapper'>
            <div className='aniItem left' onClick={() => this.onItemClick('isLeftClick')}>left</div>
            <div className='aniItem center' onClick={() => this.onItemClick('isCenterClick')}>center</div>
            <div className='aniItem right' onClick={() => this.onItemClick('isRightClick')}>right</div>
          </div>
        {/* <Slide {...properties}>
          <div className="eachSlide" style={{'backgroundImage': `url(${gandy0})`}}>
            <span>Slide 1</span>
          </div>
          <div className="eachSlide" style={{'backgroundImage': `url(${gandy1})`}}>
            <span>Slide 2</span>
          </div>
          <div className="eachSlide" style={{'backgroundImage': `url(${gandy2})`}}>
            <span>Slide 3</span>
          </div>
        </Slide> */}
        </div>
      </Wrapper>
    );
  }
}

export default MainInteractive;

const animate = keyframes`
  0% { background-position: 0% 50% }
  100% { background-position: 100% 50% 0% }
`; 

const fromLeftToCenter = keyframes`
  0% {
    width: 200px;
    height: 200px; 
    top: 50%;
    left: 0;
    transform: translateY(-50%);
   }
  100% { 
    width: 600px;
    height: 600px; 
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`; 

const fromRightToCenter = keyframes`
  0% {
    width: 200px;
    height: 200px; 
    top: 50%;
    right: 0;
    transform: translateY(-50%);
   }
  100% { 
    width: 600px;
    height: 600px; 
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const fromCenterToLeft = keyframes`
  0% {
    width: 600px;
    height: 600px; 
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
   }
  100% { 
    width: 200px;
    height: 200px; 
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
`; 

const fromCenterToRight = keyframes`
  0% {
    width: 600px;
    height: 600px; 
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
   }
  100% { 
    width: 200px;
    height: 200px; 
    top: 50%;
    left: 100%;
    transform: translate(-100%, -50%);
  }
`;

const fadeOutToLeft = keyframes`
  0% { 
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
  50% { 
    top: 50%;
    left: -25%;
    transform: translateY(-50%);
  }
  100% { 
    opacity: 0%;
  }
`;

const fadeOutToRight = keyframes`
  0% { 
    top: 50%;
    left: 100%;
    transform: translate(-100%, -50%);
  }
  50% { 
    top: 50%;
    left: 100%;
    transform: translate(-50%, -50%);
  }
  100% { 
    top: 50%;
    left: 100%;
    transform: translate(-50%, -50%);
    opacity: 0%;
  }
`;

const fadeInFromLeft = keyframes`
  0% { 
    top: 50%;
    left: -25%;
    transform: translateY(-50%);
  }
  50% { 
    top: 50%;
    left: -25%;
    transform: translateY(-50%);
    opacity: 100%;
  }
  100% { 
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    opacity: 100%;
  }
`;

const fadeInFromRight = keyframes`
  0% { 
    top: 50%;
    right: -50%;
    transform: translateY(-50%);
  }
  100% { 
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
`;


const Wrapper = styled.div`
  width: 100%;
  height: ${constants.MAIN_INTERACTIVE_HEIGHT}px;
  margin: 0 auto;

  .background {
    height: ${constants.MAIN_INTERACTIVE_HEIGHT}px;
    background-image: url(${background});
    background-size: 150px;

    animation: ${animate} 10s linear infinite;
  }

  .aniWrapper {
    width: 1500px;
    height: 600px;
    margin: 0 auto;
    border: 1px solid red;
    position: relative;

    .aniItem {
      width: 200px;
      height: 200px;
      border: 1px solid green;
      position: absolute;

      &.left {
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        ${props => {
          if (props.isLeftClick) {
              return css `animation: 1s ${fromLeftToCenter} forwards`;
          }
          else if (!props.isLeftClick && props.isCenterClick && props.isLeftOut) {
              return css `animation: 1s ${fadeInFromLeft} forwards`;
          }
          else if (!props.isLeftClick && props.isCenterClick && !props.isLeftOut) {
            return css `animation: 1s ${fromCenterToLeft} forwards`;
          }
          else if (!props.isLeftClick && props.isRightClick) {
            return css `animation: 1s ${fadeOutToLeft} forwards`;
          }
        }}
      }

      &.center {
        width: 600px;
        height: 600px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        ${props => {
          if (props.isCenterClick && !props.isLeftOut && !props.isRightOut) {
              return;
          }
          else if (props.isCenterClick && props.isLeftOut) {
              return css `animation: 1s ${fromLeftToCenter} forwards`;
          }
          else if (props.isCenterClick && props.isRightOut) {
              return css `animation: 1s ${fromRightToCenter} forwards`;
          }
          else if (!props.isCenterClick && props.isLeftClick) {
              return css `animation: 1s ${fromCenterToRight} forwards`;
          }
          else if (!props.isCenterClick && props.isRightClick) {
              return css `animation: 1s ${fromCenterToLeft} forwards`;
          }
        }}
      }

      &.right {
        top: 50%;
        left: 100%;
        transform: translate(-100%, -50%);
        ${props => {
          if (props.isRightClick) {
              return css `animation: 1s ${fromRightToCenter} forwards`;
          }
          else if (!props.isRightClick && props.isCenterClick && props.isRightOut) {
              return css `animation: 1s ${fadeInFromRight} forwards`;
          }
          else if (!props.isRightClick && props.isCenterClick && !props.isRightOut) {
              return css `animation: 1s ${fromCenterToRight} forwards`;
          }
          else if (!props.isRightClick && props.isLeftClick) {
              return css `animation: 1s ${fadeOutToRight} forwards`;
          }
        }}
      }
    }
  }








  .eachSlide {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    height: ${constants.MAIN_INTERACTIVE_HEIGHT}px;

    span {
      padding: 20px;
      font-size: 20px;
      background: #efefef;
      text-align: center;
    }
  }
`;

