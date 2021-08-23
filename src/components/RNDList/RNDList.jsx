import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// import constants from constants.js
import * as constants from '../../lib/constants';

// import UpperImage Component for upper image area
import UpperImage from '../common/UpperImage';

// import Card Component 
import Card from '../common/Card';

// import project contents
import rndContents from '../../lib/rnd';

class RNDList extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render() {
    const cardList = rndContents.map((item, index) => {
      return (
        <Card
          key={index} 
          image={item.image} 
          title={item.titleS} 
          type={item.type} 
          url={item.url}
          />
      )
    })
  
    return (
      <Wrapper>
        <UpperImage text='R&#38;D'/>
        <div className="rndInnerWrapper">
          <div className="cardWrapper">
            {cardList}
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default RNDList;


const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  color: ${oc.gray[9]};

  .rndInnerWrapper {
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
`;

