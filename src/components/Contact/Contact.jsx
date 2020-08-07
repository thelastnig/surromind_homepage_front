import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// import constants from config.js
import * as constants from '../../lib/constants'

class Contact extends Component {
  render() {
  
    return (
      <Wrapper>
        Contact
      </Wrapper>
    );
  }
}

export default Contact;

const Wrapper = styled.div`
  width: 100%;
  height: ${constants.CONTACT_HEIGHT}px;
  margin: 0 auto;
`;

