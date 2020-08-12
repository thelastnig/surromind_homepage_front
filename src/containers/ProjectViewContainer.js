import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Map, List } from 'immutable';
import ProjectView from '../components/ProjectView';


class ProjectViewContainer extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <ProjectView/>
      </div>
    );
  }
}


export default connect(
  (state) => ({
  }),
  (dispatch) => ({
  })
)(withRouter(ProjectViewContainer));