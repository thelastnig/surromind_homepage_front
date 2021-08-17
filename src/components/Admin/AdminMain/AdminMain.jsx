import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link, withRouter } from 'react-router-dom';

// import constants from constants.js
import * as constants from '../../../lib/constants';


class AdminMain extends Component {
  
  handleMenuClick = (url) => {
    this.props.history.push(url);
  }

  render() {
    return (
      <Wrapper>
        Main
      </Wrapper>
    );
  }
}

export default withRouter(AdminMain);

const Wrapper = styled.div`
    
`;



