import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// import constants from config.js
import * as constants from '../../lib/constants'

class MainCareers extends Component {
  render() {
  
    return (
      <Wrapper>
        Careers
      </Wrapper>
    );
  }
}

export default MainCareers;

const Wrapper = styled.div`
  width: 100%;
  height: ${constants.MAIN_CAREERS_HEIGHT}px;
  margin: 0 auto;
`;

