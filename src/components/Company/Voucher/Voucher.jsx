import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link, withRouter } from 'react-router-dom';

// import constants from constants.js
import * as constants from '../../../lib/constants'

// import image
import voucherContents from '../../../images/voucherContents.jpg'

const nicaUrl = "https://www.nipa.kr/main/selectBbsNttView.do?key=122&bbsNo=2&nttNo=1667&bbsTy=biz&searchCtgry=&pageUnit=10&searchCnd=SJ&searchKrwd=%EB%B0%94%EC%9A%B0%EC%B2%98&pageIndex=1"

class Voucher extends Component {
  
  handleClick = (url) => {
    this.props.history.push(url);
  }    

  render() {
  
    return (
      <Wrapper>
        <div className='contentsWrapper'>
          <div className='backgroundImageWrapper'>
            <img src={voucherContents} alt={voucherContents} className="voucherContents"/>
            <div className='btnWrapper' >
              <a href={nicaUrl}>
                <div className='btnDetail'>
                  <div className='btnText'>상세내용 보기</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default withRouter(Voucher);

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  
  .contentsWrapper {
    width: ${constants.LIMIT_WIDTH}px;
    margin: 0 auto;
  
    @media (max-width: ${constants.LIMIT_WIDTH}px) {
      width: 100%;
      height: 100%;
    }
  }

  .backgroundImageWrapper {
    position: relative;

    a {
      text-decoration:none;
    }


    .voucherContents {
      width: ${constants.LIMIT_WIDTH}px;
      height: 100%;
      margin: 0 auto;
      display: block;
  
      @media (max-width: ${constants.TOTAL_WIDTH}px) {
        width: 100%;
        height: 100%;
      }
    }

    .btnWrapper {
      position: absolute;
      left: 559px;
      top: 1225px;

    }

    .btnDetail {  
      width: 180px;
      height: 52px;
      border-radius: 29px;
      border: solid 1px #000000;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      color: #000000;
      font-size: 20px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: -0.14px;

      &:hover {  
        border: solid 1px #ED7100;
        color: #ED7100;
      }
    }

  }


`;

