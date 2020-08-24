import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link, withRouter } from 'react-router-dom';

// import constants from constants.js
import * as constants from '../../lib/constants';

import contactImage from '../../images/contact.png';

class Contact extends Component {
  
  handleMoreClick = () => {
    this.props.history.push('/contact');
  }

  render() {
  
    return (
      <Wrapper>
        <div className='contentsWrapper'>
          <div className='upperArea'>
            <div className='titleText'>Contact</div>
          </div>
          <div className='centerArea'>
            <div className='subText'>Contact us here</div>
          </div>
          <div className='lowerArea'>
            <div className='btn' onClick={this.handleMoreClick}>
              Contact
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default withRouter(Contact);

const Wrapper = styled.div`
  width: 100%;
  height: ${constants.CONTACT_HEIGHT}px;
  margin: 0 auto;
  
  background-image: url(${contactImage});
  background-repeat: no-repeat;
  background-position: center center;
    
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .contentsWrapper {
    max-width: ${constants.TOTAL_WIDTH}px;
    height: ${constants.CONTACT_HEIGHT - 150}px;
    margin: 0 auto;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .upperArea {
      .titleText {
        text-align: center;
        font-size: ${constants.MAIN_TITLE_SIZE}px;
        font-weight: 600;
        color: white;
      }
    }

    .centerArea {
      .subText {
        text-align: center;
        font-size: ${constants.MAIN_SUB_TITLE_SIZE}px;
        color: white;
      }

    }

    .lowerArea {
      .btn {
        width: 200px;
        text-align:center;
        border: 1px solid ${constants.POINT_COLOR};
        padding: 10px 0;
        
        font-size: ${constants.MAIN_SUB_TITLE_SIZE}px;
        color: white;
        background-color: ${constants.POINT_COLOR};
        cursor: pointer;

        &:hover {
          background-color: ${oc.orange[5]};
          border: 1px solid ${oc.orange[5]};
        }
      }
    }
  }
`;


