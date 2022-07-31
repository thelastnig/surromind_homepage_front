import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Map, List } from 'immutable';
import Contact from '../../components/Contact';


class ContactComponentContainer extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Contact/>
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