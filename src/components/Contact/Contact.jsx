import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link, withRouter } from 'react-router-dom';

// import env
import dotenv from 'dotenv';

// import constants from constants.js
import * as constants from '../../lib/constants';

import imgB1 from '../../images/backgound-icon/img-bottom-01.png';
import imgB2 from '../../images/backgound-icon/img-bottom-02.png';

// import email-library
import emailjs from 'emailjs-com';

// GA settings
import ReactGA from 'react-ga';

const typeKorName = {
  checkedVoucher: '바우처 지원사업',
  checkedML: '머신러닝/딥러닝',
  checkedAISolution: 'AI 솔루션',
  checkedPartnership: '파트너쉽',
  checkedCareers: '채용/인사',
  checkedETC: '기타',
}

class Contact extends Component {
  state = {
    type: '',
    company: '',
    name: '',
    phone: '',
    email: '',
    title: '',
    content: '',
  }

  componentDidMount() {
  }

  handleChange = (event) => {
    ReactGA.event({
      category: 'Contact',
      action: 'Input Activated'
    });
    this.setState({ 
      ...this.state,
      [event.target.name]: event.target.value 
    });
  }

  onFocus = (label) => {
    ReactGA.event({
      category: 'User',
      action: 'enter contact input',
      label: label,
    });
  }

  ClickSubmitButton = () => {
    ReactGA.event({
      category: 'User',
      action: 'enter contact input',
      label: 'send question',
    });
  }

  handleClick = () => {
    const { company, name, phone, email, title, content, type } = this.state;

    const resultItems = this.checkItem();

    if (resultItems === false) {
      return;
    }
    
    ReactGA.event({
      category: 'User',
      action: 'enter contact input',
      label: 'send question',
    });

    var _nasa={};
    if(window.wcs) {
      _nasa["cnv"] = window.wcs.cnv("4","1");
      window.wcs_do(_nasa);
    }
    
    let templateParams = {
      from_name: name,
      to_name: 'Surromind Admin',
      type: typeKorName[type],
      company: company,
      phone: phone,
      email: email,
      title: title,
      content: content,
      reply_to: email
    }
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

  checkItem = () => {
    const { company, name, phone, email, title, content, type } = this.state;
    const regexpNum = /^[0-9]*$/;
    const regexpEmail = /^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{1,5}$/;

    if (type === null || type === '') {
      alert('문의 유형을 선택해 주세요');
      this.inputType.focus();
      return false;
    } else if (company === null || company === '') {
      alert('소속을 입력해 주세요.');
      this.inputCompany.focus();
      return false;
    } else if (name === null || name === '') {
      alert('성명을 입력해 주세요.');
      this.inputName.focus();
      return false;
    } else if (email === null || email === '') {
      alert('이메일을 입력해 주세요.');
      this.inputEmail.focus();
      return false;
    } else if (!regexpEmail.test(email)) {
      alert('이메일 형식이 올바르지 않습니다.');
      this.inputEmail.focus();
      return false;      
    } else if (phone === null || phone === '') {
      alert('연락처를 입력해 주세요.');
      this.inputPhone.focus();
      return false;
    } else if (!regexpNum.test(phone)) {
      alert('연락처는 숫자만 입력 가능합니다.');
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
    const { company, name, email, phone, title, content, type } = this.state;
    
    return (      
    <Wrapper>
      <div className='contentsWrapper' ref={(ref) => {this.mainCompanySection=ref}}>
        <div className="backgroundIcon imgB1" ><img src={imgB1} alt="imgB1" /></div>
        <div className="backgroundIcon imgB2" ><img src={imgB2} alt="imgB2" /></div>
        <div className='titleText'>Contact</div>
        <div className='mainText'>
        AI 관련 업무 협의 및 궁금한 사항에 대해 문의하시면<br/>
        성심껏 알려드립니다.
        </div>
        <div className='inputWrapperSelect'>
          <div className='inputLabel'>
            <div className='inputLabelText'>유형</div>
          </div>
          <div className='inputItem'>
            <select name='type' 
                    id='type' 
                    className='input select' 
                    value={type} 
                    onChange={this.handleChange}
                    ref={(ref) => {this.inputType=ref}}  
                    onFocus={() => this.onFocus('type')} 
                    >
              <option value='' className='inputOption'>써로마인드에 문의할 내용을 선택해주세요.</option>
              <option value='checkedVoucher' className='inputOption'>바우처 지원사업</option>
              <option value='checkedML' className='inputOption'>머신러닝/딥러닝</option>
              <option value='checkedAISolution' className='inputOption'>AI 솔루션</option>
              <option value='checkedPartnership' className='inputOption'>파트너쉽</option>
              <option value='checkedCareers' className='inputOption'>채용/인사</option>
              <option value='checkedETC' className='inputOption'>기타</option>
            </select>
          </div>
        </div>

        <div className='inputWrapper'>
          <div className='inputLabel'>
            <div className='inputLabelText'>소속</div>
          </div>
          <div className='inputItem'>
            <input type='text'
                    className='input' 
                    id='company' 
                    name='company' 
                    value={company} 
                    onChange={this.handleChange}  
                    onFocus={() => this.onFocus('company')} 
                    ref={(ref) => {this.inputCompany=ref}}
                    placeholder='ex) 써로마인드, 프리랜서, 학생'/>
          </div>
        </div>
   
        <div className='inputWrapper'>
          <div className='inputLabel'>
            <div className='inputLabelText'>성명</div>
          </div>
          <div className='inputItem'>
            <input type='text' 
                    className='input' 
                    id='name' 
                    name='name' 
                    value={name} 
                    onChange={this.handleChange}  
                    onFocus={() => this.onFocus('name')} 
                    ref={(ref) => {this.inputName=ref}}
                    placeholder='이름을 입력해 주세요.'/>
          </div>
        </div>

        <div className='inputWrapperLong'>
          <div className='inputLabel'>
            <div className='inputLabelText long'>E-mail</div>
          </div>
          <div className='inputItem long'>
            <input type='text' 
                    className='input long' 
                    id='email' 
                    name='email' 
                    value={email} 
                    onChange={this.handleChange}  
                    onFocus={() => this.onFocus('email')} 
                    ref={(ref) => {this.inputEmail=ref}}
                    placeholder='이메일 주소를 입력해 주세요.'/>
          </div>
        </div>

        <div className='inputWrapperLong'>
          <div className='inputLabel long'>
            <div className='inputLabelText long'>연락처</div>
          </div>
          <div className='inputItem long'>
            <input type='text' 
                    className='input long' 
                    id='phone' 
                    name='phone' 
                    value={phone} 
                    onChange={this.handleChange}  
                    onFocus={() => this.onFocus('phone')} 
                    ref={(ref) => {this.inputPhone=ref}}
                    placeholder='휴대폰 번호를 입력해 주세요.(숫자만 입력)'/>
          </div>
        </div>

        <div className='inputWrapperFull'>
          <div className='inputLabel'>
            <div className='inputLabelText'>제목</div>
          </div>
          <div className='inputItem full'>
            <input type='text' 
                    className='input full' 
                    id='title' 
                    name='title' 
                    value={title} 
                    onChange={this.handleChange}
                    onFocus={() => this.onFocus('title')} 
                    ref={(ref) => {this.inputTitle=ref}}  
                    placeholder='제목을 입력해 주세요.'/>
          </div>
        </div>

        <div className='inputWrapperFullContent'>
          <div className='inputLabel content'>
            <div className='inputLabelText content'>내용</div>
          </div>
          <div className='inputItem full content'>
            <textarea className='input full content' 
                      id='content' 
                      name='content'
                      value={content} 
                      onChange={this.handleChange}  
                      onFocus={() => this.onFocus('content')} 
                      ref={(ref) => {this.inputContent=ref}}  
                      placeholder='써로마인드에 문의할 내용을 입력해 주세요.'/>
          </div>
        </div>

        <div className='btnWrapper' onClick={this.handleClick}>
          <div className='btn'>보내기</div>
        </div>
      </div>
    </Wrapper>
    );
  }
}

export default withRouter(Contact);

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  .contentsWrapper {
    width: ${constants.LIMIT_WIDTH}px;
    height: ${constants.CONTACT_HEIGHT}px; 
    margin: 0 auto;
    margin-top: 150px;
    background-color: white;
    position: relative;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 95%;
      height: 100%;
      margin: 0 auto;
    }
  }

  .titleText {
    height: 65px;
    margin: 0 auto;
    margin-top: 56px;
    text-align: center;
    font-family: ${constants.INTER_FONT};  
    font-size: 54px;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -2.02px;
    color: #000000;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {    
      margin-top: 36px;
      height: 100%;
      font-size: 22px;
      font-weight: 800;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.82px;
      color: #000;
    }
  }

  .mainText {
    height: 56px;
    margin: 0 auto;
    margin-top: 5px;
    text-align: center;    
    font-family: ${constants.APPLE_FONT};
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: -0.6px;
    text-align: center;
    color: #000000;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {    
      height: 100%;  
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.43;
      letter-spacing: -0.42px;
      text-align: center;
      color: #000;
    }
  }

  .inputWrapper {
    margin: 0 auto;
    margin-top: 14px;
    width: 400px;
    height: 36px;
    border-radius: 4px;
    border: solid 1px #e1e2e3;
    display: flex;
    align-items: center;  
    justify-content: center;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 100%;
    }

    .inputLabel {
      width: 48px;
      height: 100%;
      background-color: #e1e2e3;
      display: flex;
      align-items: center;  
      justify-content: center;

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        width: 64px;
      }
  
      .inputLabelText {
        font-family: ${constants.APPLE_FONT};
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.4px;
        color: #000000;

        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          font-size: 13px;
        }
      }
    }

    .inputItem {
      width: 352px;
      height: 36px;

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        flex: 1;
      }
  
      .input {
        border: none;
        outline: none;
        width: 335px;
        height: 34px;
        padding-left: 12px;

        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          width: 90%;
          font-size: 13px;
          height: 29px;
        }
  
        font-family: ${constants.APPLE_FONT};
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.57px;
        color: #000000;
  
        &::placeholder {
          color: #b8babd;
        }
      }
    }
  }

  .inputWrapperSelect {
    margin: 0 auto;
    margin-top: 21px;
    width: 400px;
    height: 36px;
    border-radius: 4px;
    border: solid 1px #e1e2e3;
    display: flex;
    align-items: center;  
    justify-content: center;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 100%;
    }

    .inputLabel {
      width: 48px;
      height: 100%;
      background-color: #e1e2e3;
      display: flex;
      align-items: center;  
      justify-content: center;

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        width: 64px;
      }
  
      .inputLabelText {
        font-family: ${constants.APPLE_FONT};
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.4px;
        color: #000000;

        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          font-size: 13px;
        }  
      }
    }

    .inputItem {
      width: 352px;
      height: 36px;
      
      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        flex: 1;
      }
  
      .input {
        border: none;
        outline: none;
        width: 335px;
        height: 34px;
        padding-left: 10px;

        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          width: 95%;
          font-size: 13px;
          height: 30px;
        }
  
        font-family: ${constants.APPLE_FONT};
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.57px;
        color: #000000;
  
        &::placeholder {
          color: #b8babd;
        }
      }
    }
  }

  .inputWrapperLong {
    margin: 0 auto;
    margin-top: 14px;
    width: 400px;
    height: 36px;
    border-radius: 4px;
    border: solid 1px #e1e2e3;
    display: flex;
    align-items: center;  
    justify-content: center;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 100%;
    }

    .inputLabel {
      width: 64px;
      height: 100%;
      background-color: #e1e2e3;
      display: flex;
      align-items: center;  
      justify-content: center;
  
      .inputLabelText {
        font-family: ${constants.APPLE_FONT};
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.4px;
        color: #000000;

        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          font-size: 13px;
        }  
      }
    }

    .inputItem {
      width: 336px;
      height: 36px;

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        flex: 1;
      }
  
      .input {
        border: none;
        outline: none;
        width: 319px;
        height: 34px;
        padding-left: 12px;

        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          width: 90%;
          font-size: 13px;
          height: 29px;
        }
  
        font-family: ${constants.APPLE_FONT};
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.57px;
        color: #000000;
  
        &::placeholder {
          color: #b8babd;
        }
      }
    }
  }

  .inputWrapperFull {
    margin: 0 auto;
    margin-top: 14px;
    width: 680px;
    height: 36px;
    border-radius: 4px;
    border: solid 1px #e1e2e3;
    display: flex;
    align-items: center;  
    justify-content: center;
 
    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 100%;
    }

    .inputLabel {
      width: 64px;
      height: 100%;
      background-color: #e1e2e3;
      display: flex;
      align-items: center;  
      justify-content: center;
 
      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        width: 64px;
      }

      .inputLabelText {
        font-family: ${constants.APPLE_FONT};
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.4px;
        color: #000000;

        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          font-size: 13px;
        }  
      }
    }

    .inputItem {
      width: 632px;
      height: 36px;

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        flex: 1;
      }  
  
      .input {
        border: none;
        outline: none;
        width: 615px;
        height: 34px;
        padding-left: 12px;

        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          width: 90%;
          font-size: 13px;
          height: 29px;
        }  
  
        font-family: ${constants.APPLE_FONT};
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.57px;
        color: #000000;
  
        &::placeholder {
          color: #b8babd;
        }
      }
    }
  }

  .inputWrapperFullContent {
    margin: 0 auto;
    margin-top: 14px;
    width: 680px;
    height: 156px;
    border-radius: 4px;
    border: solid 1px #e1e2e3;
    display: flex;
    align-items: center;  
    justify-content: center;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 100%;
      height: 112px;
    }  

    .inputLabel {
      width: 48px;
      height: 100%;
      background-color: #e1e2e3;
      display: flex;
      align-items: flex-start;  
      justify-content: center;

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        width: 64px;
      }  

      .inputLabelText {
        font-family: ${constants.APPLE_FONT};
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.4px;
        color: #000000;
        margin-top: 12px;

        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          font-size: 13px;
        }  
      }
    }

    .inputItem {
      width: 632px;
      height: 156px;

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        flex: 1;
        height: 112px;
      }  
  
      .input {
        border: none;
        outline: none;
        width: 615px;
        padding-left: 12px;
        padding-top: 12px;
        height: 140px;
        resize: none;
        
        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          width: 90%;
          height: 96px;
          font-size: 13px;
        }  
  
        font-family: ${constants.APPLE_FONT};
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.57px;
        color: #000000;
  
        &::placeholder {
          color: #b8babd;
        }
      }
    }
  }

  .inputOption {
    font-family: ${constants.APPLE_FONT};
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.57px;
    color: #000000;
        
    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      font-size: 13px;
    }  
  }

  .btnWrapper {  
    width: 132px;
    height: 36px;
    margin: 0 auto;
    margin-top: 20px;
    border-radius: 4px;
    background-color: #ffe2d1;
    display: flex;
    align-items: center;  
    justify-content: center;
    cursor: pointer;      
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.57px;
    color: #fe5f01;
        
    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      margin-bottom: 52px;
      width: 124px;    
    }  

    &:hover {
      background-color: #ffbf99;
    }

    &:active {
      background-color: #fe5f01;
      color: #ffffff;
    }

    .btn {
      font-family: ${constants.APPLE_FONT};
    }
  }

  .backgroundIcon {
    position: absolute;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      display: none;
    }

    &.imgB1 {
      bottom: 0px;
      left: 336px;
      height: 141px;
    }

    &.imgB2 {
      bottom: 0px;
      right: 318px;
      height: 149px;
    }
  }
`;


