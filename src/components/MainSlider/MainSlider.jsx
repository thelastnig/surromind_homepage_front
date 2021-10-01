import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link, withRouter } from 'react-router-dom';

// import constants from constants.js
import * as constants from '../../lib/constants'

// import slider images
import mainSlide1 from '../../images/mainSlide1.jpg';
import mainSlide2 from '../../images/mainSlide2.jpg';
import mainSlide3 from '../../images/mainSlide3.jpg';
import mainSlide4 from '../../images/mainSlide4.jpg';
import mainSlideMobile0 from '../../images/mobile/mainSlideMobile0.jpg';
import mainSlideMobile1 from '../../images/mobile/mainSlideMobile1.png';
import mainSlideMobile2 from '../../images/mobile/mainSlideMobile2.png';
import mainSlideMobile3 from '../../images/mobile/mainSlideMobile3.png';
import mainSlideMobile4 from '../../images/mobile/mainSlideMobile4.png';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import ArrowLeft from "@material-ui/icons/ArrowBackIos";
import ArrowRight from "@material-ui/icons/ArrowForwardIos";
import ButtonBase from "@material-ui/core/ButtonBase";

// GA settings
import ReactGA from 'react-ga';


const StyledArrowLeft = styled(ArrowLeft)`
  font-size: 50px;
`;

class MainSlider extends Component {

  handleClick = (url) => {
    ReactGA.event({
      category: 'User',
      action: 'Click Event1 Button',
      label: 'Go to Event1 Page',
    });
    this.props.history.push(url);
  }    
  
  renderArrows = () => {
    return (
      <div className="sliderArrow">
        <div className='arrowInnerWrapper'>
          <ButtonBase
            className="arrowBtn prev"
            onClick={() => this.slider.slickPrev()}
          >
            <StyledArrowLeft />
          </ButtonBase>
          <ButtonBase
            className="arrowBtn next"
            onClick={() => this.slider.slickNext()}
          >
            <ArrowRight />
          </ButtonBase>
        </div>
      </div>
    );
  };

  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 8000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    };

    return (
      <MainSliderWrapper >
        <div className='slideWrapper'>
          {this.renderArrows()}
          <Slider {...settings} ref={c => this.slider = c}>
            <div className='eachSlide'>
              <img src={mainSlide1} className="slideImage1"/>
            </div>

            <div className='eachSlide'>
              <img src={mainSlide2} className="slideImage2"/>
            </div>

            <div className='eachSlide'>
              <img src={mainSlide3} className="slideImage3"/>
            </div>

            <div className='eachSlide'>
              <img src={mainSlide4} className="slideImage4"/>
            </div>
          </Slider>
        </div>
      </MainSliderWrapper>
    );
  }
}

export default withRouter(MainSlider);

const MainSliderWrapper = styled.div`
  width: ${constants.LIMIT_WIDTH}px;
  height: ${constants.MAIN_SLIDER_HEIGHT}px;
  margin: 0 auto;
    
  @media (max-width: ${constants.MOBILE_WIDTH}px) {
    width: 100%;
    height: 100%;
  }

  .slideWrapper {
    position: relative;
  }

  .sliderArrow {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .arrowInnerWrapper {
    width: 95%;
    height: 100%;
    margin: 0 auto;
  
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .arrowBtn {
    z-index: 1;
  }

  .eachSlide {
    position: relative;
    outline: none;

    &.click {
      cursor: pointer;
    }

    img {
      margin: 0 auto;

      &.slideImage0 {
        cursor: pointer;
        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          width: 100%;
          content: url(${mainSlideMobile0});
        }
      }

      &.slideImage1 {
        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          width: 100%;
          content: url(${mainSlideMobile1});
        }
      }
      
      &.slideImage2 {
        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          width: 100%;
          content: url(${mainSlideMobile2});
        }
      }
      
      &.slideImage3 {
        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          width: 100%;
          content: url(${mainSlideMobile3});
        }
      }
      
      &.slideImage4 {
        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          width: 100%;
          content: url(${mainSlideMobile4});
        }
      }
    }
  }

  .slick-dots {
    left: 50%; 
    transform: translateX(-50%);
    bottom: -50px;

    li {
      margin: 0px;

      &.slick-active {

        button:before {
          color: #FE5F01;
          font-size: 6px;
        }
      }
    }
    button:before {
      color: #D5D6D7;
      font-size: 6px;
    }
  }  
`;

