import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import CompanyInfo from '../components/CompanyInfo';


class CompanyInfoContainer extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <CompanyInfo/>
      </div>
    );
  }
}


export default withRouter(CompanyInfoContainer);