import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// import constants from constants.js
import * as constants from '../../lib/constants'

// import slider package
import mainSlide1 from '../../images/mainSlide1.jpg';
import mainSlide2 from '../../images/mainSlide2.jpg';
import mainSlide3 from '../../images/mainSlide3.jpg';
import mainSlide4 from '../../images/mainSlide4.jpg';

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
      autoplaySpeed: 5000,
    };

    return (
      <MainSliderWrapper>
        <div className='slideWrapper'>
          {this.renderArrows()}
          <Slider {...settings} ref={c => this.slider = c}>
            <div className='eachSlide'>
              <img src={mainSlide1} />
              <div className="textWrapper">
                <div className='textDiv'>
                  고객님은<br/>인공지능 사업 시대를<br/>맞이할 준비가 되셨나요?
                </div>
              </div>
            </div>
            <div className='eachSlide'>
              <img src={mainSlide2} />
              <div className="textWrapper">
                <div className='textDiv'>
                  인공지능 적용에 대한 인식의 변화<br/>"있으면 좋은 것"에서<br/>"꼭 필요한 것"으로 변화하고 있습니다.
                </div>
              </div>
            </div>
            <div className='eachSlide'>
              <img src={mainSlide3} />
              <div className="textWrapper">
                <div className='textDiv'>
                  품질, 효율, 속도의 향상에 필수적인 기술로 발전
                </div>
              </div>
            </div>
            <div className='eachSlide'>
              <img src={mainSlide4} />
              <div className="textWrapper">
                <div className='textDiv'>
                  Post Corona 시대, 전 사회적인 디지털 전환이 가속화<br/>인공지능 적용 분야 및 역할 확대 가속화 될 것으로 예상
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </MainSliderWrapper>
    );
  }
}

export default MainSlider;

const MainSliderWrapper = styled.div`
  width: 100%;
  height: ${constants.MAIN_SLIDER_HEIGHT}px;
  margin: 0 auto;

  .textWrapper {
    width: ${constants.TOTAL_WIDTH}px;
    height: ${constants.MAIN_SLIDER_HEIGHT}px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    align-items: center;

    .textDiv {
      color: white;
      font-size: 50px;
      font-weight: 500;
      font-family: ${constants.KOR_FONT};
      line-height: 1.5em;
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
    width: 95vw;
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
  }
`;
