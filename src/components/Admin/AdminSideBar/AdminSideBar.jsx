import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link, withRouter } from 'react-router-dom';

// import constants from constants.js
import * as constants from '../../../lib/constants';

// import images
import surroLogo from '../../../images/surromind_logo_new.png';

// import icon
import DescriptionIcon from '@material-ui/icons/Description'; // news
import MemoryIcon from '@material-ui/icons/Memory'; // R&D


class AdminSideBar extends Component {
  
  handleMenuClick = (url) => {
    this.props.history.push(url);
  }
  

  render() {
    return (
      <SiderBarWrapper>
        <div className='sidebarItem' onClick={() => this.handleMenuClick('/admin/main')}>
          <img className='imgLogo' src={surroLogo} width='130' alt='SurroMind Logo'/>
        </div>
        <div className='sidebarItem' onClick={() => this.handleMenuClick('/admin/news')}>
          <div className='iconWrapper'>
            <DescriptionIcon className='materialIcon'/>
          </div>
          <div className='itemText'>News</div>
        </div>
        <div className='sidebarItem' onClick={() => this.handleMenuClick('/admin/rnd')}>
          <div className='iconWrapper'>
            <MemoryIcon className='materialIcon'/>
          </div>
          <div className='itemText'>R&#38;D</div>
        </div>
      </SiderBarWrapper>
    );
  }
}

export default withRouter(AdminSideBar);

const SiderBarWrapper = styled.div`
  width: ${constants.ADMIN_SIDEBAR_WIDTH}px;

  .sidebarItem {
    width: ${constants.ADMIN_SIDEBAR_WIDTH - 50}px;
    height: ${constants.ADMIN_SIDEBAR_ITEM_HEIGHT}px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid ${oc.gray[6]};
    cursor: pointer;
  }

  .iconWrapper {
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .itemText {
    flex-grow: 1;
    font-family: ${constants.APPLE_FONT};
    color: ${constants.ADMIN_CONTENT_COLOR};
    &:hover {
      color: ${constants.POINT_COLOR};
    }
  }

  .materialIcon {
    color: ${constants.ADMIN_CONTENT_COLOR};
  }


`;





