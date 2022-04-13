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

// recruit image(hidden)
import recruit_1 from '../../images/recruit_1.jpg';
import recruit_2 from '../../images/recruit_2.jpg';
import recruit_3 from '../../images/recruit_3.jpg';
import recruit_4 from '../../images/recruit_4.jpg';
import recruit_5 from '../../images/recruit_5.jpg';
import recruit_6 from '../../images/recruit_6.jpg';
import recruit_7 from '../../images/recruit_7.jpg';
import recruit_8 from '../../images/recruit_8.jpg';
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
          <div className="hiddenRecruitItem"><img src={recruit_1} alt='recruit_1' /></div>  
          <div className="hiddenRecruitItem"><img src={recruit_2} alt='recruit_2' /></div>  
          <div className="hiddenRecruitItem"><img src={recruit_3} alt='recruit_3' /></div>  
          <div className="hiddenRecruitItem"><img src={recruit_4} alt='recruit_4' /></div>  
          <div className="hiddenRecruitItem"><img src={recruit_5} alt='recruit_5' /></div>  
          <div className="hiddenRecruitItem"><img src={recruit_6} alt='recruit_6' /></div>        
          <div className="hiddenRecruitItem"><img src={recruit_7} alt='recruit_7' /></div>        
          <div className="hiddenRecruitItem"><img src={recruit_8} alt='recruit_8' /></div>       
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
    display: none;
  }
`;

