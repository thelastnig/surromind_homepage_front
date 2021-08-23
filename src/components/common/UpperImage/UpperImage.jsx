import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import oc from 'open-color';

// import constants from constants.js
import * as constants from '../../../lib/constants';

import imageNews from '../../../images/upperImageNews.png';
import imageContact from '../../../images/upperImageContact.jpg';
import imageCareers from '../../../images/upperImageCareers.jpg';
import imageProject from '../../../images/upperImageProject.jpg';

import imageNewsMobile from '../../../images/mobile/upperImageNewsMobile.png';
import imageContactMobile from '../../../images/mobile/upperImageContactMobile.png';
import imageCareersMobile from '../../../images/mobile/upperImageCareersMobile.png';
import imageProjectMobile from '../../../images/mobile/upperImageProjectMobile.jpg';

class UpperImage extends Component {

  render() {
  const { text } = this.props;

  let image;
  let imageMobile;
  if (text === 'News') {
    image = imageNews;
    imageMobile = imageNewsMobile;
  } else if (text === 'Contact') {
    image = imageContact;
    imageMobile = imageContactMobile;
  } else if (text === 'Careers') {
    image = imageCareers;
    imageMobile = imageCareersMobile;
  } else if (text === 'Project' || text === 'R&D') {
    image = imageProject;
    imageMobile = imageProjectMobile;
  } else {
    image = imageNews;
  } 

    return (
      <Wrapper imageMobile={imageMobile}>
        <div className='upperImageWrapper'>
          <div className='imgWrapper'>
            <img src={image} alt={image} className='imgUpper'/>
            <div className='titleText'>
              {text}
            </div>
          </div>
        </div>
      </Wrapper>
    )
  }
}

export default UpperImage;


const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  .upperImageWrapper {
    margin: 0 auto;
    text-align: center;
    position: relative;
    width: 1920px;
    height: 450px;
  
    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 100%;
      height: 100%;
    }

    .imgUpper {
      max-width: 100%;
      max-height: 100%;
  
      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        content: url(${props => props.imageMobile});
      }
    }
  }

  .titleText {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    font-family: ${constants.INTER_FONT};
    color: white;
    font-size: 44px;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -2.02px;
  
  
    @media (max-width: ${constants.MOBILE_WIDTH}px) {  
      font-size: 32px;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.82px;
    }
  }


`;