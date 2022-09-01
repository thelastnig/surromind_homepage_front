import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ContactView from '../../components/ContactView';


class ContactComponentContainer extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <ContactView/>
      </div>
    );
  }
}


export default connect(
  (state) => ({
  }),
  (dispatch) => ({
  })
)(withRouter(ContactComponentContainer));