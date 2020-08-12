import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import oc from 'open-color';
import Button from '@material-ui/core/Button';

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
            <div className="styledLink" onClick={handleClickHome}>HOME</div>
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
              <div className="styledLink" onClick={() => this.handleMenuClick('/contact')}>Contact</div> 
            </div>
          </div>
          <div className="centerItem">
            
          </div>
          <div className="rightItem">
            <div className="iconSearchWrapper">
            </div>
            <div className="iconMenuWrapper">
            </div>
          </div>
        </HeaderWrapper>
      </div>
    )
  }
}

export default withRouter(Header);


const HeaderWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .leftItem {
    padding: 0 50px;
    display: flex;
    align-items: center;
    width: 700px;
    justify-content: space-between;
    border: 1px solid black;

    @media (max-width: 768px) {
      display: none;
    };

    .barMenu {
      text-align: center;
      font-size: 14px;
      letter-spacing: 1px;
      font-weight: 600;
    }

    .styledLink {
      color: ${oc.violet[9]};
      text-decoration: none;

      &:hover {
        text-decoration: underline;

      }
    }
  }

  .centerItem {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
      display: none;
    };
  }

  .styledLink {
    color: black;
    cursor: pointer;
  }

  .rightItem {
    padding: 0 50px;
    display: flex;
    align-items: center;
    justify-content: center;

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