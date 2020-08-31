import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import HeaderContainer from './containers/common/HeaderContainer';
import FooterContainer from './containers/common/FooterContainer';
import ContactComponentContainer from './containers/common/ContactComponentContainer';
import Root from './components/Root';
import styled, { css, keyframes } from 'styled-components';
import oc from 'open-color';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import constants from constants.js
import * as constants from './lib/constants';

// import sidebar
import Sidebar from './components/common/Sidebar';

class App extends Component {
  state = {
    isScrolled: false,
    isSidebarOpen: false,
    clickNum: 0,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll);
  }
  
  listenToScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop

    const isScrolled = winScroll > 45 ? true : false;
    
    this.setState({
      isScrolled: isScrolled
    });
  }

  toggleSidebar = () => {
    const { isSidebarOpen, clickNum } = this.state;

    if (isSidebarOpen) {
      document.body.style.overflow = 'unset';
    } else {
      document.body.style.overflow = 'hidden';
    }

    this.setState({
      isSidebarOpen: !isSidebarOpen,
      clickNum: clickNum + 1,
    });
  }

  render() {
    const { isScrolled, isSidebarOpen, clickNum } = this.state;
    return (
      <BrowserRouter>
        <SidebarWapper isSidebarOpen={isSidebarOpen} clickNum={clickNum}>
          <Sidebar toggleSidebar={this.toggleSidebar}/>
        </SidebarWapper>
        <OuterWrapper>
          <div className="addLayer">
            <InnerWrapper>
              <HeaderWrapper isScrolled={isScrolled}>
                <div className='limitWrapper'><HeaderContainer toggleSidebar={this.toggleSidebar}/></div>
              </HeaderWrapper> 
              <RootWrapper>
                <div className='limitWrapper'><Root/></div>
              </RootWrapper>
              <ContactWrapper>
                <div className='limitWrapper'><ContactComponentContainer/></div>
              </ContactWrapper>
              <FooterWrapper>
                <div className='limitWrapper'><FooterContainer/></div>
              </FooterWrapper>
            </InnerWrapper>
          </div>
        </OuterWrapper>
      </BrowserRouter>
    );
  }
}

// export default connect(
//   (state) => ({
//     newLoggedInfo: state.user.get('loggedInfo').toJS(),
//     isSaveActive: state.base.getIn(['saveNotification', 'isActive']),
//   }),
//   (dispatch) => ({
//     UserActions: bindActionCreators(userActions, dispatch),
//     SettingActions: bindActionCreators(settingActions, dispatch),
//   })
// )(App);
export default App;

const slideInDownAnimation = keyframes`
  0% {
    top: -${constants.HEADER_HEIGHT}px;
  }
  100% { 
    top: 0;
  }
`;

const sidebarIn = keyframes`
  0% {
    left: -100vw;
  }
  100% { 
    left: 0;
  }
`;

const sidebarOut = keyframes`
  0% {
    left: 0;
  }
  100% { 
    left: -100vw;
  }
`;

const OuterWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;

  .addLayer {
  }
`;

const SidebarWapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: -100vw;
  z-index: 150;
  
  ${props => {
    if (props.isSidebarOpen) {
        return css `
          animation: 0.5s ${sidebarIn} forwards
        `;
    }
  }}
  
  ${props => {
    if (!props.isSidebarOpen && props.clickNum > 0) {
        return css `
          animation: 0.5s ${sidebarOut} forwards
        `;
    }
  }}
`;

const InnerWrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  .limitWrapper {
    width: 100%;
    margin: 0 auto;
  }
`;

const HeaderWrapper = styled.div`

  width: 100%;
  height: ${constants.HEADER_HEIGHT}px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 3px 5px rgba(200, 200, 200, 0.7);
  
  @media (max-width: ${constants.MOBILE_WIDTH}px) {
    position: relative;
    box-shadow: none;
  }
  
  ${props => {
    if (props.isScrolled) {
        return css `
          background: rgba(255, 255, 255, 0.9);
          animation: 1s ${slideInDownAnimation} forwards
        `;
    }
  }}
`;

const RootWrapper = styled.div`
  width: 100%;
  margin-top: ${constants.HEADER_HEIGHT}px;
  ${props => props.isScrolled && `
    margin-top: 0;
  `}
  ${props => !props.isScrolled && `
    margin-top: ${constants.HEADER_HEIGHT}px; 
  `}
`;

const ContactWrapper = styled.div`
  width: 100%;
`;

const FooterWrapper = styled.div`
  width: 100%;
  height: ${constants.FOOTER_HEIGHT}px;
`;
