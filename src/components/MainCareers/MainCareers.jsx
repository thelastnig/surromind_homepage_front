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
  height: ${constants.MAIN_CAREERS_HEIGHT}px;
  margin: 0 auto;
    
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .contentsWrapper {
    width: ${constants.TOTAL_WIDTH}px;
    height: ${constants.MAIN_CAREERS_HEIGHT - 200}px;
    margin: 0 auto;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    .leftArea {
      width: 50%;
      height: 100%;
    
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .titleText {
        font-size: ${constants.MAIN_TITLE_SIZE}px;
        font-weight: 600;
      }
  
      .subText {
        font-size: ${constants.MAIN_SUB_TITLE_SIZE}px;
      }
    }

    .rightArea {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;

      .btn {
        width: 200px;
        text-align:center;
        border: 1px solid ${constants.POINT_COLOR};
        padding: 10px 0;
        
        font-size: ${constants.MAIN_SUB_TITLE_SIZE}px;
        color: ${constants.POINT_COLOR};
        cursor: pointer;

        &:hover {
          color: white;
          background-color: ${constants.POINT_COLOR};
        }
      }
    }
  }
`;

