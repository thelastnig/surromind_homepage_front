import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { pulse } from 'react-animations';

import oc from 'open-color';

// import constants from constants.js
import * as constants from '../../lib/constants'

// import slider package
// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';
// import gandy0 from '../../images/gandy3.jpg'
// import gandy1 from '../../images/gandy4.jpg'
// import gandy2 from '../../images/gandy5.jpg'
import background from '../../images/19742.jpg'
import device from '../../images/device.png'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px, ${y / 10}px, 0)`
const trans1s = (x, y) => `translate3d(${x / 10}px, ${y / 10}px, 0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px, ${y / 8 - 230}px, 0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px, ${y / 6 - 200}px, 0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px, ${y / 3.5}px, 0)`

function Card() {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  return (
    <div class="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <animated.div class="card1" style={{ transform: props.xy.interpolate(trans1) }}/>
      <dic className='aniText center'>
            Image
      </dic>
      {/* <animated.div class="card2" style={{ transform: props.xy.interpolate(trans2) }} />
      <animated.div class="card3" style={{ transform: props.xy.interpolate(trans3) }} />
      <animated.div class="card4" style={{ transform: props.xy.interpolate(trans4) }} /> */}
    </div>
  )
}
function Card2() {
  return (
    <div class="container" >
      <animated.div class="card1" />
      <dic className='aniText center'>
            Image
      </dic>
      {/* <animated.div class="card2" style={{ transform: props.xy.interpolate(trans2) }} />
      <animated.div class="card3" style={{ transform: props.xy.interpolate(trans3) }} />
      <animated.div class="card4" style={{ transform: props.xy.interpolate(trans4) }} /> */}
    </div>
  )
}

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
    // const properties = {
    //   duration: 5000,
    //   transitionDuration: 300,
    // };

    const  { isLeftClick, isCenterClick, isRightClick, isLeftOut, isRightOut } = this.state;
  
    return (
      <Wrapper isLeftClick={isLeftClick} isCenterClick={isCenterClick} isRightClick={isRightClick} isLeftOut={isLeftOut} isRightOut={isRightOut} >
        <div className='background'>
          <div className='aniWrapper'>
            <div className='aniItem left' onClick={() => this.onItemClick('isLeftClick')}>
              <div className='aniInnerItem left'>
                <div classname='aniImage'>
                </div>
              </div>
            </div>
            <div className='aniItem center' onClick={() => this.onItemClick('isCenterClick')}>
              <div className='aniInnerItem center'>
                {isCenterClick 
                  ? 
                  <Card>
                  </Card>
                  :
                  <Card2>
                    </Card2>
                  }
              </div>
            </div>
            <div className='aniItem right' onClick={() => this.onItemClick('isRightClick')}>
              <div className='aniInnerItem right'>
                <div classname='aniImage'></div>
              </div>
            </div>
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

const pulseAnimation = keyframes`${pulse}`;

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
    left: 100%;
    transform: translate(-100%, -50%);
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
  100% { 
    top: 50%;
    left: 0;
    transform: translate(-100%, -50%);
  }
`;

const fadeOutToRight = keyframes`
  0% { 
    top: 50%;
    left: 100%;
    transform: translate(-100%, -50%);
  }
  100% { 
    top: 50%;
    left: 100%;
    transform: translate(0%, -50%);
  }
`;

const fadeInFromLeft = keyframes`
  0% { 
    top: 50%;
    left: 0;
    transform: translate(-100%, -50%);
  }
  100% { 
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
`;

const fadeInFromRight = keyframes`
  0% { 
    top: 50%;
    left: 100%;
    transform: translate(0%, -50%);
  }
  100% { 
    top: 50%;
    left: 100%;
    transform: translate(-100%, -50%);
  }
`;

const toTransparent = keyframes`
  0% { 
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid gray;
  }
  100% { 
    background-color: rgba(255, 255, 255, 0);
    border: none;
  }
`;

const ToColor = keyframes`
  0% { 
    background-color: rgba(255, 255, 255, 0);
    border: none;
  }
  100% { 
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid gray;
  }
`;

const ToTextBigger = keyframes`
  0% { 
    font-size: 20px;
  100% { 
    font-size: 70px;
  }
`;

const ToTextSmaller = keyframes`
  0% { 
    font-size: 70px;
  }
  100% { 
    font-size: 20px;
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
    overflow: hidden;

    .aniItem {
      width: 200px;
      height: 200px;
      position: absolute;
      border-radius: 50%;
      behavior: url(PIE.htc); 
      display: flex;
      align-items: center;
      justify-content: center;

      &.left {
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        border: 1px solid green;
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
        border: 1px solid orange;
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
        border: 1px solid yellow;
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

    .aniInnerItem {
      width: 95%;
      height: 95%;
      margin: 0 auto;
      border-radius: 50%;
      behavior: url(PIE.htc); 
      border: none;
      background-color: rgba(255, 255, 255, 0);
      display: flex;
      align-items: center;
      justify-content: center;

      &.left {
        ${props => {
          if (props.isLeftClick) {
              return css `animation: 1s ${ToColor} forwards`;
          }
          else if (!props.isLeftClick && props.isCenterClick) {
              return css `animation: 1s ${toTransparent} forwards`;
          }
        }}
      }
      
      &.center {
        border: 1px solid gray;
        background-color: rgba(255, 255, 255, 1);
        ${props => {
          if (props.isCenterClick) {
              return css `animation: 1s ${ToColor} forwards`;
          }
          else if (!props.isCenterClick) {
              return css `animation: 1s ${toTransparent} forwards`;
          }
        }}
        
      }
      
      &.right {
        ${props => {
          if (props.isRightClick) {
              return css `animation: 1s ${ToColor} forwards`;
          }
          else if (!props.isRightClick && props.isCenterClick) {
              return css `animation: 1s ${toTransparent} forwards`;
          }
        }}
      }
    }

    .aniText {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: orange;

      &.center {
        font-size: 70px;
        color: orange;
        ${props => {
          if (props.isCenterClick) {
              return css `
                -webkit-animation-duration: 1s;
                -webkit-animation-name: ${ToTextBigger};
                -webkit-animation-fill-mode: forwards;
              `;
          }
          else if (!props.isCenterClick) {
              return css `
                -webkit-animation-duration: 1s;
                -webkit-animation-name: ${ToTextSmaller};
                -webkit-animation-fill-mode: forwards;
              `;
          }
        }}
      }
    }

    
    .card1,
    .card2,
    .card3,
    .card4 {
      position: absolute;
      border-radius: 5px;
      background-size: contain;
      background-position: center center;
      background-repeat: no-repeat;
      will-change: transform;
    }
    
    .card1 {
      width: 90%;
      height: 90%;
      background-image: url(${device});
    }
    
    .card2 {
      width: 40%;
      height: 40%;
      background-image: url(https://image.flaticon.com/icons/svg/789/789395.svg);
    }
    
    .card3 {
      opacity: 0.9;
      width: 30%;
      height: 30%;
      background-image: url(https://image.flaticon.com/icons/svg/414/414927.svg);
    }
    
    .card4 {
      width: 30%;
      height: 30%;
      background-image: url(https://image.flaticon.com/icons/svg/789/789392.svg);
    }
    
    .container {
      width: 80%;
      height: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
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

