import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

// import env
import dotenv from 'dotenv';

// import constants from constants.js
import * as constants from '../../lib/constants';

// import image
import headerImage from '../../images/new/contactusBack.jpg';
import headerImageMobile from '../../images/new/contactusBackMobile.png';
import mapImage from '../../images/new/map.png';

// import email-library
import emailjs from 'emailjs-com';

// GA settings
import ReactGA from 'react-ga';

// import Naver map
// import { NaverMap, RenderAfterNavermapsLoaded } from 'react-naver-maps';

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
    title: '이메일 문의',
    content: '',
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const { naver } = window;
    if (naver) {
      const location = new naver.maps.LatLng(37.4812221, 126.9502626);

      const mapOptions = {
        center: location,
        zoom: 17,
      };
      const map = new naver.maps.Map('naverMap', mapOptions);
      new naver.maps.Marker({
        map,
        position: location,
      });
    };
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
    const { company, name, phone, email, content, type } = this.state;
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
    // } else if (title === null || title === '') {
    //   alert('제목을 입력해 주세요.');
    //   this.inputTitle.focus();
    //   return false;
    } else if (content === null || content === '') {
      alert('내용을 입력해 주세요.');
      this.inputContent.focus();
      return false;
    }
    return true;
  }

  render() {
    const { company, name, email, phone, content, type } = this.state;
   
    return (
    <>
    <HeaderImageWrapper>
      <div className='headerTextWrapper'>
        <div className='headerText'>Contact us</div>
      </div>
    </HeaderImageWrapper>
    <HeaderImageWrapperMobile>
      <div className='headerTextWrapper'>
        <div className='headerText'>Contact us</div>
      </div>
    </HeaderImageWrapperMobile>
    <Wrapper>
      <div className='contentsWrapper' ref={(ref) => {this.mainCompanySection=ref}}>
        <div className='titleText'>Contact us</div>
        <div className='inputWrapper'>
          <div className='inputLabel'>유형</div>
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
          <div className='inputLabel'>소속</div>
          <div className='inputItem'>
            <input type='text'
                    className='input' 
                    id='company' 
                    name='company' 
                    value={company} 
                    onChange={this.handleChange}  
                    onFocus={() => this.onFocus('company')} 
                    ref={(ref) => {this.inputCompany=ref}}
                    placeholder='회사명을 입력해 주세요.'/>
          </div>
        </div>
   
        <div className='inputWrapper'>
          <div className='inputLabel'>성명</div>
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

        <div className='inputWrapper'>
          <div className='inputLabel'>E-mail</div>
          <div className='inputItem long'>
            <input type='text' 
                    className='input long' 
                    id='email' 
                    name='email' 
                    value={email} 
                    onChange={this.handleChange}  
                    onFocus={() => this.onFocus('email')} 
                    ref={(ref) => {this.inputEmail=ref}}
                    placeholder='이메일을 입력해 주세요.'/>
          </div>
        </div>

        <div className='inputWrapper'>
          <div className='inputLabel'>연락처</div>
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

        {/* <div className='inputWrapper'>
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
        </div> */}

        <div className='inputWrapper'>
          <div className='inputLabel'>문의내용</div>
          <div className='inputItem content'>
            <textarea className='input content' 
                      id='content' 
                      name='content'
                      value={content} 
                      onChange={this.handleChange}  
                      onFocus={() => this.onFocus('content')} 
                      ref={(ref) => {this.inputContent=ref}}  
                      placeholder='AI 솔루션, 파트너쉽, 채용 등 자세하게 기입해 주시면 정확한 답변을 드리는데 도움이 됩니다.'/>
          </div>
        </div>

        <div className='btnWrapper' onClick={this.handleClick}>
          <div className='btn'>발송하기</div>
        </div>

        <div className='infoWrapper'>
          <div className='infoItem address'>
            <div className='infoUpper'>Address</div>
            <div className='infoLower'>서울시 관악구 남부순환로 1802, 2층</div>
          </div>
          <div className='infoItem tel'>
            <div className='infoUpper'>Tel</div>
            <div className='infoLower'>02-872-5127</div>
          </div>
          <div className='infoItem email'>
            <div className='infoUpper'>E-mail</div>
            <div className='infoLower'>contact@surromind.ai</div>
          </div>
        </div>

        <div className='mapWrapper'>
          <div id='naverMap' className='mapInnerWrapper' />
        </div>
      </div>
    </Wrapper>
    </>
    );
  }
}

export default withRouter(Contact);

const HeaderImageWrapper = styled.div`
  width: ${constants.LIMIT_WIDTH}px;
  height: 250px;
  margin: 0 auto;
  background-image: url(${headerImage});
  background-size: cover;

  @media (max-width: ${constants.MOBILE_WIDTH}px) {
    display: none;
  }

  .headerTextWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(7, 3, 4, 0.6);
  }

  .headerText {
    font-family: ${constants.INTER_FONT};  
    font-style: normal;
    font-weight: 800;
    font-size: 84px;
    text-align: center;
    color: #FFFFFF;
  }
`;

const HeaderImageWrapperMobile = styled.div`
  width: 100%;
  height: 80px;
  display: none;
  background-image: url(${headerImageMobile});
  background-size: cover;

  @media (max-width: ${constants.MOBILE_WIDTH}px) {
    display: block;
  }

  .headerTextWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(7, 3, 4, 0.6);
  }

  .headerText {
    font-family: ${constants.INTER_FONT};  
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    text-align: center;
    color: #FFFFFF;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  font-family: ${constants.NOTO_FONT};

  .contentsWrapper {
    width: ${constants.INNER_WIDTH}px;
    margin: 0 auto;
    padding-top: 110px;
    position: relative;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: calc(100% - ${constants.MOBILE_HORIZONTAL_MARGIN}px);
      height: 100%;
      margin: 0 auto;
      padding-top: 40px;
    }
  }

  .titleText {
    margin: 0 auto;
    text-align: center;
    font-family: ${constants.INTER_FONT};  
    font-style: normal;
    font-weight: 800;
    font-size: 65px;
    line-height: 79px;
    color: #070304;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {    
      font-size: 24px;
      line-height: 29px;
    }
  }

  .inputWrapper {
    margin: 0 auto;
    width: 100%;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 100%;
    }

    .inputLabel {
      height: 41px;                        
      font-style: normal;
      font-weight: 500;
      font-size: 28px;
      line-height: 41px;
      color: #231815;
      margin-top: 40px;
      margin-bottom: 10px;
      
      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        height: 20px;   
        font-size: 14px;
        line-height: 20px;
        margin-top: 10px;
      }
    }

    .inputItem {
      width: 100%;
      height: 60px;
      background: #EFEFEF;
      border-radius: 10px;

      &.content {
        height: 100%;
      }

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        height: 40px;
        border-radius: 5px;
      }
  
      .input {
        border: none;
        outline: none;
        width: calc(100% - 30px);
        height: 60px;
        padding: 0 15px;
        border-radius: 10px;
        background: #EFEFEF;
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 60px;
        color: #070304;

        &.content {
          height: 370px;
          resize: none;

          @media (max-width: ${constants.MOBILE_WIDTH}px) {
            padding-top: 10px;
            height: 200px;
            line-height: normal;
          }
        }

        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          height: 40px;
          border-radius: 5px;
          font-weight: 400;
          font-size: 14px;
          line-height: 40px;
          padding: 0 10px;
        }
  
        &::placeholder {
          color: #898989;
        }
      }

      .inputOption {
        color: #898989;
      }
    }
  }

  .btnWrapper {  
    width: 300px;
    height: 80px;
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 110px;
    background: #FF5000;
    border-radius: 10px;
    cursor: pointer;      
    font-weight: 700;
    font-size: 32px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
        
    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 100%;
      height: 40px;
      font-size: 16px;
      line-height: 23px;
      border-radius: 5px;
      margin-top: 20px;
      margin-bottom: 40px;
    }  
  }

  .infoWrapper {
    width: 100%;
    height: 96px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      flex-direction: column;
      height: 100%;
    }  

    .infoItem {
      display: flex;
      height: 96px;
      flex-direction: column;
      justify-content: space-between;
      text-align: left;

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        height: 44px;
        text-align: center;
      }  

      &.address {
        width: 480px;
        border-right: 1px solid rgba(137, 137, 137, 0.5);

        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          width: 100%;
          border-right: none;
        }  
      }
      &.tel {
        width: 243px;
        margin-left: 100px;
        border-right: 1px solid rgba(137, 137, 137, 0.5);

        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          width: 100%;
          border-right: none;
          margin-left: 0;
          margin-top: 21px;
          margin-bottom: 21px;
        }
      }
      &.email {
        margin-left: 100px;
        width: 380px;

        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          width: 100%;
          margin-left: 0;
        }
      }
    }

    .infoUpper {
      font-family: ${constants.INTER_FONT};  
      font-style: normal;
      font-weight: 700;
      font-size: 25px;
      line-height: 30px;
      color: #070304;

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        font-size: 16px;
        line-height: 19px;
      }
    }

    .infoLower {
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
      line-height: 36px;
      color: #FF5000;

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        font-size: 14px;
        line-height: 20px;
      }
    }
  }

  .mapWrapper {
    width: 100%;
    height: 700px;
    margin: 110px 0;

    .mapInnerWrapper {
      width: 100%;
      height: 100%;
    }

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      height: 180px;
      margin: 40px 0;
    }
  }
`;


