import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

// import constants from constants.js
import * as constants from '../../../lib/constants'

// import image
import inspectionContents from '../../../images/new/solutionInspection.png'

class Inspection extends Component {

  render() {
  
    return (
      <Wrapper>
        <div className='contentsWrapper'>
          <img src={inspectionContents} alt='inspectionContents' width='1100px'/>
        </div>
      </Wrapper>
    );
  }
}

export default withRouter(Inspection);

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  
  .contentsWrapper {
    width: 1100px;
    margin: 0 auto;
    padding: 100px 0;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: calc(100% - ${constants.MOBILE_HORIZONTAL_MARGIN}px);
      height: 100%;
      margin: 0 auto;
      padding: 40px 0;
      img {
        width: 100%;
      }
    }
  }
`;

