import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// import constants from config.js
import * as constants from '../../lib/constants'

class MainRND extends Component {
  render() {
  
    return (
      <Wrapper>
        R&D
      </Wrapper>
    );
  }
}

export default MainRND;

const Wrapper = styled.div`
  width: 100%;
  height: ${constants.MAIN_RND_HEIGHT}px;
  margin: 0 auto;
`;

