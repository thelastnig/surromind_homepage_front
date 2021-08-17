import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link, withRouter } from 'react-router-dom';

// import env
import dotenv from 'dotenv';

// import constants from constants.js
import * as constants from '../../../lib/constants'

// import image
import AIStudioEventUpper from '../../../images/AIStudioEventUpper.jpg';
import AIStudioEventMiddle from '../../../images/AIStudioEventMiddle.jpg';
import AIStudioEventLower from '../../../images/AIStudioEventLower.jpg';

// import icon
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

// GA settings
import ReactGA from 'react-ga';

// import video
import ReactPlayer from 'react-player'

import { InputAdornment, TextField, FormGroup, FormControlLabel, Checkbox, Typography, createMuiTheme } from '@material-ui/core';

import BusinessCenter from "@material-ui/icons/BusinessCenter";
import PhoneIcon from "@material-ui/icons/Phone";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";

// import email-library
import emailjs from 'emailjs-com';
import axios from 'axios';
dotenv.config();

const checkboxKorName = {
  checkedML: '머신러닝',
  checkedAISolution: 'AI 솔루션',
  checkedPartnership: '파트너쉽',
  checkedCareers: '채용/인사',
  checkedETC: '기타',
}

class AIStudioEvent extends Component {

  state = {
    checkbox: {
      checkedAIStudio: false,
      checkedAIOnboarding: false,
      checkedAIEducation: false,
    },
    company: '',
    name: '',
    phone: '',
    email: '',
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
      if (checkbox[key] === true) {
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
      reply_to: email
    }
    console.log(process.env.REACT_APP_EMAILJS_USER_ID)
    console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID)
    console.log(process.env.REACT_APP_EMAILJS_TEMPLATE_ID)
    emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);
    emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, templateParams)
      .then(function(response) {
        alert('메일이 정상적으로 발송되었습니다.');
        window.location.reload();
      }, function(error) {
        alert('메일 발송 중 이상이 발생하였습니다. 잠시 후 다시 시도해 주세요.');
        console.log(error)
        window.location.reload();
      });
  }
  
  checkContantMenu = () => {
    const { checkbox } = this.state;
    let checkedNum = 0;
    for (let key in checkbox) {
      if (checkbox[key] === true) {
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
      alert('회사명을 입력해 주세요.');
      this.inputCompany.focus();
      return false;
    } else if (name === null || name === '') {
      alert('성함을 입력해 주세요.');
      this.inputName.focus();
      return false;
    } else if (phone === null || phone === '') {
      alert('전화(휴대폰)를 입력해 주세요.');
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
    } 
    return true;
  }
  
  // handleClick = (url) => {
  //   this.props.history.push(url);
  // }    

  render() {
    
    const styleFull = {
      "width": "100%",
    };

    const styleIcon = {
      "fill": `${oc.gray[7]}`,
      'fontSize': '20px',
    };

    const styleCheckLabel = {
      "fontFamily": `${constants.APPLE_FONT}`,
      "fontSize": "16px",
      "marginLeft": "-5px",
    }

    const { checkedAIStudio, checkedAIOnboarding, checkedAIEducation } = this.state.checkbox; 
    const { company, name, phone, email } = this.state;
  
    return (
      <AIStudioEventWrapper>
        <div className="imageUpper">
          <div className="upperLeft">
            <div className="upperLeftContent">
              <div className="logo upper">SURROMIND<sup>TM</sup></div>
              <div className="logo lower">AI Studio</div>
              <div className="description upper">사업 경쟁략을 위한 인공지능 개발&#183;운영 시스템</div>
              <div className="description lower">코딩이 필요없는 개발환경 제공으로<br/>누구나 쉽고 편리하게 인공지능 개발</div>
              <div className="moveBtn">
                <div className="btnTitle">
                  이벤트 바로가기
                </div>
                <div className="btnIcon"><ArrowForwardIcon className="btnIconLeftArrow"/></div>
              </div>
            </div>
          </div>
          <div className="upperRight">
            <img src={AIStudioEventUpper} alt={AIStudioEventUpper} width="1240px" />
          </div>
        </div>

        <div className="submitArea">
          <SubmitWrapper>
            <div className='contactContentWrapper'>
              <div className='infoText'>이벤트 신청</div>
              <div className='checkItemWrapper'>
                <FormGroup className='checkItemForm' row>
                  <FormControlLabel
                    control={<Checkbox checked={checkedAIStudio} 
                                        value={checkedAIStudio} 
                                        onChange={this.handleCheckBoxChange} 
                                        name="checkedAIStudio" 
                                        color="primary"
                                        />}
                    label={<Typography style={styleCheckLabel}>AI studio 33% 할인 + POC 지원</Typography>} />
                  <FormControlLabel
                    control={<Checkbox checked={checkedAIOnboarding} 
                                        value={checkedAIOnboarding} 
                                        onChange={this.handleCheckBoxChange} 
                                        name="checkedAIOnboarding" 
                                        color="primary"/>}
                    label={<Typography style={styleCheckLabel}>AI 온보딩 패키지 무료 제공</Typography>} />
                  <FormControlLabel
                    control={<Checkbox checked={checkedAIEducation} 
                                        value={checkedAIEducation} 
                                        onChange={this.handleCheckBoxChange} 
                                        name="checkedAIEducation" 
                                        color="primary"/>}
                    label={<Typography style={styleCheckLabel}>온라인 AI 교육 프로그램 30% 할인</Typography>} />
                </FormGroup>
              </div>

              <div className='inputItemWrapper'>
                <div className='contactItem'>
                  <TextField id="company" 
                              name="company" 
                              value={company} 
                              onChange={this.handleChange} 
                              variant="outlined" 
                              size="small" 
                              className="inputHalf"
                              placeholder="회사명"
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
                <div className='contactItem'>
                  <TextField id="name" 
                              name="name" 
                              value={name} 
                              onChange={this.handleChange} 
                              variant="outlined" 
                              size="small" 
                              className="inputHalf"
                              placeholder="성함"
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
              <div className='inputItemWrapper'>
                <div className='contactItem'>
                  <TextField id="phone" 
                              name="phone" 
                              value={phone} 
                              onChange={this.handleChange} 
                              variant="outlined" 
                              size="small" 
                              className="inputHalf" 
                              placeholder="전화(휴대폰)"
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
                <div className='contactItem'>
                  <TextField id="email" 
                              name="email" 
                              value={email} 
                              onChange={this.handleChange} 
                              variant="outlined" 
                              size="small" 
                              className="inputHalf"
                              placeholder="E-mail"
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

              <div className='infoWrapper'>
                신청하신 분께 담당자가 안내 연락드릴 예정입니다. 부담없이 신청남긴 후 결정하셔도 됩니다.
              </div>

              <div className='btnWrapper'>
                <div className='btn' onClick={this.handleClick}>
                  신청하기
                </div>
              </div>
            </div>
          </SubmitWrapper>
        </div>

        <div className="imageMiddle">
          <img src={AIStudioEventMiddle} alt={AIStudioEventMiddle} width="1920px" />
        </div>

        <div className="videoArea">
          <div className="videoWrapper">
            <ReactPlayer 
              url='https://www.youtube.com/watch?v=SylxMgocAtA'
              width={595}
              onStart={this.clickButton}
            />
            <div className="videoText">
              SURROMIND AI Studio 장점
            </div>
          </div>
          <div className="videoWrapper">
            <ReactPlayer 
              url='https://www.youtube.com/watch?v=2ojdE6azYzM'
              width={595}
              onStart={this.clickButton}
            />
            <div className="videoText">
              SURROMIND AI Studio
            </div>
          </div>
          <div className="videoWrapper">
            <ReactPlayer 
              url='https://www.youtube.com/watch?v=jjTdMlCSRg8'
              width={595}
              onStart={this.clickButton}
            />
            <div className="videoText">
              인공지능 도입을 위한 AI Studio
            </div>
          </div>
        </div>

        <div className="imageLower">
          <img src={AIStudioEventLower} alt={AIStudioEventLower} width="1920px" />
        </div>
      </AIStudioEventWrapper>
    );
  }
}

export default withRouter(AIStudioEvent);

const AIStudioEventWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;

  .imageUpper {
    width: 100%;
    height: 620px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .upperLeft {
    width: 680px;
    height: 100%;
  }

  .upperLeftContent {
    margin-top: 140px;
    margin-left: 285px;

    .logo {
      font-family: ${constants.INTER_FONT}; 
      font-size: 54px;
      font-weight: 700;
      color: #fe5f01;

      sup { 
        font-size: 20px;
      }
    }

    .description {
      font-family: ${constants.APPLE_FONT};
      font-size: 20px;
      font-weight: 700;
      font-stretch: normal;
      line-height: 1.4;
      letter-spacing: -0.6px;

      &.upper {
        margin-top: 30px;
        margin-bottom: 10px;
      }
    }

    .moveBtn {
      width: 235px;
      height: 60px;
      margin-top: 35px;
      background-color: #fe5f01;
      border-radius: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      
      &:hover {
        background-color: ${oc.orange[6]};
      }

      .btnTitle {
        font-family: ${constants.APPLE_FONT};
        font-size: 20px;
        line-height: 1.4;
        letter-spacing: -0.6px;
        color: white;
        margin-right: 8px;
      }

      .btnIconLeftArrow {
        color: white;
        font-size: 26px;
      }
    }
  }

  .submitArea {
    width: 100%; 
    margin: 0 auto;
    background-color: #F5F5F5;
  }

  .videoArea {
    width: 100%; 
    margin: 0 auto;
    margin-bottom: 200px;
    display: flex;
    justify-content: center;
    align-items: center;

    .videoText {
      width: 100%;
      padding-top: 30px;
      text-align: center;
      font-family: ${constants.APPLE_FONT};
      font-size: 20px;
      line-height: 1.4;
      letter-spacing: -0.6px;
      font-weight: 700;
    }
  }
`;

const SubmitWrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  color: ${oc.gray[9]};

  .contactContentWrapper {
    width: ${constants.NEWS_CONTENT_WIDTH}px;
    margin: 0 auto;
    padding-top: 70px;
    padding-bottom: 90px;
  
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
    font-size: 32px;
    font-weight: 800;
    font-family: ${constants.APPLE_FONT};
    color: #fe5f01;
  
    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      font-size: ${constants.RESPONSIVE_MAIN_TITLE_SIZE_MOBILE_MIDDEL}px;
    }
  }

  .checkItemWrapper {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 30px;

    .checkItemForm {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .inputItemWrapper {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .contactItem {
    width: 390px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-family: ${constants.APPLE_FONT};
  }

  .infoWrapper {
    margin: 0 auto;
    text-align: center;
    font-family: ${constants.APPLE_FONT};  
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: -0.6px;

  }

  .btnWrapper {
    width: 100%;
    margin: 0 auto;
    margin-top: 50px;
    text-align: center;

    .btn {
      width: 100%;
      margin: 0 auto;
      text-align:center;
      padding: 12px 0;
      border-radius: 25px;
      
      font-size: 18px;
      letter-spacing: 2px;
      font-weight: 700;
      font-family: ${constants.APPLE_FONT};
      
      color: white;
      background-color: #fe5f01;
      cursor: pointer;

      &:hover {
        background-color: ${oc.orange[6]};
      }
    }
  }

  .inputHalf {
    width: 100%;
    font-family: ${constants.APPLE_FONT};
  
    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 100%;
    }

  }
`;


