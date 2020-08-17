import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// import constants from config.js
import * as constants from '../../lib/constants';

// import contents from mainRND.js
import mainRNDContents from '../../lib/rnd';

class MainRND extends Component {
  render() {
    const rndItems = mainRNDContents.map((item, index) => {
      const style = {
        "backgroundImage": `url(${item.image})`,
        "backgroundSize": "cover",
      }
      return (
        <div className='rndItem' index={index} style={style}>
          <div className='addLayer'>
            <div className='textWrapper'>
              <div className='itemTitle'>{item.title}</div>
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

export default MainRND;

const Wrapper = styled.div`
  width: 100%;
  height: ${constants.MAIN_RND_HEIGHT}px;
  margin: 0 auto;
  
  display: flex;
  align-items: center;
  justify-content: center;

  .contentsWrapper {
    width: ${constants.TOTAL_WIDTH}px;
    height: ${constants.MAIN_RND_HEIGHT - 150}px;
    margin: 0 auto;
  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .titleText {
      margin: 0 auto;
      font-size: ${constants.MAIN_TITLE_SIZE}px;
      font-weight: 600;
    }

    .itemWrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .rndItem {
      width: 380px;
      height: 263px;
      color: white;
      position: relative;
      cursor: pointer;

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

