import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link, withRouter } from 'react-router-dom';

// import constants from constants.js
import * as constants from '../../../lib/constants';

// import images
import surroLogo from '../../../images/surromind_logo_new.png';
import iconFaceBook from '../../../images/iconFacebook.png';
import iconFaceBook_h from '../../../images/iconFacebook_hover.png';
import iconInsta from '../../../images/iconInsta.png';
import iconInsta_h from '../../../images/iconInsta_hover.png';
import iconYoutube from '../../../images/iconYoutube.png';
import iconYoutube_h from '../../../images/iconYoutube_hover.png';
import iconNaver from '../../../images/iconNaver.png';
import iconNaver_h from '../../../images/iconNaver_hover.png';



class Footer extends Component {
  
  handleMenuClick = (url) => {
    this.props.history.push(url);
  }

  render() {
    return (
      <Wrapper>
        <div className='contentsWrapper'>
          <div className='upperArea'>
            <div className="leftItem">
              <div className="styledLink">
                <img className='ImgLogo' src={surroLogo} alt='SurroMind Logo'/>
              </div>
            </div>
            <div className="centerItem">
              <div className="barMenuWrapper">
                <div className="barMenu">
                  <div className="styledLink" onClick={() => this.handleMenuClick('/surromindnews/list/1')}>Surromind News</div>
                  <div className='subBarMenu'>
                    <div className="styledLink sub" onClick={() => this.handleMenuClick('/surromindnews/list/1')}>당사 소식</div>
                  </div>
                </div>
              </div>
              <div className="barMenu">
                <div className="styledLink" onClick={() => this.handleMenuClick('/')}>Who we are</div>
                  <div className='subBarMenu'>
                    <div className="styledLink sub" onClick={() => this.handleMenuClick('/surromindnews/list/1')}>회사 소개</div>
                  </div> 
              </div>
              <div className="barMenu">
                <div className="styledLink" onClick={() => this.handleMenuClick('/rnd/list/1')}>R&D</div> 
                  <div className='subBarMenu'>
                    <div className="styledLink sub" onClick={() => this.handleMenuClick('/rnd/list/1')}>Auto DL</div>
                    <div className="styledLink sub" onClick={() => this.handleMenuClick('/rnd/list/1')}>XAI</div>
                    <div className="styledLink sub" onClick={() => this.handleMenuClick('/rnd/list/1')}>AI Platform</div>
                  </div> 
              </div>
              <div className="barMenu">
                <div className="styledLink" onClick={() => this.handleMenuClick('/project/list/1')}>Project</div>
                <div className='subBarMenu'>
                  <div className="styledLink sub" onClick={() => this.handleMenuClick('/project/list/1')}>Project A</div>
                  <div className="styledLink sub" onClick={() => this.handleMenuClick('/project/list/1')}>Project B</div>
                  <div className="styledLink sub" onClick={() => this.handleMenuClick('/project/list/1')}>Project C</div>
                </div>
              </div>
              <div className="barMenu">
                <div className="styledLink" onClick={() => this.handleMenuClick('/careers/list/1')}>Careers</div> 
                <div className='subBarMenu'>
                  <div className="styledLink sub" onClick={() => this.handleMenuClick('/careers/list/1')}>구인</div>
                </div> 
              </div>
              <div className="barMenu">
                <div className="styledLink contact" onClick={() => this.handleMenuClick('/contact')}>Contact</div> 
                <div className='subBarMenu'>
                  <div className="styledLink sub" onClick={() => this.handleMenuClick('/contact')}>문의사항</div>
                </div> 
              </div>
            </div>
            <div className="rightItem">
            </div>
          </div>
          <div className='lowerArea'>
            <div className="leftItem">
              써로마인드<br/>
              주소: 서울특별시 관악구 관악로 116 학선빌딩 2층<br/>
              전화: +82-2-872-5127<br/>
              메일: contact@surromind.ai<br/>
              <br/>
              Copyright© 2020 SurroMind. All rights reserved.
            </div>
            <div className="rightItem">
              <div className="socialIconWrapper">
                <img src={iconFaceBook} alt="Facebook icon" className='iconSocial'/>
                <img src={iconInsta} alt="Facebook icon" className='iconSocial'/>
                <img src={iconYoutube} alt="Facebook icon" className='iconSocial'/>
                <img src={iconNaver} alt="Facebook icon" className='iconSocial last'/>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default withRouter(Footer);

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;

  .contentsWrapper {
    width: ${constants.TOTAL_WIDTH}px;
    height: 100%;
    margin: 0 auto;
  }

  .upperArea {
    width: 100%;
    height: ${constants.FOOTER_HEIGHT * 0.6}px;
    border: 1px solid white;

    display: flex;
    justify-content: space-between;

    .leftItem {
      width: 20%;
      margin-top: 50px;
  
      .ImgLogo {
        height: 20px;
      }
    }

    .styledLink {
      color: black;
      cursor: pointer;
    }

    .centerItem {
      width: 60%;
      margin-top: 50px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;

      .barMenuWrapper {
      }

      .barMenu {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 500;
        color: ${oc.gray[8]};
        margin-left: ${constants.HEADER_BAR_MENU_MARGIN}px;
        position: relative;
      }

      .subBarMenu {
        width: 100px;
        position: absolute;
        top: 300%;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
      }
  
      .styledLink {
        font-size: 14px;
        color: ${oc.gray[8]};
        text-decoration: none;

        &.sub {
          font-family: ${constants.NOTO_FONT};
          font-size: 11px;
          color: ${oc.gray[6]};
          text-decoration: none;
          margin-bottom: 10px;
        }
  
        &:hover {
          color: ${constants.POINT_COLOR};
        }
      }
    }
  
    .rightItem {
      width: 20%;
      margin-top: 50px;
    }
  }

  .lowerArea {
    width: 100%;
    height: ${constants.FOOTER_HEIGHT * 0.4}px;

    display: flex;
    justify-content: space-between;

    .leftItem {
      margin-top: 35px;
      width: 80%;
      font-size: 12px;
      font-family: ${constants.NOTO_FONT};
      color: ${oc.gray[8]};
    }

    .rightItem {
      width: 20%;
      margin-top: 35px;
      text-align: right;

      .socialIconWrapper {
        .iconSocial {
          margin-right: 15px;
          cursor: pointer;

          &.last {
            margin-right: 0;
          }
        }
      }
    }
  }
    
`;



