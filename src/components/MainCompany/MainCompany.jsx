import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// import constants from config.js
import * as constants from '../../lib/constants';

import companyImg from '../../images/company.png';

class MainCompany extends Component {
  render() {
  
    return (
      <Wrapper>
        <div className='contentsWrapper' ref={(ref) => {this.mainCompanySection=ref}}>
          <div className='leftArea'></div>
          <div className='rightArea'>
            <div className='titleText'>Who We Are?</div>
            <div className='mainText'>
              We develop easy and practical <span>AI solutions</span><br/>
              for more people to use them with to solve<br/> 
              their own business issues.
            </div>
            <div className='subText'>
              Surromind is deveopling the practical AI solutions<br/> 
              with deep learning according to customer's requirement.<br/>
              It also develop automated AI platform for people to use with easy. 
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default MainCompany;

const Wrapper = styled.div`
  width: 100%;
  height: ${constants.MAIN_COMPANY_HEIGHT}px;
  margin: 0 auto;

  .contentsWrapper {
    width: ${constants.TOTAL_WIDTH}px;
    height: ${constants.MAIN_COMPANY_HEIGHT}px;
    margin: 0 auto;
    background-image: url(${companyImg});
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .leftArea {
    width: 55%;

  }

  .rightArea {
    width: 45%;
    color: #003d4c;

    .titleText {
      font-size: ${constants.MAIN_TITLE_SIZE}px;
      font-weight: 600;
    }

    .mainText {
      font-size: 22px;
      margin-top: 50px;
      margin-bottom: 45px;
      
      span {
        color: ${constants.POINT_COLOR};
      }
    }

    .subText {
      font-size: 18px;
    }
  }


`;

