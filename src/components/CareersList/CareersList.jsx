import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// import constants from constants.js
import * as constants from '../../lib/constants';

// import UpperImage Component for upper image area
import UpperImage from '../common/UpperImage';

// import Card Component 
import Card from '../common/Card';

// import careers content
import careersContents from '../../lib/careers';
import recruit_upper from '../../images/recruit_upper.jpg';
import recruit_ops from '../../images/recruit_ops.jpg';
import recruit_ml from '../../images/recruit_ml.jpg';
import recruit_platform from '../../images/recruit_platform.jpg';
import recruit_uiux from '../../images/recruit_uiux.jpg';
import recruit_web from '../../images/recruit_web.jpg';
import recruit_account from '../../images/recruit_account.jpg';
import recruit_admin from '../../images/recruit_admin.jpg';
import recruit_meta from '../../images/recruit_meta.jpg';
import smartFairPamphlet from '../../images/smartFairPamphlet.pdf';
import logo_saramin from '../../images/logo_saramin.jpg';
import logo_jobkorea from '../../images/logo_jobkorea.jpg';


class CareersList extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleClick = (type) => {
    if (type === 'saramin') {
      const saramin_link = 'https://www.saramin.co.kr/zf_user/jobs/relay/view?isMypage=no&rec_idx=43352963&recommend_ids=eJxNkMERAzEIA6vJH4NA6J1Crv8u4vhydmb47CCBAOFOo109xotvmNQavNoXBnJYfrt2Y4kas6uFKZJ40DOUWdubNGdPb90YIdYeZXCJZ1RAo4440%2BQPOmZK5BMyZsy19ycermRuxLAI7EUJorjR21jHi1n%2F4vbGuTcU1es5H2XLQDY%3D&view_type=search&searchword=%EC%8D%A8%EB%A1%9C%EB%A7%88%EC%9D%B8%EB%93%9C&searchType=search&gz=1&t_ref_content=generic&t_ref=search&paid_fl=n&search_uuid=ebfa6d11-f52b-4c5d-b6b3-9f03303826aa#seq=0'
      window.open(saramin_link, '_blank')
    } else {
      const jobkorea_link = 'https://www.jobkorea.co.kr/Recruit/GI_Read/38815857?Oem_Code=C1&logpath=1&stext=%EC%8D%A8%EB%A1%9C%EB%A7%88%EC%9D%B8%EB%93%9C&listno=1'
      window.open(jobkorea_link, '_blank')
    }
  };
  
  render() {
  const cardList = careersContents.map((item, index) => {
    const url = `/careers/content/${item.id}`;
    return (
      <Card
        key={index} 
        image={item.image} 
        title={item.title} 
        type={item.type} 
        url={url}
        />
    )
  })


  
    return (
      <Wrapper>
        <UpperImage text='Careers'/>
        <div className="careerListInnerWrapper">
          {/* <div className="cardWrapper">
            {cardList}
          </div> */}
          <div className="hiddenRecruitItem"><img src={recruit_upper} alt='recruit_upper' /></div>  
          <div className="hiddenRecruitItem"><img src={recruit_ops} alt='recruit_ops' /></div>  
          <div className="hiddenRecruitItem"><img src={recruit_ml} alt='recruit_ml' /></div>  
          <div className="hiddenRecruitItem"><img src={recruit_platform} alt='recruit_platform' /></div>  
          <div className="hiddenRecruitItem"><img src={recruit_uiux} alt='recruit_uiux' /></div>  
          <div className="hiddenRecruitItem"><img src={recruit_web} alt='recruit_web' /></div>    
          <div className="hiddenRecruitItem"><img src={recruit_account} alt='recruit_account' /></div>           
          <div className="hiddenRecruitItem"><img src={recruit_admin} alt='recruit_admin' /></div>         
          <div className="hiddenRecruitItem"><img src={recruit_meta} alt='recruit_meta' /></div>        
          <div className="pamphlet hidden"><a href={smartFairPamphlet}></a></div>
          <div className="siteArea">
            <div className="title">지원안내</div>
            <div className="buttonWrapper">
              <div className="siteButton first" onClick={() => this.handleClick('saramin')}>
                <div className="saraminlogo_wrapper"><img src={logo_saramin}/></div>
                <div className="buttonText">사람인 채용페이지</div>
                <div className="buttonContent">바로가기</div>
              </div>
              <div className="siteButton" onClick={() => this.handleClick('jobkorea')}>
                <div><img src={logo_jobkorea} /></div>
                <div className="buttonText">잡코리아 채용페이지</div>
                <div className="buttonContent">바로가기</div>
              </div>
            </div>
          </div>         
        </div>
        {/* <div className="hiddenRecruitArea">

        </div> */}
      </Wrapper>
    );
  }
}

export default CareersList;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  color: ${oc.gray[9]};

  .careerListInnerWrapper {
    width: ${constants.LIMIT_WIDTH}px;
    margin: 0 auto;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 95%;
    }
  }

  .cardWrapper {
    width: ${constants.CARD_WRAPPER_WIDTH}px;
    min-height: ${constants.CARD_WRAPPER_MIN_HEIGHT}px;
    margin: 0 auto;
    padding: 100px 0;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
  
    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 100%;
      justify-content: center;
    }
  }

  .hiddenRecruitItem {
    width: ${constants.CARD_WRAPPER_WIDTH}px;
    display: flex;
    margin: 0 auto;
    text-align: center;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 100%;
    }

    img {
      display: block;
      width: 100%;
      max-width: 100%;
      object-fit: cover;
    }
  }

  .siteArea {
    width: 1040px;
    margin: 0 auto;
    text-align: center;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 100%;
    }

    .title {
      width: 100%;
      margin: 100px auto;
      font-size: 30px;
      font-weight: 600;

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        margin: 50px auto;
        font-size: 20px;
      }
    }

    .buttonWrapper {
      width: 100%;
      margin-bottom: 200px;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        flex-direction: column;
        margin-bottom: 100px;
      }
    }

    .siteButton {
      width: 350px;
      height: 200px;
      border-radius: 10px;
      border: 1px solid #DEDEDE;
      cursor: pointer;

      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        width: 70%;
        height: 180px;
      }

      :hover {
        border: 1px solid #FF6634;
      }

      img {
        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          width: 150px;
        }
      }

      &.first {
        margin-right: 100px;

        @media (max-width: ${constants.MOBILE_WIDTH}px) {
          margin-right: 0px;
          margin-bottom: 50px;
        }
      }
    }

    .buttonText {
      font-size: 20px;
      font-weight: 600;
      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        font-size: 15px;
      }
    }

    .buttonContent {
      width: 50%;
      margin: 0 auto;
      margin-top: 10px;
      padding: 7px 0;
      background: #FF6634;
      color: white;
      text-align: center;
      font-size: 15px;
      font-weight: 600px;
      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        font-size: 14px;
      }
    }
  }

  .pamphlet {
    display: none
  }
`;

