import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link, withRouter } from 'react-router-dom';

// import constants from constants.js
import * as constants from '../../lib/constants'

class MainCareers extends Component {
  
  handleMoreClick = () => {
    this.props.history.push('/careers/list/1');
  }

  render() {
  
    return (
      <Wrapper>
        <div className='contentsWrapper'>
          <div className='leftArea'>
            <div className='titleText'>Careers</div>
            <div className='subText'>Creating value in the world with technology.</div>
          </div>
          <div className='rightArea'>
            <div className='btn' onClick={this.handleMoreClick}>
              Careers
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default withRouter(MainCareers);

const Wrapper = styled.div`
  width: 100%;
  padding: 100px 0;
  margin: 0 auto;
    
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  .contentsWrapper {
    width: ${constants.TOTAL_WIDTH}px;
    max-height: ${constants.MAIN_CAREERS_HEIGHT - 200}px;
    margin: 0 auto;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
  
    @media (max-width: ${constants.TOTAL_WIDTH}px) {
      width: 95%;
      height: 100%;
    }
  
    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      flex-direction: column;
    }

    .leftArea {
      width: 50%;
      height: 100%;
    
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  
      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        width: 100%;
      }

      .titleText {
        font-size: ${constants.MAIN_TITLE_SIZE}px;
        font-weight: 600;
        margin-bottom: 30px;
  
        @media (max-width: ${constants.TOTAL_WIDTH}px) {
          font-size: ${constants.RESPONSIVE_MAIN_TITLE_SIZE};
        }
  
        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          text-align: center;
          margin-bottom: 10px;
          font-size: ${constants.RESPONSIVE_MAIN_TITLE_SIZE_MOBILE_LARGE}px;
        }
      }
  
      .subText {
        font-size: ${constants.MAIN_SUB_TITLE_SIZE}px;
  
        @media (max-width: ${constants.TOTAL_WIDTH}px) {
          font-size: ${constants.RESPONSIVE_MAIN_SUB_TITLE_SIZE};
        }
  
        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          text-align: center;
          font-size: 3.8vw;
        }
      }
    }

    .rightArea {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
  
      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        width: 100%;
        align-items: center;
        margin-top: 20px;
      }

      .btn {
        width: 200px;
        text-align: center;
        border: 1px solid ${constants.POINT_COLOR};
        padding: 10px 0;
        
        font-size: ${constants.MAIN_SUB_TITLE_SIZE}px;
        color: ${constants.POINT_COLOR};
        cursor: pointer;
  
        @media (max-width: ${constants.TOTAL_WIDTH}px) {
          width: 25%;
          font-size: ${constants.RESPONSIVE_MAIN_SUB_TITLE_SIZE};
        }
  
        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          width: 200px;
          font-size: ${constants.MAIN_SUB_TITLE_SIZE}px;
        }

        &:hover {
          color: white;
          background-color: ${constants.POINT_COLOR};
        }
      }
    }
  }
`;

