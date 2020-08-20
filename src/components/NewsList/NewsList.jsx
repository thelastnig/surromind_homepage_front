import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// import constants from constants.js
import * as constants from '../../lib/constants';

// import UpperImage Component for upper image area
import UpperImage from '../common/UpperImage';

// import Card Component 
import CardNews from '../common/CardNews';

// import careers content
import newsContents from '../../lib/mainNews';

class NewsList extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render() {
    const cardList = newsContents.map((item, index) => {
      const url = `/surromindnews/article/${item.id}`;
      return (
        <CardNews
          key={index} 
          image={item.imageS} 
          title={item.title} 
          date={item.date}
          type={item.type} 
          url={url}
          />
      )
    })
  
    return (
      <Wrapper>
        <UpperImage text='News'/>
        <div className="cardWrapper">
          {cardList}
        </div>
      </Wrapper>
    );
  }
}

export default NewsList;

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
    align-content: flex-start
  }
`;

