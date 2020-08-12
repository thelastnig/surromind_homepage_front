import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// import constants from constants.js
import * as constants from '../../lib/constants'

class ProjectList extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render() {
  
    return (
      <Wrapper>
        Project List
      </Wrapper>
    );
  }
}

export default ProjectList;

const Wrapper = styled.div`
  width: 100%;
  height: ${constants.MAIN_NEWS_AREA_HEIGHT}px;
  margin: 0 auto;
`;

