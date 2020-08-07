import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainPage, CareersPage, ContactPage } from '../pages';
import styled from 'styled-components';

const Root = () => {
  return (
    <Wrapper>
        <div className="innerWrapper">
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/careers" component={CareersPage} />
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

