import React, { useEffect } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { MainPage, NewsListPage, NewsViewPage, ProjectListPage, ProjectViewPage, RNDListPage, RNDViewPage, 
  CareersListPage, CareersViewPage, ContactPage, VoucherPage, AdminPage, AIStudioEventPage } from '../pages';
import styled from 'styled-components';

// import constants from constants.js
import * as constants from '../lib/constants';

// GA setting
import ReactGA from 'react-ga';
ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
const browserHistory = createBrowserHistory()
browserHistory.listen((location, action) => {
  ReactGA.pageview(location.pathname + location.search);
  console.log(location.pathname + location.search);
});

const Root = (props) => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    if (window.location.pathname !== null && window.location.pathname !== '') {
      if (window.location.pathname.split('/')[1] === 'admin') {
        props.setIsAdmin(true);
      } else {
        props.setIsAdmin(false);
        if (window.location.pathname.split('/')[1] === 'aistudioevent') {
          props.setIsContactInvisible(true);
        } else {
          props.setIsContactInvisible(false);
        }
      } 
    } else {
      props.setIsAdmin(false);
    }
  }, [window.location.pathname])

  return (
    <RootWrapper>
        <div className="innerWrapper">
            <Switch>
              <Route exact path="/" component={MainPage} history={browserHistory}/>
              <Route exact path="/surromindnews/list/:page" component={NewsListPage} history={browserHistory}/>
              <Route exact path="/surromindnews/article/:articleID" component={NewsViewPage} history={browserHistory}/>
              <Route exact path="/project/list/:page" component={ProjectListPage} history={browserHistory}/>
              <Route exact path="/project/content/:projectID" component={ProjectViewPage} history={browserHistory}/>
              <Route exact path="/rnd/list/:page" component={RNDListPage} history={browserHistory}/>
              <Route exact path="/rnd/content/:rndID" component={RNDViewPage} history={browserHistory}/>
              <Route exact path="/careers/content/:careerID" component={CareersViewPage} history={browserHistory}/>
              <Route exact path="/careers/list/:page" component={CareersListPage} history={browserHistory}/>
              <Route exact path="/company/voucher" component={VoucherPage} history={browserHistory}/>
              <Route exact path="/admin/:page" component={AdminPage} />
              <Route exact path="/aistudioevent" component={MainPage} history={browserHistory}/>
              <Route path="/contact" component={ContactPage} history={browserHistory}/>
            </Switch>
        </div>
    </RootWrapper>
  );
  
}

export default Root;

const RootWrapper = styled.div`
  width: 100%;

  .innerWrapper {
    min-height: auto;
    width: 100%;
    margin: 0 auto;
    
    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 100%;
      min-height: auto;
    }
  }
`

