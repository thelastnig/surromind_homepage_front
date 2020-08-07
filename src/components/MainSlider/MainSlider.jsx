import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// import constants from config.js
import * as constants from '../../lib/constants'

// import slider package
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import gandy0 from '../../images/gandy3.jpg'
import gandy1 from '../../images/gandy4.jpg'
import gandy2 from '../../images/gandy5.jpg'


class MainSlider extends Component {
  render() {
    const properties = {
      duration: 5000,
      transitionDuration: 300,
    };
  
    return (
      <Wrapper>
        <Slide {...properties}>
          <div className="eachSlide" style={{'backgroundImage': `url(${gandy0})`}}>
            <span>Slide 1</span>
          </div>
          <div className="eachSlide" style={{'backgroundImage': `url(${gandy1})`}}>
            <span>Slide 2</span>
          </div>
          <div className="eachSlide" style={{'backgroundImage': `url(${gandy2})`}}>
            <span>Slide 3</span>
          </div>
        </Slide>
      </Wrapper>
    );
  }
}

export default MainSlider;

const Wrapper = styled.div`
  width: 100%;
  height: ${constants.MAIN_SLIDER_HEIGHT}px;
  margin: 0 auto;

  .eachSlide {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    height: ${constants.MAIN_SLIDER_HEIGHT}px;

    span {
      padding: 20px;
      font-size: 20px;
      background: #efefef;
      text-align: center;
    }
  }
`;

