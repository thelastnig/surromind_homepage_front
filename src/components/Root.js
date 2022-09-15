import React, { useEffect } from 'react';
import { Switch, Route, Router, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { MainPage, CompanyInfoPage, NewsListPage, NewsViewPage, ProjectListPage, ProjectViewPage, RNDListPage, RNDViewPage, PlatformPage, InspectionPage, PHMPage,
  CareersListPage, CareersViewPage, ContactPage, VoucherPage, AIStudioEventPage, Voucher2022Page, DataVoucher2022Page, SmartTechKorea2022Page, NextRise2022Page,
  AdminPage, AdminNewsPage, AdminNewsListPage, AdminNewsViewPage, AdminBannerPage, AdminLoginPage, NotFoundPage } from '../pages';
import styled from 'styled-components';

// import constants from constants.js
import * as constants from '../lib/constants';

// GA setting
import ReactGA from 'react-ga';
ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
const browserHistory = createBrowserHistory({
  forceRefresh: true
});
browserHistory.listen((location, action) => {
  ReactGA.pageview(location.pathname + location.search);
  console.log(location.pathname + location.search);
});

const Root = (props) => {
  const isLogin = (localStorage.getItem("isSMRAdminLogin") === null || localStorage.getItem("isSMRAdminLogin") === false) ? false : true;

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    // if (window.location.pathname !== null && window.location.pathname !== '') {
    //   if (window.location.pathname.split('/')[1] === 'admin') {
    //     props.setIsAdmin(true);
    //   } else {
    //     props.setIsAdmin(false);
    //     if (window.location.pathname.split('/')[1] === 'contact') {
    //       props.setIsContactInvisible(false);
    //     } else {
    //       props.setIsContactInvisible(true);
    //     }
    //   } 
    // } else {
    //   props.setIsAdmin(false);
    // }
  }, [window.location.pathname])

  return (
    <RootWrapper>
        <div className="innerWrapper">
            <Switch>
              {/* <Route exact path="/" component={MainPage} history={browserHistory} {...props}/> */}
              <Route exact path="/" render={() => <MainPage {...props} history={browserHistory}/>}/>
              <Route exact path="/company/aboutus" component={CompanyInfoPage} history={browserHistory}/>
              <Route exact path="/platform" component={PlatformPage} history={browserHistory}/>
              <Route exact path="/solution/inspection" component={InspectionPage} history={browserHistory}/>
              <Route exact path="/solution/phm" component={PHMPage} history={browserHistory}/>
              <Route exact path="/project/list/:page" component={ProjectListPage} history={browserHistory}/>
              <Route exact path="/project/content/:projectID" component={ProjectViewPage} history={browserHistory}/>
              <Route exact path="/rnd/list/:page" component={RNDListPage} history={browserHistory}/>
              <Route exact path="/rnd/content/:rndID" component={RNDViewPage} history={browserHistory}/>
              <Route exact path="/careers/content/:careerID" component={CareersViewPage} history={browserHistory}/>
              <Route exact path="/careers/list/:page" component={CareersListPage} history={browserHistory}/>
              <Route exact path="/company/voucher" component={VoucherPage} history={browserHistory}/>
              <Route exact path="/aivoucher2022" component={Voucher2022Page} history={browserHistory}/>
              <Route exact path="/datavoucher2022" component={DataVoucher2022Page} history={browserHistory}/>
              <Route exact path="/exhibition/2022_02" component={SmartTechKorea2022Page} history={browserHistory}/>
              <Route exact path="/exhibition/2022_03" component={NextRise2022Page} history={browserHistory}/>
              <Route exact path="/admin" component={AdminLoginPage} history={browserHistory}/>
              {/* <Route exact path="/aistudioevent" component={MainPage} history={browserHistory}/> */}
              {/* <Route exact path="/event01" component={AIStudioEventPage} /> */}
              <Route path="/contact" component={ContactPage} history={browserHistory}/>
              {
              isLogin
              ?
              <>
                <Route exact path="/admin/main" component={AdminPage} history={browserHistory}/>
                <Route exact path="/admin/news/list/:page" component={AdminNewsListPage} history={browserHistory}/>
                <Route exact path="/admin/news/add" component={AdminNewsPage} history={browserHistory}/>
                <Route exact path="/admin/news/edit/:articleID" component={AdminNewsPage} history={browserHistory}/>
                <Route exact path="/admin/news/article/:articleID" component={AdminNewsViewPage} history={browserHistory}/>
                <Route exact path="/admin/banner" component={AdminBannerPage} history={browserHistory}/>
              </>
              :
              null
              }
              <Route component={NotFoundPage}/>
              
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

