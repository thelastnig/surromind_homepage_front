import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import oc from 'open-color';
import Button from '@material-ui/core/Button';

// import constants from config.js
import * as constants from '../../../lib/constants';

// import images
import surroLogo from '../../../images/surromind_logo_new.png';
import iconGlobal from '../../../images/iconGlobal.png';

class Header extends Component {


  handleMenuClick = (url) => {
    this.props.history.push(url);
  }

  render() {
    const { 
      BaseActions,
      handleClickHome,
    } = this.props;
    return (
      <div>
        <HeaderWrapper>
          <div className="leftItem">
            <div className="styledLink" onClick={handleClickHome}>
              <img className='ImgLogo' src={surroLogo} alt='SurroMind Logo'/>
            </div>
          </div>
          <div className="centerItem">
            <div className="barMenu">
              <div className="styledLink" onClick={() => this.handleMenuClick('/surromindnews/list/1')}>Surromind News</div> 
            </div>
            <div className="barMenu">
              <div className="styledLink" onClick={() => this.handleMenuClick('/')}>Who we are</div> 
            </div>
            <div className="barMenu">
              <div className="styledLink" onClick={() => this.handleMenuClick('/rnd/list/1')}>R&D</div> 
            </div>
            <div className="barMenu">
              <div className="styledLink" onClick={() => this.handleMenuClick('/project/list/1')}>Project</div> 
            </div>
            <div className="barMenu">
              <div className="styledLink" onClick={() => this.handleMenuClick('/careers/list/1')}>Careers</div> 
            </div>
            <div className="barMenu">
              <div className="styledLink contact" onClick={() => this.handleMenuClick('/contact')}>Contact</div> 
            </div>
          </div>
          <div className="rightItem">
            <div className="rightIcon">
              <img src={iconGlobal} alt='Icon Global for language selection' height='16px'/>
            </div>
            <div className="rightText">
              KOR
            </div>
          </div>
        </HeaderWrapper>
      </div>
    )
  }
}

export default withRouter(Header);


const HeaderWrapper = styled.div`
  width: ${constants.TOTAL_WIDTH}px;
  height: ${constants.HEADER_HEIGHT}px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .leftItem {
    width: 20%;
    height: 20px;
    display: flex;
    align-items: center;

    .ImgLogo {
      height: 20px;
    }

    @media (max-width: 768px) {
      display: none;
    };
  }

  .centerItem {
    width: 60%;
    height: ${constants.HEADER_HEIGHT / 2}px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .barMenu {
      height: ${constants.HEADER_HEIGHT / 2}px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Roboto', Helvetica, sans-serif;
      font-size: 14px;
      font-weight: 500;
      color: ${oc.gray[8]};
      margin-left: 40px;
    }

    .styledLink {
      font-family: 'Roboto', Helvetica, sans-serif;
      font-size: 14px;
      color: ${oc.gray[8]}
      text-decoration: none;

      &.contact {
        color: #1dc1bc;
        font-weight: 500;
      }

      &:hover {
        color: ${constants.POINT_COLOR};
      }
    }

    @media (max-width: 768px) {
      display: none;
    };
  }

  .styledLink {
    color: black;
    cursor: pointer;
  }

  .rightItem {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .rightIcon {
      padding-top: 2px;
    }

    .rightText {
      margin-left: 10px;
      font-family: 'Roboto', Helvetica, sans-serif;
      font-size: 14px;
      font-weight: 400;
      color: ${oc.gray[8]};
    }

    @media (max-width: 768px) {
      width: 100%;
      padding: 0 15px;
      justify-content: space-between;
    };

    .iconMenuWrapper, .iconSearchWrapper, .buttonWrapper {
      margin-right: 16px;
    }

    .iconSearchWrapper {

      @media (max-width: 768px) {
        display: none;
      };
    }
    
    img {
      cursor: pointer;
    }

    .button {
      font-weight: 600;
    }

    .button + .button {
      margin-left: 15px;
    }
  }
`;