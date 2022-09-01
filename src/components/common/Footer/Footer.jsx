import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
// import constants from constants.js
import * as constants from '../../../lib/constants';

// import images
import surroLogo from '../../../images/surromind_logo_new.png';
import iconBlog from '../../../images/new/iconBlog.png';
import iconFacebook from '../../../images/new/iconFacebook.png';
import iconMedium from '../../../images/new/iconMedium.png';
import iconYoutube from '../../../images/new/iconYoutube.png';
import iconInsta from '../../../images/new/iconInsta.png';

class Footer extends Component {
  
  state = {
    email: ''
  }

  handleChange = (event) => {
    this.setState({ 
      ...this.state,
      [event.target.name]: event.target.value 
    });
  }

  checkItem = () => {
    const { email } = this.state;
    const regexpEmail = /^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{1,5}$/;

    if (email === null || email === '') {
      alert('이메일 주소를 입력해 주세요.');
      return false;
    } else if (!regexpEmail.test(email)) {
      alert('이메일 형식이 올바르지 않습니다.');
      return false;      
    } 
    return true;
  }
  handleClick = () => {
    const { email } = this.state;

    const resultItems = this.checkItem();

    if (resultItems === false) {
      return;
    }

    alert('등록이 완료되었습니다. 감사합니다.');
    
    this.setState({ 
      email: '' 
    });
  }
  
  handleMenuClick = (url) => {
    const snsUrls = {
      'blog': 'https://blog.naver.com/surromind', 
      'facebook': 'https://www.facebook.com/%EC%8D%A8%EB%A1%9C%EB%A7%88%EC%9D%B8%EB%93%9C-108529144792278', 
      'medium': 'https://medium.com/surromind', 
      'youtube': 'https://www.youtube.com/channel/UC07FQVhFIyVMmWt3-fMBsuA', 
      'insta': 'https://www.instagram.com/surromind', 
    };
    window.open(snsUrls[url], '_blank');
  }

  render() {
    return (
      <FooterInnerWrapper>
        <div className='contentsWrapper'>
          <div className='leftArea'>
            <div className='leftUpper'>
              <div className='logoWrapper'>
                <img className='ImgLogo' src={surroLogo} height='24' alt='SurroMind Logo'/>
              </div>
              <div className='companyInfo'>
              Ⓒ 2020 SurroMind. All rights reserved​
              </div>
            </div>
            <div className='leftLower'>
              T : +82 2-872-5127<br/>
              ​E : contact@surromind.ai
            </div>

          </div>
          <div className='rightArea'>
            <div className='rightUpper'>
              <div className='iconWrapper' onClick={() => this.handleMenuClick('blog')}>
                <img src={iconBlog} width='65' alt='iconBlog'/>
              </div>
              <div className='iconWrapper' onClick={() => this.handleMenuClick('facebook')}>
                <img src={iconFacebook} width='65' alt='iconFacebook'/>
              </div>
              <div className='iconWrapper' onClick={() => this.handleMenuClick('medium')}>
                <img src={iconMedium} width='65' alt='iconMedium'/>
              </div>
              <div className='iconWrapper' onClick={() => this.handleMenuClick('youtube')}>
                <img src={iconYoutube} width='65' alt='iconYoutube'/>
              </div>
              <div className='iconWrapper' onClick={() => this.handleMenuClick('insta')}>
                <img src={iconInsta} width='65' alt='iconInsta'/>
              </div>
            </div>
            <div className='rightMiddle'>
              <div className='newletter'>
                SURROMIND 뉴스레터 구독하기
              </div>
              <div className='newletterInfo'>
                최신 소식과 인공지능 정보를 담은 이메일 뉴스레터를 받아보세요.
              </div>
              <div className='newletterInfoMobile'>
                최신 소식과 인공지능 정보를 담은<br/>이메일 뉴스레터를 받아보세요.
              </div>
            </div>
            <div className='rightLower'>
              <div className='inputText'>
                <input type='text' 
                  className='input' 
                  name='email' 
                  value={this.state.email}
                  onChange={this.handleChange}    
                  placeholder='이메일 주소' />
              </div>
              <div className='inputButton' onClick={this.handleClick}>구독하기</div>
            </div>
          </div>
        </div>
      </FooterInnerWrapper>
    );
  }
}

export default withRouter(Footer);

const FooterInnerWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 60px 0;
  background: #070304;

  @media (max-width: ${constants.MOBILE_WIDTH}px) {
    padding: 0;
  }

  .contentsWrapper {
    width: calc(100% - 280px);
    height: 257px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 95%;
      height: 100%;
      margin: 0 auto;
      padding: 40px 0;
      flex-direction: column;
    }
  }

  .leftArea {
    width: 50%;
    height: 100%;
    border-right: 1px solid rgba(255, 255, 255, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 100%;
      margin: 0 auto;
      border-right: none;
    }

    .leftUpper {
      .logoWrapper {
        height: 24px;
        margin-bottom: 11px;
        
        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          height: 12px;

          img {
            height: 12px;
          }
        }
      }
      .companyInfo {
        font-family: ${constants.INTER_FONT};
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;

        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          font-size: 12px;
          line-height: 15px;
          margin-top: 10px;
          margin-bottom: 20px;
        }
      }
    }
    .leftLower {
      font-family: ${constants.INTER_FONT};
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 36px;
      
      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        font-size: 20px;
        line-height: 24px;
      }
    }
  }

  .rightArea {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 100%;
    }

    .rightUpper {
      margin-left: 100px;
      height: 65px;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        justify-content: space-between;
        margin-left: 0;
        height: 40px;
        margin: 20px 0;
      }

      .iconWrapper {
        margin-right: 20px;
        cursor: pointer;

        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          margin-right: 0;
          img {
            width: 40px;
            height: 40px;
          }
        }
      }
    }
    .rightMiddle {
      margin-left: 100px;

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        margin-left: 0;
      }

      .newletter {
        font-family: ${constants.NOTO_FONT};
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 43px;

        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          font-size: 20px;
          line-height: 29px;
        }
      }

      .newletterInfo {
        font-family: ${constants.NOTO_FONT};
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 29px;

        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          display: none;
        }
      }

      .newletterInfoMobile {
        display: none;
        font-family: ${constants.NOTO_FONT};
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;

        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          display: block;
        }
      }
    }
    .rightLower {
      margin-left: 100px;
      width: 540px;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        width: 100%;
        margin-left: 0;
        margin-top: 20px;
      }

      .inputText {
        width: 380px;
        background: #FFFFFF;
        border-radius: 10px 0px 0px 10px;

        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          width: calc(100% - 90px);
          border-radius: 5px 0px 0px 5px;
        }

        .input {
          font-family: ${constants.NOTO_FONT};
          height: 60px;
          line-height: 60px;
          outline: none;
          border: none;
          outline: none;
          font-style: normal;
          font-weight: 400;
          font-size: 22px;
          color: #898989;
          margin-left: 15px;
          padding: 0px;

          @media (max-width: ${constants.MOBILE_WIDTH}px) {
            height: 40px;
            line-height: 40px;
            font-size: 14px;
            line-height: 20px;
          }
        }
      }

      .inputButton {
        width: 160px;
        height: 60px;
        background: #FF5000;
        border-radius: 0px 10px 10px 0px;
        font-family: ${constants.NOTO_FONT};
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 60px;
        text-align: center;
        color: #FFFFFF;
        cursor: pointer;

        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          width: 90px;
          height: 40px;
          border-radius: 0px 5px 5px 0px;
          font-size: 16px;
          line-height: 40px;
        }
      }
    }
  }
`;


