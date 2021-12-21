import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link, withRouter } from 'react-router-dom';

// import constants from constants.js
import * as constants from '../../../lib/constants'

// import image
import voucherContents from '../../../images/voucher2022.png'
import voucherContentsMobile from '../../../images/mobile/voucher2022_mobile.png'


class Voucher2022 extends Component {
  
  handleClick = (url) => {
    this.props.history.push(url);
  }    

  render() {
  
    return (
      <Wrapper>
        <div className='contentsWrapper'>
          <div className='backgroundImageWrapper'>
            <img src={voucherContents} alt={voucherContents} className="voucherContents"/>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default withRouter(Voucher2022);

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

    .voucherContents {
      width: ${constants.LIMIT_WIDTH}px;
      height: 100%;
      margin: 0 auto;
      display: block;
  
      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        width: 100%;
        height: 100%;
        content: url(${voucherContentsMobile})
      }
    }
  }
`;

