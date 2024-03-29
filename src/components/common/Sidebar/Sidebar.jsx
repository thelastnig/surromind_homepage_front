import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import Close from '@material-ui/icons/Close';
import oc from 'open-color';

// import constants from constants.js
import * as constants from '../../../lib/constants';
// import images
import surroLogo from '../../../images/surromind_logo_new.png';

class Sidebar extends Component {

  handleMenuClick = (url) => {
    this.props.history.push(url);
    this.props.toggleSidebar();
  }

  render() {
    const { toggleSidebar } = this.props;
    return (
      <SidebarInnerWrapper>
      <div className="itemWrapper">
        <div className="leftItem">
          <div className="styledLink" onClick={() => this.handleMenuClick('/')}>
            <img className='ImgLogo' src={surroLogo} alt='SurroMind Logo'/>
          </div>
          <div className="btnClose">
            <Close fontSize="large" onClick={toggleSidebar}/>
          </div>
        </div>
        <div className="centerItem">
          <div className="barMenu">
            <div className="styledLink" 
              onClick={() => this.handleMenuClick('/surromindnews/list/1')}>Surromind News</div> 
          </div>
          <div className="barMenu">
            <div className="styledLink" onClick={() => this.handleMenuClick('/')}>Who we are</div> 
          </div>
          <div className="barMenu">
            <div className="styledLink" onClick={() => this.handleMenuClick('/rnd/list/1')}>R&D</div> 
          </div>
          <div className="barMenu">
            <div className="styledLink" onClick={() => this.handleMenuClick('/careers/list/1')}>Careers</div> 
          </div>
          <div className="barMenu">
            <div className="styledLink" onClick={() => this.handleMenuClick('/contact')}>Contact</div> 
          </div>
        </div>
      </div>
      </SidebarInnerWrapper>
    )
  }
}

export default withRouter(Sidebar);


const SidebarInnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${oc.gray[0]};

  .itemWrapper {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }

  .leftItem {
    width: 95%;
    margin: 0 auto;
    padding-top: 20px;
    margin-bottom: 20px;
    height: 20px;
    text-align: left;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    
    .ImgLogo {
      height: 20px;
      padding-top: 2px;
    }
  }

  .centerItem {
    width: 95%;
    margin: 0 auto;
    text-align: left;

    .barMenu {
      font-size: 22px;
      font-weight: 600;
      color: ${constants.POINT_COLOR};
      margin-bottom: 16px;
    }

    .styledLink {
      font-family: ${constants.INTER_FONT};
      font-size: 22px;
      font-weight: 600;
      color: ${constants.POINT_COLOR};
      text-decoration: none;

      &.contact {
        color: #1dc1bc;
        font-weight: 500;
      }

      &:hover {
        color: ${constants.POINT_COLOR};
      }
    }
  }

  .styledLink {
    color: black;
    cursor: pointer;
  }

`;