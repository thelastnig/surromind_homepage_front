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

  const style = {
    "backgroundImage": `url(${image})`,
    "backgroundRepeat": 'no-repeat',
    "backgroundSize": 'contain',
  }
  
    return (
      <Wrapper>
        <div className='upperImageWrapper' style={style}>
          <div className='imgWrapper'>
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
  height: 450px;
  margin: 0 auto;

  .upperImageWrapper {
    width: 100%;
    height: 450px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .titleText {
    color: white;
    font-size: ${constants.MAIN_TITLE_SIZE}px;
    font-weight: 600;
    letter-spacing: ${constants.MAIN_TITLE_LETTER_SPACING}px;
`;