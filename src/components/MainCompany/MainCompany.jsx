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
              더  많은 기업과 사람들이 문제를 해결하는 데 사용할 수 있도록<br/>
              쉽고 실용적인 <span>AI 솔루션</span>을 개발합니다.
            </div>
            <div className='subText'>
              Surromind는 고객의 요구에 따라 딥 러닝을 통해 실용적인 AI 솔루션을<br/> 
              개발하고 있습니다. 또한 사람들이 쉽게 사용할 수 있도록<br/> 
              자동화 된 AI 플랫폼을 개발합니다.
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
      font-family: ${constants.KOR_FONT};
      line-height: 1.5em;
      font-weight: 600;
      margin-top: 50px;
      margin-bottom: 45px;
  
      
      span {
        font-family: ${constants.KOR_FONT};
        color: ${constants.POINT_COLOR};
      }
    }

    .subText {
      font-family: ${constants.KOR_FONT};
      font-weight: 600;
      line-height: 1.5em;
      font-size: 18px;
    }
  }


`;

