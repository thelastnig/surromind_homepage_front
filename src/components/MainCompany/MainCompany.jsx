import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// import constants from config.js
import * as constants from '../../lib/constants'

class MainCompany extends Component {
  render() {
  
    return (
      <Wrapper>
        Company
      </Wrapper>
    );
  }
}

export default MainCompany;

const Wrapper = styled.div`
  width: 100%;
  height: ${constants.MAIN_COMPANY_HEIGHT}px;
  margin: 0 auto;
`;

