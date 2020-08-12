import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Map, List } from 'immutable';
import ProjectList from '../components/ProjectList';


class ProjectListContainer extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <ProjectList/>
      </div>
    );
  }
}


export default connect(
  (state) => ({
  }),
  (dispatch) => ({
  })
)(withRouter(ProjectListContainer));