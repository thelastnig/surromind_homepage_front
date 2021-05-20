import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default (
  <Switch>
    <Route path="/"/>
    <Route path="/surromindnews/list/:page" />
    <Route path="/surromindnews/article/:articleID" />
    <Route path="/project/list/:page" />
    <Route path="/project/content/:projectID" />
    <Route path="/rnd/list/:page" />
    <Route path="/rnd/content/:rndID" />
    <Route path="/careers/content/:careerID" />
    <Route path="/careers/list/:page" />
    <Route path="/company/voucher" />
    <Route path="/contact" />
    <Route />
  </Switch>
)



