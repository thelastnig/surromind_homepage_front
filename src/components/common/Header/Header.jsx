import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import oc from 'open-color';

// import constants from constants.js
import * as constants from '../../../lib/constants';

// import images
import surroLogo from '../../../images/surromind_logo_new.png';

import rndContents from '../../../lib/rnd';
import projectContents from '../../../lib/project';
import ProjectList from '../../ProjectList';

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

    let MenuName = "";
    let SubUrl = "";
    let subMenuName = "";
    if (menu === 'news') {
      MenuName = "News";
      SubUrl = "/surromindnews/list/1";
      subMenuName = "Surromind News"
    } else if (menu === 'company') {
      MenuName = "Who we are";
      SubUrl = "";
      subMenuName = "Who we are";
    } else if (menu === 'rnd') {
      MenuName = "R&D";
      SubUrl = "/rnd/list/1";
    } else if (menu === 'project') {
      MenuName = "Project";
      SubUrl = "/project/list/1";
    } else if (menu === 'careers') {
      MenuName = "Careers";
      SubUrl = "/careers/list/1";
      subMenuName = "Careers";
    } else if (menu === 'contact') {
      MenuName = "Contact";
      SubUrl = "/contact";
      subMenuName = "Contact";
    } 

    const subMeunWrapper = <div className="centerLeftText" onClick={() => this.handleMenuClick(SubUrl)}>{MenuName}</div>
    const subMenu = <div className="centerRightText" onClick={() => this.handleMenuClick(SubUrl)}>{subMenuName}</div>

    const rndLists = rndContents.map((item, index) => {
      return (
        <div className="centerRightText" key={index} onClick={() => this.handleMenuClick(item.url)}>{item.titleS}</div>
      )
    })

    const projectLists = projectContents.map((item, index) => {
      return (
        <div className="centerRightText kor" key={index} onClick={() => this.handleMenuClick(item.url)}>{item.titleS}</div>
      )
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
                    <div className="styledLink" onClick={() => this.handleMenuClick('/Platform')}>Platform</div> 
                  </div>
                  <div className="barMenu" 
                      // onMouseOver={() => this.handleMouseOver("company")}
                      // onMouseOut={this.handleMouseOut}
                  >
                    <div className="styledLink" onClick={() => this.handleMenuClick('/')}>Solutions</div> 
                  </div>
                  <div className="barMenu" 
                      // onMouseOver={() => this.handleMouseOver("rnd")}
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
              {/* <div className="leftItem"></div> */}
              <div className={"centerItem " + menu}>
                <div className="centerLeftItem">
                  {subMeunWrapper}
                </div>
                <div className="centerRightItem">
                  {menu === 'rnd' ? rndLists: (menu === 'project' ? projectLists : subMenu)}
                </div>
              </div>
              <div className="rightItem"></div>
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
  width: 100%;

  background: rgba(247, 247, 247, 1);

  .lowerHeaderInnerWrapper {
    width: ${constants.LIMIT_WIDTH}px;
    margin: 0 auto;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 100%;
    } 
  }

  ${props => props.isSubSectionVisible && `
    display: block;
  `}

  ${props => !props.isSubSectionVisible && `
    display: none;
  `}

  .subItemWrapper {
    width: 2000px;
    height: ${constants.HEADER_HEIGHT * 2}px;
    margin: 0 auto;
    
    display: flex;
    justify-content: center;
    align-items: center;
  
    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      display: none;
    };
  }

  .centerItem {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &.news {
      margin-left: 452px;
    }

    &.company {
      margin-left: 788px;
    }

    &.rnd {
      margin-left: 942px;
    }

    &.careers {
      margin-left: 1144px;
    }

    &.contact {
      margin-left: 1346px;
    }
  }

  .centerLeftItem {
    width: 20%;

    .centerLeftText {
      font-size: 20px;
      font-weight: 500;
      color: ${constants.POINT_COLOR};
      padding: 0px 15px;
      text-align: right;
      border-right: 2px solid ${constants.POINT_COLOR};
      cursor: pointer;
    }
  }

  .centerRightItem {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .centerRightText {
      font-size: 13px;;
      color: ${constants.POINT_COLOR};
      font-weight: 500;
      text-align: center;
      margin-left: 30px;
      cursor: pointer;
      padding-bottom: 2px;
      font-family: ${constants.APPLE_FONT};

      &:hover {
        border-bottom: 1px solid ${constants.POINT_COLOR};
      }
    }
  }

  .styledLink {
    color: black;
    cursor: pointer;
  }

`;