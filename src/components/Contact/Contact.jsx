import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link, withRouter } from 'react-router-dom';

// import env
import dotenv from 'dotenv';

// import constants from constants.js
import * as constants from '../../lib/constants';

import contactImage from '../../images/contact.png';
import contactImageMobile from '../../images/mobile/contactMobile.jpg';

// import email-library
import emailjs from 'emailjs-com';

const checkboxKorName = {
  checkedML: '머신러닝',
  checkedAISolution: 'AI 솔루션',
  checkedPartnership: '파트너쉽',
  checkedCareers: '채용/인사',
  checkedETC: '기타',
}

class Contact extends Component {
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
      title: title,
      content: content,
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
      <div className='contentsWrapper' ref={(ref) => {this.mainCompanySection=ref}}>
        {/* <div className="backgroundIcon imgBg03"><img src={imgBg03} alt="imgBg03" /></div>
        <div className="backgroundIcon imgBg04"><img src={imgBg04} alt="imgBg04" /></div>
        <div className="backgroundIcon imgBg05"><img src={imgBg05} alt="imgBg05" /></div>
        <div className="backgroundIcon imgBg05_right"><img src={imgBg05} alt="imgBg05" /></div>
        <div className="backgroundIcon imgBg10"><img src={imgBg10} alt="imgBg10" /></div>
        <div className="backgroundIcon imgBg11"><img src={imgBg11} alt="imgBg11" /></div>
        <div className="backgroundIcon imgBg13"><img src={imgBg13} alt="imgBg13" /></div> */}
        <div className='titleText'>Contact</div>
        <div className='mainText'>
        AI 관련 업무 협의 및 궁금한 사항에 대해 문의하시면<br/>
        성심껏 알려드립니다.
        </div>
        <div className='inputWrapper select'>
          <div className='inputLabel'>
            <div className='inputLabelText'>유형</div>
          </div>
          <div className='inputItem'>
            <select name='type' id='type' className='input select'>
              <option value='' className='inputOption'>써로마인드에 문의할 내용을 선택해주세요.</option>
              <option value='' className='inputOption'>머신러닝/딥러닝</option>
              <option value='' className='inputOption'>AI 솔루션</option>
              <option value='' className='inputOption'>파트너쉽</option>
              <option value='' className='inputOption'>채용/인사</option>
              <option value='' className='inputOption'>기타</option>
            </select>
          </div>
        </div>

        <div className='inputWrapper'>
          <div className='inputLabel'>
            <div className='inputLabelText'>소속</div>
          </div>
          <div className='inputItem'>
            <input type='text' className='input' id='company' name='company' placeholder='ex) 써로마인드, 프리랜서, 학생'/>
          </div>
        </div>
   
        <div className='inputWrapper'>
          <div className='inputLabel'>
            <div className='inputLabelText'>성명</div>
          </div>
          <div className='inputItem'>
            <input type='text' className='input' id='name' name='name' placeholder='이름을 입력해 주세요.'/>
          </div>
        </div>

        <div className='inputWrapper'>
          <div className='inputLabel long'>
            <div className='inputLabelText long'>E-mail</div>
          </div>
          <div className='inputItem long'>
            <input type='text' className='input long' id='email' name='email' placeholder='이메일 주소를 입력해 주세요.'/>
          </div>
        </div>

        <div className='inputWrapper'>
          <div className='inputLabel long'>
            <div className='inputLabelText long'>연락처</div>
          </div>
          <div className='inputItem long'>
            <input type='text' className='input long' id='phone' name='phone' placeholder='휴대폰 번호를 입력해 주세요.(숫자만 입력)'/>
          </div>
        </div>

        <div className='inputWrapper full'>
          <div className='inputLabel'>
            <div className='inputLabelText'>제목</div>
          </div>
          <div className='inputItem full'>
            <input type='text' className='input full' id='title' name='title' placeholder='제목을 입력해 주세요.'/>
          </div>
        </div>

        <div className='inputWrapper full content'>
          <div className='inputLabel content'>
            <div className='inputLabelText content'>내용</div>
          </div>
          <div className='inputItem full content'>
            <textarea className='input full content' id='content' name='content' placeholder='써로마인드에 문의 할 내용을 입력해 주세요.'/>
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
    background-color: white;
    position: relative;
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

    &.full {
      width: 680px;
    }

    &.content {
      height: 156px;
    }

    &.select { 
     margin-top: 21px;
    }
  }

  .inputLabel {
    width: 48px;
    height: 100%;
    background-color: #e1e2e3;
    display: flex;
    align-items: center;  
    justify-content: center;

    &.long {
      width: 64px;
    }

    &.content {
      align-items: flex-start;  
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

      &.content {
        margin-top: 12px;
      }
    }
  }

  .inputItem {
    width: 352px;
    height: 36px;

    &.long {  
      width: 336px;
    }

    &.full {
      width: 632px;
    }

    &.content {
      height: 156px;
    }

    .input {
      border: none;
      outline: none;
      width: 335px;
      height: 34px;
      padding-left: 12px;

      &.long {  
        width: 319px;
      }

      &.full {
        width: 615px;
      }

      &.content {
        padding-top: 12px;
        height: 140px;
      }

      &.select { 
        padding-left: 10px;
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

  .inputOption {
    font-family: ${constants.APPLE_FONT};
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.57px;
    color: #000000;
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

    &.imgBg03 {
      top: 56px;
      left: 237px;
    }

    &.imgBg04 {
      top: 179px;
      left: 102px;
    }

    &.imgBg05 {
      top: 394px;
      left: 186px;
    }

    &.imgBg05_right {
      top: 483px;
      right: 198px;
    }

    &.imgBg10 {
      top: 63px;
      right: 207px;
    }

    &.imgBg11 {
      top: 194px;
      right: 105px;
    }

    &.imgBg13 {
      top: 526px;
      right: 115px;
    }
  }
`;


