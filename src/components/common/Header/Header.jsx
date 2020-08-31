import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import oc from 'open-color';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/icons/Menu';

// import constants from constants.js
import * as constants from '../../../lib/constants';

// import images
import surroLogo from '../../../images/surromind_logo_new.png';
import iconGlobal from '../../../images/iconGlobal.png';

import rndContents from '../../../lib/rnd';
import projectContents from '../../../lib/project';
import ProjectList from '../../ProjectList';

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
      <div>
        <HeaderInnerWrapper>
          <div className="itemWrapper">
            <div className="leftItem">
              <div className="styledLink" onClick={handleClickHome}>
                <img className='ImgLogo' src={surroLogo} alt='SurroMind Logo'/>
              </div>
            </div>
            <div className="centerItem">
              <div className="barMenu" 
                  onMouseOver={() => this.handleMouseOver("news")}
                  onMouseOut={this.handleMouseOut}>
                <div className="styledLink" 
                  onClick={() => this.handleMenuClick('/surromindnews/list/1')}>Surromind News</div> 
              </div>
              <div className="barMenu" 
                  onMouseOver={() => this.handleMouseOver("company")}
                  onMouseOut={this.handleMouseOut}>
                <div className="styledLink" onClick={() => this.handleMenuClick('/')}>Who we are</div> 
              </div>
              <div className="barMenu" 
                  onMouseOver={() => this.handleMouseOver("rnd")}
                  onMouseOut={this.handleMouseOut}>
                <div className="styledLink" onClick={() => this.handleMenuClick('/rnd/list/1')}>R&D</div> 
              </div>
              <div className="barMenu" 
                  onMouseOver={() => this.handleMouseOver("project")}
                  onMouseOut={this.handleMouseOut}>
                <div className="styledLink" onClick={() => this.handleMenuClick('/project/list/1')}>Project</div> 
              </div>
              <div className="barMenu"
              onMouseOver={() => this.handleMouseOver("careers")}
                  onMouseOut={this.handleMouseOut}>
                <div className="styledLink" onClick={() => this.handleMenuClick('/careers/list/1')}>Careers</div> 
              </div>
              <div className="barMenu"
              onMouseOver={() => this.handleMouseOver("contact")}
                  onMouseOut={this.handleMouseOut}>
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
              <div className="rightMenuIcon">
                <div className="rightMenuIconWrapper">
                  <Menu fontSize="large" onClick={toggleSidebar}/>
                </div>
              </div>
            </div>
          </div>
        </HeaderInnerWrapper>
        <SubHeadInnerWrapper isSubSectionVisible={isSubSectionVisible}
                              onMouseOver={() => this.handleMouseOver(menu)}
                              onMouseOut={this.handleMouseOut}>
          <div className="subItemWrapper">
            <div className="leftItem"></div>
            <div className="centerItem">
              <div className="centerLeftItem">
                {subMeunWrapper}
              </div>
              <div className="centerRightItem">
                {menu === 'rnd' ? rndLists: (menu === 'project' ? projectLists : subMenu)}
              </div>
            </div>
            <div className="rightItem"></div>
          </div>
        </SubHeadInnerWrapper>
      </div>
    )
  }
}

export default withRouter(Header);


const HeaderInnerWrapper = styled.div`
  width: 100%;

  .itemWrapper {
    width: ${constants.TOTAL_WIDTH}px;
    height: ${constants.HEADER_HEIGHT}px;
    margin: 0 auto;
    
    display: flex;
    justify-content: center;
    align-items: center;
  
    @media (max-width: ${constants.TOTAL_WIDTH}px) {
      width: 95%;
    }
  
    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 100%;
    }
  }

  .leftItem {
    width: 20%;
    height: 20px;
    display: flex;
    align-items: center;
  
    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 50%;
    }

    .ImgLogo {
      height: 20px;
      padding-top: 2px;
    }
  }

  .centerItem {
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: left;
  
    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      display: none;
    }

    .barMenu {
      height: 100%;
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: 500;
      color: ${oc.gray[8]};
    }

    .styledLink {
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

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      display: none;
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

  ${props => props.isSubSectionVisible && `
    display: block;
  `}

  ${props => !props.isSubSectionVisible && `
    display: none;
  `}

  .subItemWrapper {
    width: ${constants.TOTAL_WIDTH}px;
    height: ${constants.HEADER_HEIGHT * 2}px;
    margin: 0 auto;
    
    display: flex;
    justify-content: center;
    align-items: center;
  
    @media (max-width: ${constants.TOTAL_WIDTH}px) {
      width: 95%;
    };
  
    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      display: none;
    };
  }

  .leftItem {
    width: 20%;
  }

  .centerItem {
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
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
  
      @media (max-width: ${constants.TOTAL_WIDTH}px) {
        font-size: 1.5vw;
      };
    }
  }

  .centerRightItem {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .centerRightText {
      font-size: 14px;;
      color: ${constants.POINT_COLOR};
      font-weight: 500;
      text-align: center;
      margin-left: 30px;
      cursor: pointer;
      padding-bottom: 2px;
      &.kor {
        font-family: ${constants.NOTO_FONT};
      }

      &:hover {
        border-bottom: 1px solid ${constants.POINT_COLOR};
      }
  
      @media (max-width: ${constants.TOTAL_WIDTH}px) {
        font-size: 1.0vw;
      };
    }
  }

  .styledLink {
    color: black;
    cursor: pointer;
  }

  .rightItem {
    width: 20%;
  }
`;