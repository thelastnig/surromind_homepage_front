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
import recruit_admin from '../../images/recruit_admin.jpg';
import recruit_meta from '../../images/recruit_meta.jpg';
import smartFairPamphlet from '../../images/smartFairPamphlet.pdf';


class CareersList extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
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
          <div className="hiddenRecruitItem"><img src={recruit_admin} alt='recruit_admin' /></div>         
          <div className="hiddenRecruitItem"><img src={recruit_meta} alt='recruit_meta' /></div>        
          <div className="pamphlet hidden"><a href={smartFairPamphlet}></a></div>         
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

  .pamphlet {
    display: none
  }
`;

