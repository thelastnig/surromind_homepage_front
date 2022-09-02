import React, { Component } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player'
import { Link, withRouter } from 'react-router-dom';

// import constants from constants.js
import * as constants from '../../lib/constants';

// import image
import headerImage from '../../images/new/aboutusBack.jpg';
import headerImageMobile from '../../images/new/aboutusBackMobile.png';
import logoBHSN from '../../images/new/logoBHSN.png';
import logoKCCI from '../../images/new/logoKCCI.png';
import logoYper from '../../images/new/logoYper.png';
import logoKI from '../../images/new/logoKI.png';
import logoCoxem from '../../images/new/logoCoxem.png';
import logoDaeduck from '../../images/new/logoDaeduck.png';
import logoHD from '../../images/new/logoHD.png';
import logoKAIST from '../../images/new/logoKAIST.png';
import logoKDX from '../../images/new/logoKDX.png';
import logoETRI from '../../images/new/logoETRI.png';
import logoFlexsys from '../../images/new/logoFlexsys.png';
import logoFillin from '../../images/new/logoFillin.png';
import logoForest from '../../images/new/logoForest.png';
import logoGongjyuUniv from '../../images/new/logoGongjyuUniv.png';
import logoYBM from '../../images/new/logoYBM.png';
import logoEuclid from '../../images/new/logoEuclid.png';
import logoPecotek from '../../images/new/logoPecotek.png';
import logoAutoever from '../../images/new/logoAutoever.png';
import logoKTcloud from '../../images/new/logoKTcloud.png';
import logoDaedong from '../../images/new/logoDaedong.png';

// import slide
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


class CompanyInfo extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  handleClick = (url) => {
    this.props.history.push(url);
  }
  
  render() {

    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      initialSlide: 0
    };

    const partnersLogos = [logoBHSN, logoKTcloud, logoAutoever, logoPecotek, logoEuclid, logoYBM, logoGongjyuUniv, logoForest, logoFillin, logoFlexsys, logoETRI, logoKDX, logoKAIST]
    const customersLogos = [logoHD, logoDaeduck, logoPecotek, logoBHSN, logoAutoever, logoKI, logoKCCI, logoDaedong, logoYper, logoCoxem]

    const partnersSlides = partnersLogos.map((banner, index) => {
      return (
        <div className='eachSlide' key={index}>
            <img src={banner} className="slideLogo"/>
        </div>
      )
    });

    const customersSlides = customersLogos.map((banner, index) => {
      return (
        <div className='eachSlide' key={index}>
            <img src={banner} className="slideLogo"/>
        </div>
      )
    });
  
    return (
      <>
        <HeaderImageWrapper>
          <div className='headerTextWrapper'>
            <div className='headerText'>About us</div>
          </div>
        </HeaderImageWrapper>
        <HeaderImageWrapperMobile>
          <div className='headerTextWrapper'>
            <div className='headerText'>About us</div>
          </div>
        </HeaderImageWrapperMobile>
        <Wrapper>
          <div className='innerWrapper'>
            <div className="videoWrapper">
              <ReactPlayer 
                url='https://www.youtube.com/watch?v=YTlQ2ZzLR04'
                width={1300}
                height={700}
                controls={true}
                onStart={this.clickButton}             
              />
            </div>
            <div className="videoWrapperMobile">
              <div className="playerWrapper">
                <ReactPlayer 
                  url='https://www.youtube.com/watch?v=YTlQ2ZzLR04'
                  width='100%'
                  height="100%"
                  className="reactPlayer"
                  controls={true}
                  onStart={this.clickButton}
                />
              </div>
            </div>
            <div className='textWrapper'>
              <div className='titleText'>Introduction</div>
              <div className='colorText'>
                Making AI, Empowering People
              </div>
              <div className='normalText'>
                써로마인드(Surromind)는 인간의 지능을 대리하는 인공지능(surrogate mind)을 의미합니다.<br/>
                인공지능과 사람이 협력하여 보다 발전된 사회를 만들고자는 써로마인더(Surrominder)의 도전의식을 담았습니다.
              </div>
              <div className='normalTextMobile'>
                써로마인드(Surromind)는 인간의 지능을 대리하는<br/>인공지능(surrogate mind)을 의미합니다.<br/>
                인공지능과 사람이 협력하여 보다 발전된 사회를<br/>만들고자는 써로마인더(Surrominder)의<br/>도전의식을 담았습니다.
              </div>

              <div className='normalText middle'>
                써로마인드는 국내 최고의 인공지능 핵심기술을 보유한 AI 솔루션 개발 전문기업입니다. 서울대 인공지능 전문가, 소프트웨어<br/>
                전문가, 산업분야 전문가들이 협력하여 다양한 산업분야에서 활용될 수 있는 기술과 제품을 개발하고 있습니다.<br/>
                원천기술 연구 개발 연략과 풍부한 응용기술 사업화 경험을 바탕으로 AI의 산업화와 대중화를 위한 기술과 제품을 제공합니다.
              </div>
              <div className='normalTextMobile middle'>
                써로마인드는 국내 최고의 인공지능 핵심기술을<br/>보유한 AI 솔루션 개발 전문기업입니다.<br/>서울대 인공지능 전문가, 소프트웨어<br/>
                전문가, 산업분야 전문가들이 협력하여 다양한 산업<br/>분야에서 활용될 수 있는 기술과 제품을 개발하고<br/>있습니다.<br/>
                원천기술 연구 개발 연략과 풍부한 응용기술 사업화<br/>경험을 바탕으로 AI의 산업화와<br/>대중화를 위한 기술과 제품을 제공합니다.
              </div>

              <div className='normalText'>
                써로마인드는 인공지능이 개발단계부터 상용화까지 활발히 활용될 수 있도록 항상 고객 관점에서 생각하고<br/>
                최적의 솔루션을 제공하기 위해 최선을 다하고 있습니다.
              </div>
              <div className='normalTextMobile'>
                써로마인드는 인공지능이 개발단계부터 상용화까지<br/>활발히 활용될 수 있도록 항상 고객 관점에서 생각하고<br/>
                최적의 솔루션을 제공하기 위해<br/>최선을 다하고 있습니다.
              </div>

              <div className='titleText last'>Mission</div>
              <div className='colorText'>
                인공지능의 산업화 Industrialization of AI
              </div>
              <div className='normalText'>
                비즈니스 현장에서 발생하는 데이터를 활용하여 완전히 새로운 가치와 산출물을 만들어낼 수 있도록<br/>
                전 산업 분야에 맞춤형 AI 솔루션을 지원합니다.
              </div>
              <div className='normalTextMobile'>
                비즈니스 현장에서 발생하는 데이터를 활용하여<br/>완전히 새로운 가치와 산출물을 만들어낼 수 있도록<br/>
                전 산업 분야에 맞춤형 AI 솔루션을 지원합니다.
              </div>
              <div className='colorText'>
                인공지능의 대중화 Democratization of AI
              </div>
              <div className='normalText last'>
                인공지능 비전문가도 누구나 쉽게 인공지능 기술을 적용할 수 있도록<br/>
                사용자 친화적인 AI 자동개발 플랫폼을 통해 인공지능 개발 인터페이스를 혁신합니다.
              </div>
              <div className='normalTextMobile last'>
                인공지능 비전문가도 누구나 쉽게<br/>인공지능 기술을 적용할 수 있도록<br/>
                사용자 친화적인 AI 자동개발 플랫폼을 통해<br/>인공지능 개발 인터페이스를 혁신합니다.
              </div>
            </div>


          </div>

          <div className='darkInnerWrapper'>
            <div className='textWrapper dark'>
              <div className='titleText white'>Values</div>
              <div className='colorText white'>
                인공지능이 만들어 갈 인간 중심의 가치를 생각합니다.
              </div>
              <div className='colorTextMobile white'>
                인공지능이 만들어 갈<br/>인간 중심의 가치를 생각합니다.
              </div>
              <div className='itemWrapper first'>
                <div className='circle'>Be Superb</div>
                <div className='circleText'>
                  누구나 쉽게 인공지능 기술을 적용할 수 있도록, 보다 편리하고 탁월한 유저 사용경험을<br/>추구합니다.
                </div>
                <div className='circleTextMobile'>
                  누구나 쉽게 인공지능 기술을 적용할 수 있도록,<br/>보다 편리하고 탁월한 유저 사용경험을<br/>추구합니다.
                </div>
              </div>
              <div className='itemWrapper'>
                <div className='circle'>Be Flexible</div>
                <div className='circleText'>
                  자유롭게 사고하고, 유연하게 세상의 변화를 인식합니다.
                </div>
                <div className='circleTextMobile'>
                  자유롭게 사고하고,<br/>유연하게 세상의 변화를 인식합니다.
                </div>
              </div>
              <div className='itemWrapper'>
                <div className='circle'>Be Bold</div>
                <div className='circleText'>
                  세상에 없던 것을 담대하게 이루어 낼 인공지능을 끊임없이 연구하고 개발합니다.
                </div>
                <div className='circleTextMobile'>
                  세상에 없던 것을 담대하게 이루어 낼 인공지능을<br/>끊임없이 연구하고 개발합니다.
                </div>
              </div>
              <div className='itemWrapper'>
                <div className='circle'>Be Trustworthy</div>
                <div className='circleText'>
                  인공지능으로 모든 것이 가능하다고 과대 포장하거나 확언하지 않습니다.
                </div>
                <div className='circleTextMobile last'>
                  인공지능으로 모든 것이 가능하다고<br/>과대 포장하거나 확언하지 않습니다.
                </div>
              </div>
            </div>
          </div>

          <div className='lowerInnerWrapper'>
            <div className='titleText mobile'>History</div>
            <div className='tableArea'>
              <div className='rowWrapper'>
                <div className='leftArea'>2022</div>
                <div className='rightArea'>
                  <div className='tableRow'>
                    <div className='tableRowLeft'>06</div>
                    <div className='tableRowRight'>써로마인드 회사 이전</div>
                  </div>
                  <div className='tableRow'>
                    <div className='tableRowLeft'>06</div>
                    <div className='tableRowRight'>KT클라우드 전략적 파트너쉽 체결</div>
                  </div>
                  <div className='tableRow'>
                    <div className='tableRowLeft'>02</div>
                    <div className='tableRowRight'>KDB ‘NextONE’ 4기 선정</div>
                  </div>
                  <div className='tableRow last'>
                    <div className='tableRowLeft'>01</div>
                    <div className='tableRowRight'>2022년 100대 인공지능 스타트업 선정</div>
                  </div>
                </div>
              </div>
              
              <div className='rowWrapper'>
                <div className='leftArea'>2021</div>
                <div className='rightArea'>
                  <div className='tableRow'>
                    <div className='tableRowLeft'>12</div>
                    <div className='tableRowRight'>‘2021 AI 바우처’ 우수 공급기업 선정</div>
                  </div>
                  <div className='tableRow'>
                    <div className='tableRowLeft'>08</div>
                    <div className='tableRowRight'>SURROMIND™ AI Studio 런칭</div>
                  </div>
                  <div className='tableRow last'>
                    <div className='tableRowLeft'>01</div>
                    <div className='tableRowRight'>YBMNET MOU 체결</div>
                  </div>
                </div>
              </div>
              
              <div className='rowWrapper'>
                <div className='leftArea'>2020</div>
                <div className='rightArea'>
                  <div className='tableRow'>
                    <div className='tableRowLeft'>12</div>
                    <div className='tableRowRight'>현대오토에버 MOU 체결</div>
                  </div>
                  <div className='tableRow'>
                    <div className='tableRowLeft'>07</div>
                    <div className='tableRowRight'>써로마인드 회사 이전</div>
                  </div>
                  <div className='tableRow last'>
                    <div className='tableRowLeft'>06</div>
                    <div className='tableRowRight'>(주)써로마인드 사명 변경</div>
                  </div>
                </div>
              </div>
              
              <div className='rowWrapper'>
                <div className='leftArea'>2017</div>
                <div className='rightArea'>
                  <div className='tableRow'>
                    <div className='tableRowLeft'>10</div>
                    <div className='tableRowRight'>기업부설 연구서 설립</div>
                  </div>
                  <div className='tableRow last'>
                    <div className='tableRowLeft'>10</div>
                    <div className='tableRowRight'>2016 유망 스타트업 TOP10 선정</div>
                  </div>
                </div>
              </div>
              
              <div className='rowWrapper'>
                <div className='leftArea'>2016</div>
                <div className='rightArea'>
                  <div className='tableRow last sole'>
                    <div className='tableRowLeft'>12</div>
                    <div className='tableRowRight'>2017 NVIDIA Inception Program 선정</div>
                  </div>
                </div>
              </div>
              
              <div className='rowWrapper'>
                <div className='leftArea'>2015</div>
                <div className='rightArea'>
                  <div className='tableRow last sole'>
                    <div className='tableRowLeft'>07</div>
                    <div className='tableRowRight'>(주)써로마인드로보틱스 설립</div>
                  </div>
                </div>
              </div>
            </div>

            <div className='titleText mobile'>Awards</div>
            <div className='tableArea'>
              <div className='rowWrapper'>
                <div className='leftArea'>2021</div>
                <div className='rightArea'>
                  <div className='tableRow'>
                    <div className='tableRowRight'>대-스타 해결사 플랫폼 2탄, 중소벤처기업부 <strong>장관상</strong></div>
                  </div>
                  <div className='tableRow'>
                    <div className='tableRowRight'>AI 테스트베드 코리아 산업지능화 경진대회, <strong>최우수상</strong></div>
                  </div>
                  <div className='tableRow'>
                    <div className='tableRowRight'>2020 물품조립 AI로봇 챌린지, <strong>준우승</strong></div>
                  </div>
                  <div className='tableRow'>
                    <div className='tableRowRight'>4차 산업혁명 대상, 지디넷코리아, <strong>대표이사상 </strong></div>
                  </div>
                  <div className='tableRow double'>
                    <div className='tableRowRight double'>인공지능 챔피언십 LG AI 연구원 과제 우승, 중소벤처기업부 <strong>장관상</strong></div>
                  </div>
                  <div className='tableRow last double'>
                    <div className='tableRowRight double'>인공지능 온라인 경진대회 수치해석 분야 우승, 과학기술정보통신부 <strong>장관상</strong></div>
                  </div>
                </div>
              </div>
              
              <div className='rowWrapper'>
                <div className='leftArea'>2020</div>
                <div className='rightArea'>
                  <div className='tableRow double'>
                    <div className='tableRowRight double'>ActivityNet Entities Object Localization Challenge @CVPR, <strong>1위</strong></div>
                  </div>
                  <div className='tableRow last'>
                    <div className='tableRowRight'>AutoDL Challenge, 전체 7위, 한국 참여팀 중 <strong>1위</strong></div>
                  </div>
                </div>
              </div>
              
              <div className='rowWrapper'>
                <div className='leftArea'>2019</div>
                <div className='rightArea'>
                  <div className='tableRow last sole double'>
                    <div className='tableRowRight sole double'>국제로봇대회(RoboCup@Home Domestic Platform League), <strong>준우승</strong></div>
                  </div>
                </div>
              </div>
              
              <div className='rowWrapper'>
                <div className='leftArea'>2018</div>
                <div className='rightArea'>
                  <div className='tableRow last sole double'>
                    <div className='tableRowRight sole double'>Storytelling Workshop at NAACL 2018, Visual Storytelling Challenge, <strong>1위</strong></div>
                  </div>
                </div>
              </div>
              
              <div className='rowWrapper'>
                <div className='leftArea'>2017</div>
                <div className='rightArea'>
                  <div className='tableRow last sole double'>
                    <div className='tableRowRight sole double'>국제로봇대회(RoboCup@Home Social Platform League), <strong>우승</strong></div>
                  </div>
                </div>
              </div>
            </div>

            
            <div className='titleText mobile'>Partners</div>
              <div className='logoWrapper upper'>
                <div className='logo'><img src={logoBHSN} alt='logoBHSN'/></div>
                <div className='logo'><img src={logoKTcloud} alt='logoKTcloud'/></div>
                <div className='logo'><img src={logoAutoever} alt='logoAutoever'/></div>
                <div className='logo'><img src={logoPecotek} alt='logoPecotek'/></div>
                <div className='logo'><img src={logoEuclid} alt='logoEuclid'/></div>
                <div className='logo last'><img src={logoYBM} alt='logoYBM'/></div>
              </div>
              <div className='logoWrapper lower'>
                <div className='  plower'><img src={logoGongjyuUniv} alt='logoGongjyuUniv'/></div>
                <div className='logo plower'><img src={logoForest} alt='logoForest'/></div>
                <div className='logo plower'><img src={logoFillin} alt='logoFillin'/></div>
                <div className='logo plower'><img src={logoFlexsys} alt='logoFlexsys'/></div>
                <div className='logo plower'><img src={logoETRI} alt='logoETRI'/></div>
                <div className='logo plower'><img src={logoKDX} alt='logoKDX'/></div>
                <div className='logo plower last'><img src={logoKAIST} alt='logoKAIST'/></div>
              </div>
              <div className='logoWrapperMobile'>
                <div className='slideWrapper'>
                  <Slider {...settings}>
                      {partnersSlides}
                  </Slider>
                </div>
              </div>

            <div className='titleText mobile'>Customers</div>
              <div className='logoWrapper upper'>
                <div className='logo customer'><img src={logoHD} alt='logoHD'/></div>
                <div className='logo customer'><img src={logoDaeduck} alt='logoDaeduck'/></div>
                <div className='logo customer'><img src={logoPecotek} alt='logoPecotek'/></div>
                <div className='logo customer'><img src={logoBHSN} alt='logoBHSN'/></div>
                <div className='logo customer last'><img src={logoAutoever} alt='logoAutoever'/></div>
              </div>
              <div className='logoWrapper'>
                <div className='logo customer'><img src={logoCoxem} alt='logoCoxem'/></div>
                <div className='logo customer'><img src={logoKI} alt='logoKI'/></div>
                <div className='logo customer'><img src={logoYper} alt='logoYper'/></div>
                <div className='logo customer'><img src={logoKCCI} alt='logoKCCI'/></div>
                <div className='logo customer last'><img src={logoDaedong} alt='logoDaedong'/></div>
              </div>
              <div className='logoWrapperMobile last'>
                <div className='slideWrapper'>
                  <Slider {...settings}>
                      {customersSlides}
                  </Slider>
                </div>
              </div>
          </div>
        </Wrapper>
      </>
    );
  }
}

export default withRouter(CompanyInfo);

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
  height: 100%;
  margin: 0 auto;

  @media (max-width: ${constants.MOBILE_WIDTH}px) {
    width: 100%;
  }
  
  .innerWrapper {
    width: ${constants.INNER_WIDTH}px;
    margin: 0 auto;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: calc(100% - ${constants.MOBILE_HORIZONTAL_MARGIN}px);
      height: 100%;
      margin: 0 auto;
      border: none;
    }
  }

  .videoWrapper {
    margin: 180px auto;
    width: 1300px;
    height: 700px;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      display: none;
    }
  }

  .videoWrapperMobile {
    width: calc(100% - ${constants.MOBILE_HORIZONTAL_MARGIN}px);
    margin: 40px auto; 
    display: none;

    .playerWrapper {
      position: relative;
      padding-top: 56.25%; 
    }
    
    .reactPlayer {
      position: absolute;
      top: 0;
      left: 0;
    }

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      display: block;
    }
  }

  .textWrapper {
    width: 100%;
    margin: 0 auto;
    text-align: center;

    &.dark {
      width: ${constants.INNER_WIDTH}px;

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        width: 100%;
      }
    }
  }

  .titleText {
    width: 100%;
    font-family: ${constants.INTER_FONT};  
    font-style: normal;
    font-weight: 800;
    font-size: 65px;
    line-height: 79px;
    color: #070304;
    text-align: center;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      font-size: 24px;
      line-height: 29px;

      &.mobile {
        margin-top: 40px;
        margin-bottom: 20px;
      }
    }

    &.last {
      margin-top: 150px;

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        margin-top: 40px;
      }
    }

    &.white {
      color: #FFFFFF;
    }
  }

  .colorText {
    width: 100%;
    margin-top: 40px;
    margin-bottom: 30px;
    font-family: ${constants.NOTO_FONT};
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 36px;
    color: #FF5000;
    text-align: center;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      margin-top: 20px;
      margin-bottom: 10px;
      font-size: 14px;
      line-height: 17px;
    }

    &.white {
      color: #FFFFFF;

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        display: none;
      }
    }
  }

  .colorTextMobile {
    width: 100%;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 20px;
    font-style: normal;
    font-family: ${constants.NOTO_FONT};
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
    display: none;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      display: block;
    }

  }

  .normalText {
    width: 100%;
    font-family: ${constants.NOTO_FONT};
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 40px;
    color: #231815;
    text-align: center;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      display: none;
    }

    &.middle {
      margin: 40px 0;
    }

    &.last {
      margin-bottom: 150px;
    }
  }

  .normalTextMobile {
    display: none;
    width: 100%;
    font-family: ${constants.NOTO_FONT};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #231815;
    text-align: center;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      display: block;
    }

    &.middle {
      margin: 30px 0;
    }
  }

  .darkInnerWrapper {
    width: 100%;
    margin: 0 auto;
    background: #070304;
    padding: 150px 0;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      padding-top: 40px;
      padding-bottom: 10px;
      margin-top: 40px;
      width: 100%;
    }    
  }

  .itemWrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -40px;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 0px;
    }    

    &.first {
      margin-top: 10px;
    }
  }

  .circle {
    width: 280px;
    height: 280px;
    border-radius: 50%;
    border: 1px solid #FF5000;
    font-family: ${constants.INTER_FONT};  
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 280px;
    color: #FF5000;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 150px;
      height: 150px;
      font-size: 14px;
      line-height: 150px;
    }  
  }

  .circleText {
    width: 920px;
    text-align: left;
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 36px;
    font-family: ${constants.NOTO_FONT};
    color: #FFFFFF;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      display: none;
    }  
  }

  .circleTextMobile {
    width: 100%;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 30px;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    font-family: ${constants.NOTO_FONT};
    color: #FFFFFF;
    display: none;

    &.last {
      margin-bottom: 40px;
    }

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      display: block;
    }  
  }

  .lowerInnerWrapper {
    width: ${constants.INNER_WIDTH}px;
    margin: 0 auto;
    padding: 150px 0;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 95%;
      height: 100%;
      margin: 0 auto;
      border: none;
      padding: 0;
    }
  }

  .tableArea {
    width: 100%;
    margin: 80px 0 150px 0;
      
    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      margin: 0;
    }

    .rowWrapper {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      
      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }

    .leftArea {
      width: 280px;
      height: 62px;
      text-align: left;
      border-top: 3px solid #FF5000;
      font-family: ${constants.INTER_FONT};  
      font-style: normal;
      font-weight: 500;
      font-size: 43px;
      line-height: 52px;
      color: #FF5000;
      padding-top: 10px;
      
      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        border-top: 2px solid #FF5000;
        width: 100%;
        height: 69px;
        font-size: 24px;
        line-height: 29px;
      }
    }
    .rightArea {
      width: 920px;
      border-top: 3px solid #898989;
      
      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        border-top: 2px solid #898989;
        width: 100%;
      }
    }

    .tableRow {
      width: 100%;
      height: 76px;
      font-family: ${constants.NOTO_FONT};
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
      color: #231815;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      text-align: left;
      border-bottom: 3px dashed #898989;
      word-break: normal;
      
      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        width: 100%;
        height: 50px;
        font-size: 14px;
        line-height: 14px;
        border-bottom: 2px dashed #898989;
      }

      &.last {
        border-bottom: none;
        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          height: 60px;
        }
      }

      &.sole {
        height: 96px;
        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          height: 60px;
          margin-bottom: 20px;
        }
      }

      &.double {
        @media (max-width: ${constants.MOBILE_WIDTH}px) {
        }
      }
    }
    .tableRowLeft {
      width: 75px;
      
      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        width: 50px;
      }
    }
    .tableRowRight {
      height: 76px;
      line-height: 76px;
      white-space: normal;

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        height: 50px;
        line-height: 50px;
      }

      &.double {
        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          height: 50px;
          line-height: 20px;
          padding-top: 10px;
        }
      }

      &.sole {
        width: 100%;
        border-bottom: 3px dashed #898989;
      
        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          border-bottom: 2px dashed #898989;
        }
      }
    }
  }

  .logoWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
      
    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      display: none;
    }

    &.upper {
      margin-top: 80px;
      margin-bottom: 34px;
    }
    &.lower {
      margin-bottom: 150px;
    }
  }

  .logo {
    width: 195px;
    line-height: 49px;
    height: 49px;
    text-align: center;
    margin-right: 26px;

    img {
      vertical-align: middle;
    }

    &.plower {
      margin-right: 7px;
    }

    &.cupper {
      margin-right: 80px;
    }

    &.last {
      margin-right: 0px;
    }
  }

  .logoWrapperMobile {
    display: none;

    &.last {
      margin-bottom: 40px;
    }
      
    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      display: block;
    }
  }

  .slideWrapper {
    width: 100%;
  }

  .eachSlide {
    position: relative;
    outline: none;
    width: 140px;
    line-height: 50px;
    height: 50px;
    text-align: center;
    margin: 0 auto;
    img {
      vertical-align: middle;
      margin: 0 auto;
    }
  }
`;

