import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// import constants from constants.js
import * as constants from '../../lib/constants';

// import UpperImage Component for upper image area
import UpperImage from '../common/UpperImage';

import BackToList from '../common/BackToList';

import { InputAdornment, TextField, FormGroup, FormControlLabel, Checkbox, Typography, createMuiTheme } from '@material-ui/core';

import BusinessCenter from "@material-ui/icons/BusinessCenter";
import PhoneIcon from "@material-ui/icons/Phone";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";

// import email-library
import emailjs from 'emailjs-com';
import axios from 'axios';

const checkboxKorName = {
  checkedML: '머신러닝',
  checkedAISolution: 'AI 솔루션',
  checkedPartnership: '파트너쉽',
  checkedCareers: '채용/인사',
  checkedETC: '기타',
}

class ContactView extends Component {

  state = {
    checkbox: {
      checkedML: false,
      checkedAISolution: false,
      checkedPartnership: false,
      checkedCareers: false,
      checkedETC: false,
    },
    company: '',
    name: '',
    phone: '',
    email: '',
    title: '',
    content: '',
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  handleCheckBoxChange = (event) => {
    this.setState({ 
      ...this.state,
      checkbox: {
        ...this.state.checkbox,
        [event.target.name]: event.target.checked 
      }
    });
  }

  handleChange = (event) => {
    this.setState({ 
      ...this.state,
      [event.target.name]: event.target.value 
    });
  }

  handleClick = () => {
    const { company, name, phone, email, title, content, checkbox } = this.state;

    const resultCheckbox = this.checkContantMenu();
    if (resultCheckbox === false) {
      return;
    } 
    const resultItems = this.checkItem();

    if (resultItems === false) {
      return;
    }
    
    let typelist = '';

    for (let key in checkbox) {
      if (checkbox[key] == true) {
        typelist += checkboxKorName[key] + ' ';
      } 
    }

    let templateParams = {
      from_name: name,
      to_name: 'Surromind Admin',
      type: typelist,
      company: company,
      phone: phone,
      email: email,
      title: title,
      content: content,
      reply_to: email
    }
    emailjs.init("user_GcU6jNa96WsYxDughyzZ7");
    emailjs.send('service_2zgybnl', 'template_jnqrv0n', templateParams)
      .then(function(response) {
        alert('메일이 정상적으로 발송되었습니다.');
        window.location.reload();
      }, function(error) {
        alert('메일 발송 중 이상이 발생하였습니다. 잠시 후 다시 시도해 주세요.');
        window.location.reload();
      });
  }
  
  checkContantMenu = () => {
    const { checkbox } = this.state;
    let checkedNum = 0;
    for (let key in checkbox) {
      if (checkbox[key] == true) {
        checkedNum += 1;
      } 
    }
    if (checkedNum < 1) {
      alert("문의 유형을 선택해 주세요.");
      return false;
    }

    return true;
  }

  checkItem = () => {
    const { company, name, phone, email, title, content } = this.state;
    const regexpNum = /^[0-9]*$/;
    const regexpEmail = /^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{1,5}$/;

    if (company === null || company === '') {
      alert('소속을 입력해 주세요.');
      this.inputCompany.focus();
      return false;
    } else if (name === null || name === '') {
      alert('성명을 입력해 주세요.');
      this.inputName.focus();
      return false;
    } else if (phone === null || phone === '') {
      alert('연락처를 입력해 주세요.');
      this.inputPhone.focus();
      return false;
    } else if (!regexpNum.test(phone)) {
      alert('연락처는 숫자만 입력 가능합니다.');
      this.inputPhone.focus();
      return false;      
    } else if (email === null || email === '') {
      alert('이메일을 입력해 주세요.');
      this.inputEmail.focus();
      return false;
    } else if (!regexpEmail.test(email)) {
      alert('이메일 형식이 올바르지 않습니다.');
      this.inputPhone.focus();
      return false;      
    } else if (title === null || title === '') {
      alert('제목을 입력해 주세요.');
      this.inputTitle.focus();
      return false;
    } else if (content === null || content === '') {
      alert('내용을 입력해 주세요.');
      this.inputContent.focus();
      return false;
    }
    return true;
  }

  render() {
    const styleFull = {
      "width": "100%",
    };

    const styleIcon = {
      "fill": `${oc.gray[7]}`,
      'fontSize': '20px',
    };

    const styleCheckLabel = {
      "fontFamily": `${constants.NOTO_FONT}`,
      "fontSize": "14px",
      "marginLeft": "-5px",
    }

    const { checkedML, checkedAISolution, checkedPartnership, checkedCareers, checkedETC } = this.state.checkbox; 
    const { company, name, phone, email, title, content } = this.state;
    return (
      <Wrapper>
        <UpperImage text='Contact'/>
        <div className='contactContentWrapper'>
          <div className='infoText'>
            문의하기
          </div>
          <div className='contactItem'>
            <div className='contactItemLeft'>유형</div>
            <div className='contactItemRight'>
              <FormGroup row>
                <FormControlLabel
                  control={<Checkbox checked={checkedML} 
                                      value={checkedML} 
                                      onChange={this.handleCheckBoxChange} 
                                      name="checkedML" 
                                      color="primary"
                                      />}
                  label={<Typography style={styleCheckLabel}>머신러닝</Typography>} />
                <FormControlLabel
                  control={<Checkbox checked={checkedAISolution} 
                                      value={checkedAISolution} 
                                      onChange={this.handleCheckBoxChange} 
                                      name="checkedAISolution" 
                                      color="primary"/>}
                  label={<Typography style={styleCheckLabel}>AI 솔루션</Typography>} />
                <FormControlLabel
                  control={<Checkbox checked={checkedPartnership} 
                                      value={checkedPartnership} 
                                      onChange={this.handleCheckBoxChange} 
                                      name="checkedPartnership" 
                                      color="primary"/>}
                  label={<Typography style={styleCheckLabel}>파트너쉽</Typography>} />
                <FormControlLabel
                  control={<Checkbox checked={checkedCareers} 
                                      value={checkedCareers} 
                                      onChange={this.handleCheckBoxChange} 
                                      name="checkedCareers" 
                                      color="primary"/>}
                  label={<Typography style={styleCheckLabel}>채용/인사</Typography>} />
                <FormControlLabel
                  control={<Checkbox checked={checkedETC} 
                                      value={checkedETC} 
                                      onChange={this.handleCheckBoxChange} 
                                      name="checkedETC" 
                                      color="primary"/>}
                  label={<Typography style={styleCheckLabel}>기타</Typography>} />
              </FormGroup>
            </div>
          </div>
          <div className='contactItem'>
            <div className='contactItemLeft'>소속</div>
            <div className='contactItemRight'>
             <TextField id="company" 
                        name="company" 
                        value={company} 
                        onChange={this.handleChange} 
                        variant="outlined" 
                        size="small" 
                        className="inputHalf"
                        ref={(ref) => {this.inputCompany=ref}}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <BusinessCenter style={styleIcon}/>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
          <div className='contactItem'>
            <div className='contactItemLeft'>성명</div>
            <div className='contactItemRight'>
             <TextField id="name" 
                        name="name" 
                        value={name} 
                        onChange={this.handleChange} 
                        variant="outlined" 
                        size="small" 
                        className="inputHalf"
                        ref={(ref) => {this.inputName=ref}}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PersonIcon style={styleIcon}/>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
          <div className='contactItem'>
            <div className='contactItemLeft'>연락처</div>
            <div className='contactItemRight'>
             <TextField id="phone" 
                        name="phone" 
                        value={phone} 
                        onChange={this.handleChange} 
                        variant="outlined" 
                        size="small" 
                        className="inputHalf" 
                        ref={(ref) => {this.inputPhone=ref}}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PhoneIcon style={styleIcon}/>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
          <div className='contactItem'>
            <div className='contactItemLeft'>E-mail</div>
            <div className='contactItemRight'>
             <TextField id="email" 
                        name="email" 
                        value={email} 
                        onChange={this.handleChange} 
                        variant="outlined" 
                        size="small" 
                        className="inputHalf"
                        ref={(ref) => {this.inputEmail=ref}}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <EmailIcon style={styleIcon}/>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
          <div className='contactItem'>
            <div className='contactItemLeft'>제목</div>
            <div className='contactItemRight'>
             <TextField id="title" 
                        name="title" 
                        value={title} 
                        onChange={this.handleChange} 
                        variant="outlined" 
                        size="small" 
                        style={styleFull} 
                        ref={(ref) => {this.inputTitle=ref}}
              />
            </div>
          </div>
          <div className='contactItem'>
            <div className='contactItemLeft'>내용</div>
            <div className='contactItemRight'>
             <TextField id="content" 
                        name="content" 
                        value={content} 
                        onChange={this.handleChange} 
                        variant="outlined" 
                        size="small" 
                        multiline rows={10} 
                        style={styleFull} 
                        ref={(ref) => {this.inputContent=ref}}
              />
            </div>
          </div>
          <div className='btnWrapper'>
            <div className='btn' onClick={this.handleClick}>
              등록
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default ContactView;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  color: ${oc.gray[9]};

  .contactContentWrapper {
    width: ${constants.NEWS_CONTENT_WIDTH}px;
    margin: 0 auto;
    padding-top: 100px;
    padding-bottom: 100px;
  
    @media (max-width: ${constants.TOTAL_WIDTH}px) {
      width: 100%;
    }
  
    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 100%;
    }
  }

  .infoText {
    text-align: center;
    margin: 0 auto;
    margin-bottom: 50px;
    font-size: ${constants.MAIN_TITLE_SIZE}px;
    font-weight: 600;
    font-family: ${constants.NOTO_FONT};
  
    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      font-size: ${constants.RESPONSIVE_MAIN_TITLE_SIZE_MOBILE_MIDDEL}px;
    }
  }

  .contactItem {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 25px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .contactItemLeft {
    width: 15%;
    font-size: 16px;
    font-weight: 500;
    font-family: ${constants.NOTO_FONT};
  
    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      font-size: 13px;
    }
  }

  .contactItemRight {
    flex: 1;
  }

  .btnWrapper {
    width: 100%;
    margin: 0 auto;
    margin-top: 70px;
    text-align: center;

    .btn {
      width: 200px;
      margin: 0 auto;
      text-align:center;
      border: 1px solid ${constants.POINT_COLOR};
      padding: 10px 0;
      
      font-size: 14px;
      font-family: ${constants.NOTO_FONT};
      color: ${constants.POINT_COLOR};
      cursor: pointer;

      &:hover {
        color: white;
        background-color: ${constants.POINT_COLOR};
      }
    }
  }

  .inputHalf {
    width: 50%;
  
    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 100%;
    }

  }
`;

