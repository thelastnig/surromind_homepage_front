import React from 'react';
import styled from 'styled-components';
import MainSliderContainer from '../containers/MainSliderContainer';
import MainInteractiveContainer from '../containers/MainInteractiveContainer';
import MainNewsContainer from '../containers/MainNewsContainer';
import MainCompanyContainer from '../containers/MainCompanyContainer';
import MainAIPlatformContainer from '../containers/MainAIPlatformContainer';
import MainRNDContainer from '../containers/MainRNDContainer';
import MainProjectsContainer from '../containers/MainProjectsContainer';
import MainCareersContainer from '../containers/MainCareersContainer';
import * as constants from '../lib/constants';


const MainPage = () => {

  return (
    <div>
      <MainSliderContainer/>
      {/* <MainInteractiveContainer/> */}
      <MainNewsContainer/>
      <IntervalLineWrapper><IntervalLine/></IntervalLineWrapper>
      <MainCompanyContainer/>
      <IntervalLineWrapper><IntervalLine/></IntervalLineWrapper>
      <MainAIPlatformContainer/>
      <IntervalLineWrapper><IntervalLine/></IntervalLineWrapper>
      <MainRNDContainer/>
      {/* <MainProjectsContainer/> */}
      <IntervalLineWrapper><IntervalLine/></IntervalLineWrapper>
      {/* <MainCareersContainer/> */}
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




