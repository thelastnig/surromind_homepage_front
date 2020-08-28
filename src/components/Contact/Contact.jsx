import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link, withRouter } from 'react-router-dom';

// import constants from constants.js
import * as constants from '../../lib/constants';

import contactImage from '../../images/contact.png';
import contactImageMobile from '../../images/mobile/contactMobile.jpg';

class Contact extends Component {
  
  handleMoreClick = () => {
    this.props.history.push('/contact');
  }

  render() {
  
    return (
      <Wrapper>
        <div className='contentsWrapper'>
          <img src={contactImage} alt={contactImage} className='imgContact'/>
          <div className="contentInnerWrapper">
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
        </div>
      </Wrapper>
    );
  }
}

export default withRouter(Contact);

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
    
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media (max-width: ${constants.TOTAL_WIDTH}px) {
    width: 100%;
    height: 100%;
  }

  .contentsWrapper {
    max-width: ${constants.LIMIT_WIDTH}px;
    max-height: ${constants.CONTACT_HEIGHT}px;
    margin: 0 auto;
    position: relative;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .imgContact {
      max-width: 100%;
      max-height: 100%;
  
      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        content: url(${contactImageMobile});
      }
    }

    .contentInnerWrapper {
      width: 100%;
      height: 65%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
  
      @media (max-width: ${constants.TOTAL_WIDTH}px) {
        width: 100%;
      }
  
      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        justify-content: center;
      }
    }

    .upperArea {
      .titleText {
        text-align: center;
        font-size: ${constants.MAIN_TITLE_SIZE}px;
        font-weight: 600;
        color: white;
  
        @media (max-width: ${constants.TOTAL_WIDTH}px) {
          font-size: ${constants.RESPONSIVE_MAIN_TITLE_SIZE};
        }
  
        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          display: none;
        }
      }
    }

    .centerArea {
      .subText {
        text-align: center;
        font-size: ${constants.MAIN_SUB_TITLE_SIZE}px;
        color: white;
  
        @media (max-width: ${constants.TOTAL_WIDTH}px) {
          font-size: ${constants.RESPONSIVE_MAIN_SUB_TITLE_SIZE};
        }
  
        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          display: none;
        }
      }
    }

    .lowerArea {
      width: 100%;
  
      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        display: flex;
        align-item: center;
      }

      .btn {
        margin: 0 auto;
        max-width: 200px;
        text-align: center;
        border: 1px solid ${constants.POINT_COLOR};
        padding: 10px 0;
        
        font-size: ${constants.MAIN_SUB_TITLE_SIZE}px;
        color: white;
        background-color: ${constants.POINT_COLOR};
        cursor: pointer;
  
        @media (max-width: ${constants.TOTAL_WIDTH}px) {
          width: 15%;
          font-size: ${constants.RESPONSIVE_MAIN_SUB_TITLE_SIZE};
        }
  
        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          width: 200px;
          font-size: ${constants.MAIN_SUB_TITLE_SIZE}px;
        }

        &:hover {
          background-color: ${oc.orange[5]};
          border: 1px solid ${oc.orange[5]};
        }
      }
    }
  }
`;


