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

class App extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <BrowserRouter>
        <OuterWrapper>
          <InnerWrapper>
            <HeaderWrapper>
              <div className='limitWrapper'><HeaderContainer/></div>
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
export default App


const OuterWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const InnerWrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  .limitWrapper {
    width: ${constants.LIMIT_WIDTH}px;
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
  background: white;
  box-shadow: 0 3px 5px rgba(200, 200, 200, 0.7);
`;

const RootWrapper = styled.div`
  width: 100%;
  margin-top: ${constants.HEADER_HEIGHT}px;
`;

const ContactWrapper = styled.div`
  width: 100%;
`;

const FooterWrapper = styled.div`
  width: 100%;
  height: ${constants.FOOTER_HEIGHT}px;
`;
