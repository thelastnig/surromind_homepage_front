import React from 'react';
import styled from 'styled-components';
import MainSliderContainer from '../containers/MainSliderContainer';
import MainInteractiveContainer from '../containers/MainInteractiveContainer';
import MainNewsContainer from '../containers/MainNewsContainer';
import MainCompanyContainer from '../containers/MainCompanyContainer';
import MainRNDContainer from '../containers/MainRNDContainer';
import MainProjectsContainer from '../containers/MainProjectsContainer';
import MainCareersContainer from '../containers/MainCareersContainer';

const MainPage = () => {

  return (
    
    <div>
      <MainSliderContainer/>
      {/* <MainInteractiveContainer/> */}
      <MainNewsContainer/>
      <MainCompanyContainer/>
      <MainRNDContainer/>
      {/* <MainProjectsContainer/> */}
      <MainCareersContainer/>
    </div>
  )
}

export default MainPage;
