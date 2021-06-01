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
import mainSlideMobile1 from '../../images/mobile/mainSlideMobile1.jpg';
import mainSlideMobile2 from '../../images/mobile/mainSlideMobile2.jpg';
import voucherBanner from '../../images/voucherBanner.jpg'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import ArrowLeft from "@material-ui/icons/ArrowBackIos";
import ArrowRight from "@material-ui/icons/ArrowForwardIos";
import ButtonBase from "@material-ui/core/ButtonBase";



const StyledArrowLeft = styled(ArrowLeft)`
  font-size: 50px;
`;

class MainSlider extends Component {

  handleClick = (url) => {
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
            {/* <div className='eachSlide click' onClick={() => this.handleClick("/company/voucher")}>
              <img src={voucherBanner} className="voucherBanner"/>
            </div> */}

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
  width: 100%;
  max-height: ${constants.MAIN_SLIDER_HEIGHT}px;
  margin: 0 auto;
    
  @media (max-width: ${constants.MOBILE_WIDTH}px) {
    height: 100%;
  }

  .textWrapper {
    width: ${constants.TOTAL_WIDTH}px;
    max-height: ${constants.MAIN_SLIDER_HEIGHT}px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    display: flex;
    align-items: center;
  
    @media (max-width: ${constants.TOTAL_WIDTH}px) {
      width: 80%;
      height: 100%;
    }
  
    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 80%;
    }

    .textDiv {
      color: white;
      font-size: 27px;
      font-weight: 600;
      font-family: ${constants.KOR_FONT};
      line-height: 1.5em;

      span {
        font-family: ${constants.KOR_FONT};
        color: ${constants.POINT_COLOR};
      }
  
      @media (max-width: ${constants.TOTAL_WIDTH}px) {
        font-size: 2.0vw;
      }
    
      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        font-size: ${constants.RESPONSIVE_MAIN_TITLE_SIZE_MOBILE};
        line-height: 2em;
      }
    }
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
  
      @media (max-width: ${constants.TOTAL_WIDTH}px) {
        width: 100%;
      }
    
      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        width: 100%;
      }
    }
  }
`;

