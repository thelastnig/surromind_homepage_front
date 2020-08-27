import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import oc from 'open-color';

// import constants from config.js
import * as constants from '../../lib/constants';

// import contents from mainRND.js
import mainRNDContents from '../../lib/rnd';

class MainRND extends Component {

  handleClick = (url) => {
    this.props.history.push(url);
  }

  render() {
    const rndItems = mainRNDContents.map((item, index) => {
      const style = {
        "backgroundImage": `url(${item.image})`,
        "backgroundSize": "cover",
      }
      return (
        <div className='rndItem' key={index} style={style} onClick={() => this.handleClick(item.url)}>
          <div className='addLayer'>
            <div className='textWrapper'>
              <div className='itemTitle'>{item.titleS}</div>
              <div className='itemSubTitle'>{item.subTitle}</div>
            </div>
          </div>
        </div>
      )
    })
  
    return (
      <Wrapper>
        <div className='contentsWrapper'>
          <div className="titleText">
            R&D
          </div>
          <div className="itemWrapper">
            {rndItems}
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default withRouter(MainRND);

const Wrapper = styled.div`
  width: 100%;
  padding: 75px 0;
  margin: 0 auto;
  
  display: flex;
  align-items: center;
  justify-content: center;

  .contentsWrapper {
    width: ${constants.TOTAL_WIDTH}px;
    height: ${constants.MAIN_RND_HEIGHT - 150}px;
    margin: 0 auto;
  
    @media (max-width: ${constants.TOTAL_WIDTH}px) {
      width: 100%;
      height: 100%;
    }
  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .titleText {
      margin: 0 auto;
      font-size: ${constants.MAIN_TITLE_SIZE}px;
      font-weight: 600;
  
      @media (max-width: ${constants.TOTAL_WIDTH}px) {
        font-size: ${constants.RESPONSIVE_MAIN_TITLE_SIZE};
        margin-bottom: 50px;
      }
    }

    .itemWrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
  
      @media (max-width: ${constants.TOTAL_SUB_WIDTH}px) {
        flex-direction: column;
        justify-content: center;
      }
    }

    .rndItem {
      width: 380px;
      height: 263px;
      color: white;
      position: relative;
      cursor: pointer;
  
      @media (max-width: ${constants.TOTAL_SUB_WIDTH}px) {
        margin-bottom: 25px;
      }

      .addLayer {
        background-color: rgba(0, 0, 0, 0);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &:hover {
          background-color: rgba(237, 113, 0, 0.7);
        }
      }

      .textWrapper {
        width: 90%;
        height: 90%;
        border: 1px solid white;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .itemTitle {
        font-size: ${constants.MAIN_ITEM_TITLE_SIZE}px;
        font-weight: 600;
        margin-bottom: 15px;
      }

      .itemSubTitle {
        font-size: ${constants.MAIN_ITEM_SUB_TITLE_SIZE}px;
      }
    }
  }
`;

