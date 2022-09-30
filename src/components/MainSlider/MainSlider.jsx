import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import MediaQuery from 'react-responsive';

// import constants from constants.js
import * as constants from '../../lib/constants'

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
  state = {
    banners: []
  }

  componentDidMount() {
    this.loadBanners();
  }

  loadBanners = () => {
    const url = process.env.REACT_APP_BACKEND_API_BANNER_ENDPOINT + 'list/';

    axios.get(url)
    .then(response => {
      const itemsList = response.data.data;
      const items = itemsList.map((item, index) => {
        const imageDesktopPath = process.env.REACT_APP_BACKEND_IMAGE_ENDPOINT + item.image_desktop;
        const imageMobilePath = process.env.REACT_APP_BACKEND_IMAGE_ENDPOINT + item.image_mobile;
        return {
          desktop: imageDesktopPath,
          mobile: imageMobilePath
        };
      });
      this.setState({
        banners: items
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  handleClick = (url) => {
    // ReactGA.event({
    //   category: 'User',
    //   action: 'Click Event1 Button',
    //   label: 'Go to Event1 Page',
    // });
    // this.props.history.push(url);
    // window.open('https://www.automationworld.co.kr/fairDash.do?hl=KOR', '_blank')
  }
  
  handleButtonClick = (url) => {
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
    const { banners } = this.state;
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 8000,
      initialSlide: 0,
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

    let slides = [];
    slides = banners.map((banner, index) => {
      let bannerUrl = '/';
      if (index == 0) {
        bannerUrl = '/platform';
      } else if (index == 1) {
        bannerUrl = '/solution/inspection';
      } else if (index == 2) {
        bannerUrl = '/solution/phm';
      }
      return (

        index == 0
        ?          
        <div className='eachSlide' key={index} onClick={() => this.handleButtonClick(bannerUrl)}>
          <MediaQuery maxWidth={parseInt(constants.MOBILE_WIDTH)}>
            <img src={banner.mobile} className='mobile'/>
            {/* <img src={banner.mobile} className='mobile' onClick={() => this.handleButtonClick('/exhibition/2022_03')}/> */}
          </MediaQuery>
          <MediaQuery minWidth={parseInt(constants.MOBILE_WIDTH) + 1}>
            <img src={banner.desktop} className="desktop" useMap="#button"/>
            {/* <map name="button">
              <area className="areaMap" shape='rect' coords='1634,351,1843,400' alt='pamphletButton' onClick={() => this.handleButtonClick('/exhibition/2022_03')}></area>
            </map> */}
          </MediaQuery>
        </div>
        :
        <div className='eachSlide' key={index} onClick={() => this.handleButtonClick(bannerUrl)}>
          <MediaQuery maxWidth={parseInt(constants.MOBILE_WIDTH)}>
            <img src={banner.mobile} className='mobile'/>
          </MediaQuery>
          <MediaQuery minWidth={parseInt(constants.MOBILE_WIDTH) + 1}>
            <img src={banner.desktop} className="desktop"/>
          </MediaQuery>
        </div>
      )
    });
    return (
      <MainSliderWrapper >
        <div className='slideWrapper'>
          {this.renderArrows()}
          {
          (banners != null && banners.length > 0)
          ?
          <Slider {...settings} ref={c => this.slider = c}>
              {slides}
          </Slider>
          :
          null 
          }
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

  .slick-dots {
    top: calc(${constants.MAIN_SLIDER_HEIGHT}px - 60px);
  }
    
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
    color: ${constants.POINT_COLOR};
  }

  .eachSlide {
    position: relative;
    outline: none;
    cursor: pointer;

    &.click {
      cursor: pointer;
    }

    img {
      margin: 0 auto;
    }
    
    .mobile {
      width: 100%;
    }

    .areaMap {
      cursor: pointer;
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

