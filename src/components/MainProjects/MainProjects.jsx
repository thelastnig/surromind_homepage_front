import React, { Component } from 'react';
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
        <div className='eachSlide' index={index}>
          <div className='itemWrapper' style={style}>
            <div className='addLayer'>
              <div className='textWrapper'>
                <div className='itemTitle'>{item.title}</div>
                <div className='itemSubTitle'>{item.subTitle}</div>
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
    };

    const { handleClickArticle } = this.props;

    return (
      <Wrapper>
        <div className="contentsWrapper">
          <div className="titleText">
            Projects
          </div>
          <div className="subText">
          PFN leverages deep learning and robotics technology to promote innovation in various fields.<br/>
          We develop the software framework, algorithms, hardware which is supported research and development,<br/>
          and many projects that utilize them are in progress simultaneously.<br/>
          Their application areas are getting expanded.<br/>
          </div>
          <div className='slideWrapper'>
            {this.renderArrows()}
            <Slider {...settings} ref={c => this.slider = c}>
              {projectItems}
            </Slider>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default MainProjects;

const Wrapper = styled.div`
  width: 100%;
  height: ${constants.MAIN_PROJECT_HEIGHT}px;
  margin: 0 auto;
  background-color: #EBEBEB;
  
  display: flex;
  align-items: center;
  justify-content: center;

  .contentsWrapper {
    width: ${constants.TOTAL_WIDTH}px;
    height: ${constants.MAIN_PROJECT_HEIGHT - 150}px;
    margin: 0 auto;
  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .titleText {
      margin: 0 auto;
      font-size: ${constants.MAIN_TITLE_SIZE}px;
      font-weight: 600;
    }

    .subText {
      margin: 0 auto;
      font-size: ${constants.MAIN_SUB_TITLE_SIZE}px;
      text-align: center;
    }

    .slideWrapper {
      position: relative;
      width: 1530px;
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

      .itemWrapper {
        width: 380px;
        height: 263px;
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
          font-size: ${constants.MAIN_ITEM_TITLE_SIZE}px;
          font-weight: 600;
          margin-bottom: 15px;
        }
  
        .itemSubTitle {
          font-size: ${constants.MAIN_ITEM_SUB_TITLE_SIZE}px;
        }
      }
    }
  }
`;

