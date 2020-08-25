import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import oc from 'open-color';

// import constants from constants.js
import * as constants from '../../../lib/constants';

import imageNews from '../../../images/upperImageNews.png';
import imageContact from '../../../images/upperImageContact.jpg';
import imageCareers from '../../../images/upperImageCareers.jpg';
import imageProject from '../../../images/upperImageProject.jpg';

class UpperImage extends Component {

  render() {
  const { text } = this.props;

  let image;
  if (text === 'News') {
    image = imageNews;
  } else if (text === 'Contact') {
    image = imageContact;
  } else if (text === 'Careers') {
    image = imageCareers;
  } else if (text === 'Project' || text === 'R&D') {
    image = imageProject;
  } else {
    image = imageNews;
  } 

    return (
      <Wrapper>
        <div className='upperImageWrapper'>
          <div className='imgWrapper'>
            <img src={image} alt={image}/>
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

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .titleText {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: ${constants.MAIN_TITLE_SIZE}px;
    font-weight: 600;
    letter-spacing: ${constants.MAIN_TITLE_LETTER_SPACING}px;
  
    @media (max-width: ${constants.TOTAL_WIDTH}px) {
      font-size: 2.7vw;
    };
  
    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      font-size: ${constants.MAIN_TITLE_SIZE}px;
    };
`;