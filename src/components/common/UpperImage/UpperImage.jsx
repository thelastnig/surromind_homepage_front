import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import oc from 'open-color';

// import constants from constants.js
import * as constants from '../../../lib/constants';

import imageNews from '../../../images/upperImageNews.png';

class UpperImage extends Component {

  render() {
  const { text } = this.props;

  let image;
  if (text === 'News') {
    image = imageNews;
  }  else {
    image = imageNews;
  } 

  
  const style = {
    "backgroundImage": `url(${image})`,
    "backgroundRepeat": 'no-repeat'
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
  margin: 0 auto;

  .upperImageWrapper {
    width: ${constants.TOTAL_WIDTH}px;
    height: 450px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
  }

  .titleText {
    color: white;
    font-size: ${constants.MAIN_TITLE_SIZE}px;
    font-weight: 600;
  }

`;