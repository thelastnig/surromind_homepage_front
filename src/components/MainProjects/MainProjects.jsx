import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import oc from 'open-color';

// import constants from constants.js
import * as constants from '../../lib/constants'

// import contents from mainRND.js
import mainProjectContents from '../../lib/project';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import ArrowLeft from "@material-ui/icons/ArrowBackIos";
import ArrowRight from "@material-ui/icons/ArrowForwardIos";
import ButtonBase from "@material-ui/core/ButtonBase";


class MainProjects extends Component {

  handleClick = (url) => {
    this.props.history.push(url);
  }
  
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
    const projectItems = mainProjectContents.map((item, index) => {
      const style = {
        "backgroundImage": `url(${item.image})`,
        "backgroundSize": "cover",
      }
      return (
        <div className='projectItem' key={index} style={style} onClick={() => this.handleClick(item.url)}>
          <div className='addLayer'>
            <div className='textWrapper'>
              <div className='itemTitle'>{item.title}</div>
            </div>
          </div>
        </div>
      )
    })

    const projectItemsMobile = mainProjectContents.map((item, index) => {
      const style = {
        "backgroundImage": `url(${item.image})`,
        "backgroundSize": "cover",
      }
      return (
        <div className='eachSlide' key={index} onClick={() => this.handleClick(item.url)}>
          <div className='itemWrapperMobile' style={style}>
            <div className='addLayer'>
              <div className='textWrapper'>
                <div className='itemTitle'>{item.title}</div>
              </div>
            </div>
          </div>
        </div> 
      )
    })

    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: parseInt(constants.TOTAL_WIDTH),
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: parseInt(constants.TOTAL_SUB_WIDTH),
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    };

    return (
      <Wrapper>
        <div className="contentsWrapper">
          <div className="titleText">
            Projects
          </div>
          <div className="itemWrapper">
            {projectItems}
          </div>
          <div className='slideWrapper'>
            {this.renderArrows()}
            <Slider {...settings} ref={c => this.slider = c}>
              {projectItemsMobile}
            </Slider>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default withRouter(MainProjects);

const Wrapper = styled.div`
  width: 100%;
  padding: 75px 0;
  margin: 0 auto;
  background-color: #EBEBEB;
  
  @media (max-width: ${constants.TOTAL_WIDTH}px) {
    width: 100%;
    height: 100%;
  }
  
  display: flex;
  align-items: center;
  justify-content: center;

  .contentsWrapper {
    max-width: ${constants.TOTAL_WIDTH}px;
    height: ${constants.MAIN_PROJECT_HEIGHT - 150}px;
    margin: 0 auto;
  
    @media (max-width: ${constants.TOTAL_WIDTH}px) {
      width: 100%;
      height: 100%;
    }
  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .titleText {
      margin: 0 auto;
      font-size: ${constants.MAIN_TITLE_SIZE}px;
      font-weight: 600;
  
      @media (max-width: ${constants.TOTAL_WIDTH}px) {
        margin-bottom: 50px;
        font-size: ${constants.RESPONSIVE_MAIN_TITLE_SIZE};
      }
  
      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        margin-bottom: 50px;
        font-size: ${constants.RESPONSIVE_MAIN_TITLE_SIZE_MOBILE_LARGE}px;
      }
    }
    
    .itemWrapper {
      width: ${constants.TOTAL_WIDTH}px;
      display: flex;
      align-items: center;
      justify-content: space-between;
  
      @media (max-width: ${constants.TOTAL_WIDTH}px) {
        display: none;
      }
    }

    .projectItem {
      width: 380px;
      height: 263px;
      color: white;
      position: relative;
      cursor: pointer;
  
      @media (max-width: ${constants.TOTAL_SUB_WIDTH}px) {
        margin-bottom: 25px;
      }
  
      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        max-width: 310px;
        max-height: 215px;
      }

      .addLayer {
        background-color: rgba(0, 0, 0, 0.6);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &:hover {
          background-color: rgba(237, 113, 0, 0.7);
        }
      }

      .textWrapper {
        width: 90%;
        height: 90%;
        border: 1px solid white;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .itemTitle {
        font-size: ${constants.MAIN_ITEM_TITLE_SIZE - 5}px;
        font-family: ${constants.KOR_FONT};
        font-weight: 600;
      }

      .itemSubTitle {
        font-size: ${constants.MAIN_ITEM_SUB_TITLE_SIZE}px;
      }
    }

    .slideWrapper {
      display: none;
      position: relative;
      max-width: 1530px;
  
      @media (max-width: ${constants.TOTAL_WIDTH}px) {
        width: 90%;
        display: block;
      };
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
      outline: none;

      .itemWrapperMobile {
        width: 380px;
        height: 263px;
  
        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          max-width: 270px;
          max-height: 187px;
        }
        
        margin: 0 auto;

        color: white;
        position: relative;
        cursor: pointer;

        .addLayer {
          background-color: rgba(0, 0, 0, 0.6);
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
  
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
  
          &:hover {
            background-color: rgba(237, 113, 0, 0.7);
          }
        }
  
        .textWrapper {
          width: 90%;
          height: 90%;
          border: 1px solid white;
  
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
  
        .itemTitle {
          font-size: ${constants.MAIN_ITEM_TITLE_SIZE - 5}px;
          font-family: ${constants.KOR_FONT};
          font-weight: 600;
  
          @media (max-width: ${constants.MOBILE_WIDTH}px) {
            font-size: 3.7vw;
          }
        }
  
        .itemSubTitle {
          font-size: ${constants.MAIN_ITEM_SUB_TITLE_SIZE}px;
        }
      }
    }
  }
`;

