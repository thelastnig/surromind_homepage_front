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

import ArrowLeft from "@material-ui/icons/ArrowLeft";
import ArrowRight from "@material-ui/icons/ArrowRight";
import ButtonBase from "@material-ui/core/ButtonBase";


class MainSlider extends Component {    
  
  renderArrows = () => {
    return (
      <div className="slider-arrow">
        <ButtonBase
          className="arrow-btn prev"
          onClick={() => this.slider.slickPrev()}
        >
          <ArrowLeft />
        </ButtonBase>
        <ButtonBase
          className="arrow-btn next"
          onClick={() => this.slider.slickNext()}
        >
          <ArrowRight />
        </ButtonBase>
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
      <Wrapper>
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
      </Wrapper>
    );
  }
}

export default MainSlider;

const Wrapper = styled.div`
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

  .slider-arrow {
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .arrow-btn {
    top: 45%;
    z-index: 1;
  }
  
  .next {
    float: right;
  }

  .eachSlide {
    position: relative;
  }
`;

