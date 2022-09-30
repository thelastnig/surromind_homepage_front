import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import oc from 'open-color';

// import constants from constants.js
import * as constants from '../../../lib/constants';

// import images
import surroLogo from '../../../images/surromind_logo_new.png';

import MenuIcon from '@material-ui/icons/Menu';

class Header extends Component {

  state = {
    isSubSectionVisible: false,
    menu: null,
  }

  handleMenuClick = (url) => {
    this.props.history.push(url);
  }

  handleCompanyClick = () => {
    // window.scrollTo({top: this.mainCompanySection - 100, behavior:'smooth'});
  }

  handleMouseOver = (menu) => {
    this.setState({
      menu: menu,
      isSubSectionVisible: true,
    })
  }

  handleMouseOut = () => {
    this.setState({
      isSubSectionVisible: false,
    })
  }

  render() {
    const { isSubSectionVisible, menu } = this.state;
    const { 
      BaseActions,
      handleClickHome,
      toggleSidebar
    } = this.props;

    let subMenuInfo = [];
    if (menu === 'solution') {
      subMenuInfo = [
        {
          name: 'SURROVISION™ Inspection',
          url: '/solution/inspection'
        },
        {
          name: 'SURROMIND™ PHM​',
          url: '/solution/phm'
        },
      ]
    } 

    const subMeunWrapper = subMenuInfo.map((subMenu, index) => {
      return <div className="subMenu" key={index} onClick={() => this.handleMenuClick(subMenu.url)}>{subMenu.name}</div>
    })
    return (
      <HeaderWrapper>
        <HeaderInnerWrapper>
          <div className="upperHeaderInnerWrapper">
            <div className="itemWrapper">
              <div className="centerItem">
                <div className="leftItem">
                  <div className="styledLink" onClick={handleClickHome}>
                    <img className='ImgLogo' src={surroLogo} height='24' alt='SurroMind Logo'/>
                  </div>
                </div>
                <div className='barMenuWrapper'>
                  <div className="barMenu" 
                      // onMouseOver={() => this.handleMouseOver("news")}
                      // onMouseOut={this.handleMouseOut}
                  >
                    <div className="styledLink" 
                      onClick={() => this.handleMenuClick('/company/aboutus')}>About us</div> 
                  </div>
                  <div className="barMenu" 
                      // onMouseOver={() => this.handleMouseOver("company")}
                      // onMouseOut={this.handleMouseOut}
                  >
                    <div className="styledLink" onClick={() => this.handleMenuClick('/platform')}>Platform</div> 
                  </div>
                  <div className="barMenu" 
                      onMouseOver={() => this.handleMouseOver("solution")}
                      onMouseOut={this.handleMouseOut}
                  >
                    <div className="styledLink">Solutions</div> 
                  </div>
                  <div className="barMenu" 
                      // onMouseOver={() => this.handleMouseOver("solution")}
                      // onMouseOut={this.handleMouseOut}
                  >
                    <div className="styledLink" onClick={() => this.handleMenuClick('/rnd/list/1')}>R&#38;D</div> 
                  </div>
                  <div className="barMenu"
                      // onMouseOver={() => this.handleMouseOver("careers")}
                      // onMouseOut={this.handleMouseOut}
                  >
                    <div className="styledLink" onClick={() => this.handleMenuClick('/careers/list/1')}>Careers</div> 
                  </div>
                  <div className="barMenu last"
                      // onMouseOver={() => this.handleMouseOver("contact")}
                      // onMouseOut={this.handleMouseOut}
                  >
                    <div className="styledLink contact" onClick={() => this.handleMenuClick('/contact')}>Contact us</div> 
                  </div>
                </div>
              </div>
              <div className="centerItemMobile">
                <div className="centerItemMobileWrapper">
                  <div className="leftItem">
                    <div className="styledLink" onClick={handleClickHome}>
                      <img className='ImgLogo' src={surroLogo} width='123' alt='SurroMind Logo'/>
                    </div>
                  </div>              
                  <div className="rightItem" onClick={toggleSidebar}>
                    <MenuIcon className="menuIcon"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HeaderInnerWrapper>
        <SubHeadInnerWrapper isSubSectionVisible={isSubSectionVisible}
                              onMouseOver={() => this.handleMouseOver(menu)}
                              onMouseOut={this.handleMouseOut}>
          <div className="lowerHeaderInnerWrapper">
            <div className="subItemWrapper">
                {subMeunWrapper}
            </div>
          </div>
        </SubHeadInnerWrapper>
      </HeaderWrapper>
    )
  }
}

export default withRouter(Header);

const HeaderWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`

const HeaderInnerWrapper = styled.div`
  width: 100%;
  background-color: #070304;

  .upperHeaderInnerWrapper {
    width: ${constants.LIMIT_WIDTH}px;
    margin: 0 auto;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 100%;
    } 
  }

  .itemWrapper {
    width: calc(${constants.LIMIT_WIDTH}px - 280px);
    height: ${constants.HEADER_HEIGHT}px;
    margin: 0 auto;      
    
    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 100%;
    }
  }

  .centerItem {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    .leftItem {
      height: 24px;
      .ImgLogo {
      }
    }

    .barMenuWrapper {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    .barMenu {
      height: ${constants.HEADER_HEIGHT}px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 90px;
      &.last {
        margin-right: 0px;
      }
    }

    .styledLink {
      font-family: ${constants.INTER_FONT};
      font-size: 21px;
      font-weight: 700;
      font-stretch: normal;
      line-height: 25.41px;
      letter-spacing: -0.3px;
      text-decoration: none;
      
      color: #ffffff;

      &:hover {
        color: #FF5000;
      }
    }

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      display: none;
    }
  }

  .centerItemMobile {
    width: 100%;
    height: 100%;
    display: none;
    
    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      display: block;
    }
    
    @media (min-width: ${constants.MOBILE_WIDTH}px) {
      display: none;
    }

    .centerItemMobileWrapper {
      width: calc(100% - ${constants.MOBILE_HORIZONTAL_MARGIN}px);
      height: ${constants.HEADER_HEIGHT}px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  
    .leftItem {
      width: 123px;
      height: 22px;
      .ImgLogo {
        padding-top: 4px;
      }
    }
  
    .rightItem {
      cursor: pointer;
      .menuIcon {
        color: white;
        font-size: 24px;
      }
    }
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
  
    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 50%;
    }

    .rightIcon {
      padding-top: 2px;
  
      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        display: none;
      }
    }

    .rightText {
      margin-left: 10px;
      font-size: 14px;
      font-weight: 400;
      color: ${oc.gray[8]};
  
      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        display: none;
      }
    }

    .rightMenuIcon {
      display: none;
  
      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        display: block;
      }

      .rightMenuIconWrapper {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
      }
    }
  }
`;

const SubHeadInnerWrapper = styled.div`
  display: none;
  width: ${constants.LIMIT_WIDTH}px;
  margin: 0 auto;

  .lowerHeaderInnerWrapper {
    width: 250px;
    height: 100px;
    background: white;
    margin-left: 1185px;
    box-shadow: 3px 5px 5px 0 rgba(0, 0, 0, 0.03);
  }

  ${props => props.isSubSectionVisible && `
    display: block;
  `}

  ${props => !props.isSubSectionVisible && `
    display: none;
  `}

  .subItemWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .subMenu {
    margin-left: 20px;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
    
    font-family: ${constants.INTER_FONT};
    font-size: 14px;
    font-stretch: normal;
    text-decoration: none;
    
    color: #070304;

    &:hover {
      color: #FF5000;
    }
  }

  .styledLink {
    color: black;
    cursor: pointer;
  }

`;