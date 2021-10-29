import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// import images
import surroLogo from '../../../images/surromind_logo_new.png';

// import constants from constants.js
import * as constants from '../../../lib/constants';

class NotFound extends Component {

  componentDidMount() {
  }

  handleClick = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <Wrapper>
        <div className='messageWrapper'>
          <div className='iconWrapper'>
            <img src={surroLogo} alt={surroLogo}/>
          </div>
          <div className='textWrapper'>
            <div className='mainText'>
              Page Not Found
            </div>
            <div className='subText'>
              The page you are looking for might be renamed or removed.
            </div>
          </div>
          <div className='btnWrapper'>
            <div className='btnHome' onClick={this.handleClick}>
              <div className='btnHomeText' >Go to Main</div>
            </div>
          </div>
        </div>
      </Wrapper>
    )
  }
}

export default NotFound;


const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 250px 0;
  background-color: ${oc.gray[1]};

  .iconWrapper, .textWrapper, .btnWrapper {
    margin: 0 auto;
    text-align: center;
  }

  .btnWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  } 

  .mainText {
    margin-top: 50px;
    font-size: 60px;
    font-weight: bold;
    color: ${oc.gray[8]};
  }

  .subText {
    margin-top: 25px;
    font-size: 20px;
    color: ${oc.gray[6]};
  }

  .btnHome {
    margin-top: 80px;
    width: 170px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    cursor: pointer;
    background-color: ${constants.POINT_COLOR};
  }

  .btnHomeText {
    color: white;
    font-size: 20px;
  }
`;