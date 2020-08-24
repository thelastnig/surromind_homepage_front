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
      <MainSliderWrapper>
        <div className='slideWrapper'>
          {this.renderArrows()}
          <Slider {...settings} ref={c => this.slider = c}>
            <div className='eachSlide'>
              <img src={mainSlide1} />
              <div className="textWrapper">
                <div className='textDiv'>
                  고객님, <span>인공지능</span> 사업 시대를 맞이할 준비가 되셨나요?<br/><br/>
                  <span>인공지능</span>은 “있으면 좋은 것”에서<br/>
                  “꼭 필요한 것”으로 변화하고 있습니다.<br/>
                  품질, 효율, 속도의 향상에 필수적인 기술로 발전하고 있습니다.<br/><br/>
                  포스트 코로나 시대, 디지털 전환이 가속화 되고,<br/>
                  <span>인공지능</span>  적용 분야와 역할의 확대가 가속화 되고 있습니다.
                </div>
              </div>
            </div>
            <div className='eachSlide'>
              <img src={mainSlide2} />
              <div className="textWrapper">
                <div className='textDiv'>
                  고객님, <span>인공지능</span>  개발 전문회사<br/>
                  <span>써로마인드</span> 가 함께 하겠습니다.<br/><br/>
                  고객님의 사업 고도화와 문제 해결을 위한<br/> 
                  <span>인공지능</span> 개발을 함께 시작하겠습니다.<br/><br/>
                  부족한 전문가, 인프라, 데이터를 고객님과 함께 해결하겠습니다.<br/>
                  남들보다 빠르고 효율적으로 경쟁력을 확보할 수 있도록 함께 뛰겠습니다.<br/>
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
    border: 1px solid red;
    width: ${constants.TOTAL_WIDTH}px;
    max-height: ${constants.MAIN_SLIDER_HEIGHT}px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    display: flex;
    align-items: center;

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
    img {
      margin: 0 auto;
    }
  }
`;
