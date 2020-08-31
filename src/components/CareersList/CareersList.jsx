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
        <div className="cardWrapper">
          {cardList}
        </div>
      </Wrapper>
    );
  }
}

export default CareersList;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  color: ${oc.gray[9]};

  .cardWrapper {
    width: ${constants.CARD_WRAPPER_WIDTH}px;
    min-height: ${constants.CARD_WRAPPER_MIN_HEIGHT}px;
    margin: 0 auto;
    padding: 100px 0;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
  
    @media (max-width: ${constants.TOTAL_SUB_WIDTH}px) {
      width: 100%;
    }
  
    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      justify-content: center;
    }
  }
`;

