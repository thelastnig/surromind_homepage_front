import React from 'react';
import styled from 'styled-components';
import MainSliderContainer from '../containers/MainSliderContainer';
import MainVideoContainer from '../containers/MainVideoContainer';
import MainProductContainer from '../containers/MainProductContainer';
import MainRNDContainer from '../containers/MainRNDContainer';
import * as constants from '../lib/constants';


const MainPage = (props) => {

  return (
    <div>
      <MainSliderContainer {...props}/>
      <MainVideoContainer/>
      <MainProductContainer/>
      <MainRNDContainer/>

    </div>
  )
}

export default MainPage;

const IntervalLineWrapper = styled.div`
  width: ${constants.LIMIT_WIDTH}px;
  margin: 0 auto;
  
  @media (max-width: ${constants.MOBILE_WIDTH}px) {
    width: 100%;
  }
`
const IntervalLine = styled.div`
  width: ${constants.TOTAL_WIDTH}px;
  margin: 0 auto;
  border-bottom: 1px solid #e1e2e3;
  
  @media (max-width: ${constants.MOBILE_WIDTH}px) {
    width: 95%;
    margin: 0 auto;
  }
`




