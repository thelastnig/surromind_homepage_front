import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

// import constants from constants.js
import * as constants from '../../../lib/constants';

// import utils
import { checkAdminLogin } from '../../../lib/utils';

// import images
import surroLogo from '../../../images/surromind_logo_new.png';

import { TextField } from '@material-ui/core';

class AdminLogin extends Component {
  state = {
    id: '',
    password: '',
  }

  componentDidMount() {
    const isForlogin = true;
    if (checkAdminLogin(isForlogin)) {
      this.props.history.push('/admin/main');
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = () => {
    const { id, password } = this.state;

    if (id === null || id === '' || password === null || password === '') {
      alert('관리자 계정 정보를 입력하세요.');
      return;
    }

    if (id !== process.env.REACT_APP_ADMIN_ID || password !== process.env.REACT_APP_ADMIN_PASSWORD) {
      alert('관리자 계정 정보가 일치하지 않습니다.');
      return;
    }
    localStorage.setItem('isSMRAdminLogin', true);
    alert('로그인 되었습니다.')
    window.location.reload();
  }

  handleClick = () => {
    this.props.history.push('/');
  }

  handleKeyPress = (e) => {
    if(e.key == 'Enter') {
      this.handleSubmit();
    }
  }


  render() {
    const { id, password } = this.state;

    return (
      <AdminLoginWrapper>
        <div className='loginWrapper'>
          <div className='titleWrapper'>
            <div className='titleText'>Admin Sign in</div>
          </div>
          <div className='iconWrapper'>
            <img src={surroLogo} alt={surroLogo} width="180px"/>
          </div>
          <div className='inputWrapper'>
            <div className='inputItem'>
            <TextField id="adminId" 
                          name="id" 
                          value={id} 
                          onChange={this.handleChange} 
                          label="ID" 
                          variant="outlined"
                          size="large" 
                          className="inputText"
                          style = {{width: 250}} 
                      />
            </div>
            <div className='inputItem'>
            <TextField id="adminPassword" 
                          name="password" 
                          type="password"
                          value={password} 
                          onChange={this.handleChange} 
                          onKeyPress={this.handleKeyPress}
                          label="PASSWORD" 
                          variant="outlined" 
                          size="large" 
                          className="inputText"
                          style = {{width: 250}} 
                      />
            </div>
          </div>
          <div className='btnWrapper'>
            <div className='btnItem submit' onClick={this.handleSubmit}>
              <div className='btnText' >Sign in</div>
            </div>
            <div className='btnItem home' onClick={this.handleClick}>
              <div className='btnText home' >Go to Main</div>
            </div>
          </div>
        </div>
      </AdminLoginWrapper>
    );
  }
}

export default AdminLogin;

const AdminLoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 150px 0;
  background-color: ${oc.gray[1]};

  .titleWrapper, .iconWrapper, .inputWrapper, .btnWrapper {
    margin: 0 auto;
    text-align: center;
  }

  .titleText {
    font-size: 56px;
    font-weight: 800;
    color: ${oc.gray[8]};
    margin-bottom: 20px;
  }

  .inputWrapper {
    margin-top: 50px;
  }

  .inputItem {
    padding: 10px 0;
  }

  .inputText {
  }

  .btnWrapper {
    
  } 

  .btnItem {
    margin: 0 auto;
    width: 250px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
    background-color: ${constants.POINT_COLOR};

    &.submit {
      margin-top: 70px;
    }

    &.home {
      margin-top: 20px;
      border: 1px solid ${constants.POINT_COLOR};
      background-color: ${oc.gray[1]};
    }
  }

  .btnText {
    color: white;
    font-size: 20px;

    &.home {
      color: ${constants.POINT_COLOR};
    }
  }
}
`;

