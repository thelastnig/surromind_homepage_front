import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainPage, NewsListPage, NewsViewPage, ProjectListPage, ProjectViewPage, RNDListPage, RNDViewPage, 
  CareersListPage, CareersViewPage, ContactPage } from '../pages';
import styled from 'styled-components';

const Root = () => {
  return (
    <Wrapper>
        <div className="innerWrapper">
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/surromindnews/list/:page" component={NewsListPage} />
            <Route exact path="/surromindnews/article/:articleID" component={NewsViewPage} />
            <Route exact path="/project/list/:page" component={ProjectListPage} />
            <Route exact path="/project/content/:projectID" component={ProjectViewPage} />
            <Route exact path="/rnd/list/:page" component={RNDListPage} />
            <Route exact path="/rnd/content/:rndID" component={RNDViewPage} />
            <Route exact path="/careers/content/:careerID" component={CareersViewPage} />
            <Route exact path="/careers/list/:page" component={CareersListPage} />
            <Route path="/contact" component={ContactPage} />
          </Switch>
        </div>
    </Wrapper>
  );
}

export default Root;

const Wrapper = styled.div`
  width: 100%;

  .innerWrapper {
    min-height: 1000px;
    width: 100%;
    margin: 0 auto;
    @media (max-width: 768px) {
      width: 100%;
      min-height: auto;
    }
  }
`

