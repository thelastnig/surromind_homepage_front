import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// import constants from constants.js
import * as constants from '../../lib/constants'

// import slider package
import gandy0 from '../../images/gandy3.jpg'
import gandy1 from '../../images/gandy4.jpg'
import gandy2 from '../../images/gandy5.jpg'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import ArrowLeft from "@material-ui/icons/ArrowLeft";
import ArrowRight from "@material-ui/icons/ArrowRight";
import ButtonBase from "@material-ui/core/ButtonBase";


class MainProjects extends Component {    
  
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
      slidesToShow: 3,
      slidesToScroll: 3,
    };

    const { handleClickArticle } = this.props;

    return (
      <Wrapper>
        <div className='slideWrapper'>
          {this.renderArrows()}
          <Slider {...settings} ref={c => this.slider = c}>
            <div className='eachSlide'>
              <img src={gandy0} onClick={() => handleClickArticle('article1')}/>
            </div>
            <div className='eachSlide'>
              <img src={gandy1} onClick={() => handleClickArticle('article2')}/>
            </div>
            <div className='eachSlide'>
              <img src={gandy2} onClick={() => handleClickArticle('article3')}/>
            </div>
            <div className='eachSlide'>
              <img src={gandy0} onClick={() => handleClickArticle('article4')}/>
            </div>
            <div className='eachSlide'>
              <img src={gandy1} onClick={() => handleClickArticle('article5')}/>
            </div>
            <div className='eachSlide'>
              <img src={gandy2} onClick={() => handleClickArticle('article6')}/>
            </div>
            <div className='eachSlide'>
              <img src={gandy2} onClick={() => handleClickArticle('article7')}/>
            </div>
          </Slider>
        </div>
      </Wrapper>
    );
  }
}

export default MainProjects;

const Wrapper = styled.div`
  width: 100%;
  height: ${constants.MAIN_SLIDER_HEIGHT}px;
  margin: 0 auto;

  .slideWrapper {
    position: relative;
    width: 1000px;
    height: 400px;
    margin: 0 auto;

    img {
      width: 300px;
    }
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
    height: 500px;
  }
`;

