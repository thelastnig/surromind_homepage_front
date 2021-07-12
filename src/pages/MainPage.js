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
      <IntervalLine/>
      <MainCompanyContainer/>
      <IntervalLine/>
      <MainAIPlatformContainer/>
      <IntervalLine/>
      <MainRNDContainer/>
      {/* <MainProjectsContainer/> */}
      <IntervalLine/>
      {/* <MainCareersContainer/> */}
    </div>
  )
}

export default MainPage;

const IntervalLine = styled.div`
  margin: 0 auto;
  width: ${constants.TOTAL_WIDTH}px;
  border-bottom: 1px solid #e1e2e3;
`




