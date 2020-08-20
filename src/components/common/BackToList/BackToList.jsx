import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import oc from 'open-color';

// import constants from constants.js
import * as constants from '../../../lib/constants';

// import icon from material-ui/icon
import ArrowForward from "@material-ui/icons/ArrowForward";


class BackToList extends Component {

  handleClick = () => {
    this.props.history.goBack();
  }

  render() {
  const { url } = this.props;
    return (
      <Wrapper>
        <div className='backBtn' onClick={this.handleClick}>
          <div className='btnText'>Back to</div>
          <ArrowForward />
        </div>
      </Wrapper>
    )
  }
}

export default withRouter(BackToList);


const Wrapper = styled.div`
  width: 100%;
  margin-top: 100px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  .backBtn {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    color: ${constants.POINT_COLOR};
    cursor: pointer;
    border-bottom: 1px solid white;
    padding-bottom: 3px;

    &:hover {
      border-bottom: 1px solid ${constants.POINT_COLOR};
    }

    .btnText {
      font-size: 20px;
      font-weight: 300;
    }
  }
`;