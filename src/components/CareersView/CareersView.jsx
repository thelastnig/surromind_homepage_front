import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// import constants from constants.js
import * as constants from '../../lib/constants';

// import UpperImage Component for upper image area
import UpperImage from '../common/UpperImage';

import careersContents from '../../lib/careers';

import BackToList from '../common/BackToList';

class CareersView extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleClick = () => {
    alert("준비 중입니다.");
  } 
  
  render() {
  const { careerID } = this.props.match.params;
  const careersItem = careersContents.find(item =>
    item.id === careerID
  );

  const careersContentsList = careersItem.contents.map((content, index) => {
    let div = <div className="careersContentEach normal"></div>

    if (content.type === 'subTitle') {
      div = <div className="careersContentEach subTitle">■ {content.desc}</div>
    } else {
      div = <div className="careersContentEach normal">- {content.desc}</div>
    }
    return (
      <div className="careersContentWrapper" key={index}>{div}</div>
    )
  })

    return (
      <Wrapper>
        <UpperImage text='Careers'/>
        <div className='careerContentWrapper'>
          <div className='infoText'>{careersItem.title}</div>
          <div className="imageWrapper">
            <img src={careersItem.image} alt={careersItem.title} width="450px" />
          </div>
          {careersContentsList}
          <div className='btnWrapper'>
            <div className='btn' onClick={this.handleClick}>
              지원하기
            </div>
          </div>
          <div className="backBtnWrapper">
            <BackToList />
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default CareersView;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  color: ${oc.gray[9]};

  .careerContentWrapper {
    width: ${constants.NEWS_CONTENT_WIDTH}px;
    margin: 0 auto;
    padding-top: 100px;
    padding-bottom: 100px;
  }

  .infoText {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 50px;
    padding-bottom: 10px;
    border-bottom: 2px solid ${oc.gray[7]};
    text-align: center;
    font-size: ${constants.MAIN_SUB_TITLE_SIZE_LARGE}px;
    font-weight: 600;
    font-family: ${constants.NOTO_FONT};
  }

  .imageWrapper {
    width: 450px;
    margin: 0 auto;
    margin-bottom: 50px;
  }

  .careersContentWrapper {
    .careersContentEach {
      font-family: ${constants.NOTO_FONT};
      font-size: 14px;
      line-height: 1.5;
      margin-bottom: 10px;
      padding-left: 10px;

      &.subTitle {
        font-size: 16px;
        font-weight: 600;
        margin-top: 30px;
        margin-bottom: 10px;
        padding-left: 0;
      }
    }
  }
  .btnWrapper {
    width: 100%;
    margin: 0 auto;
    margin-top: 70px;
    text-align: center;

    .btn {
      width: 200px;
      margin: 0 auto;
      text-align:center;
      border: 1px solid ${constants.POINT_COLOR};
      padding: 10px 0;
      
      font-size: 14px;
      font-family: ${constants.NOTO_FONT};
      color: ${constants.POINT_COLOR};
      cursor: pointer;

      &:hover {
        color: white;
        background-color: ${constants.POINT_COLOR};
      }
    }
  }

  .backBtnWrapper {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 100px;

  }
`;

