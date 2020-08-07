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

// import constants from config.js
import * as constants from './lib/constants';

class App extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <BrowserRouter>
        <OuterWrapper>
          <HeaderWrapper>
            <HeaderContainer/>
          </HeaderWrapper> 
          <RootWrapper>
            <Root/>
          </RootWrapper>
          <ContactWrapper>
            <ContactComponentContainer/>
          </ContactWrapper>
          <FooterWrapper>
            <FooterContainer/>
          </FooterWrapper>
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

const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100px;
  top:0;
  left: 0;
  z-index: 100;

  border: 1px solid green;
  background: white;
`;

const RootWrapper = styled.div`
  width: 100%;
  margin-top: 100px;

  border: 1px solid red;
`;

const ContactWrapper = styled.div`
  width: 100%;
  border: 1px blue solid;
`;

const FooterWrapper = styled.div`
  width: 100%;
  height: ${constants.FOOTER_HEIGHT}px;

  border: 1px black solid;
`;
