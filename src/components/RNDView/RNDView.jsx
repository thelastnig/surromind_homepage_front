import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// import constants from constants.js
import * as constants from '../../lib/constants';

// import UpperImage Component for upper image area
import UpperImage from '../common/UpperImage';

// import project contents
import rndContents from '../../lib/rnd';

import BackToList from '../common/BackToList';

class RNDView extends Component {
  
  state = {
    selectedBarITem: 0
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleBarItemClick = (itemIndex) => {
    const item = itemIndex === 0 ? this.overviewSection : (itemIndex === 1 ? this.detailSection : this.featureSection) 
    window.scrollTo({top: item.offsetTop, behavior:'smooth'});
  
    this.setState({
      selectedBarITem: itemIndex
    });
  }
  
  render() {
    const { selectedBarITem } = this.state;
    let isLeftBarClicked = true;
    let isCenterBarClicked = false;
    let isRightBarClicked = false;
    if (selectedBarITem === 0) {
      isLeftBarClicked = true;
      isCenterBarClicked = false;
      isRightBarClicked = false;
    } else if (selectedBarITem === 1) {
      isLeftBarClicked = false;
      isCenterBarClicked = true;
      isRightBarClicked = false;
    } else {
      isLeftBarClicked = false;
      isCenterBarClicked = false;
      isRightBarClicked = true;
    }

    const { rndID } = this.props.match.params;
    const rndItem = rndContents.find(item =>
      item.id === rndID
    );

    const makeDivWithClassName = (content, index) => {
      let div = <div className="sectionContent normal" key={index}></div>

      if (content.type === 'image') {
        div = <div className="sectionContentImage" key={index}>
          <img src={content.src} alt='project image'/>
        </div>
      } else if (content.type === 'imageWithCaption') {
        div = <div className="sectionContentImage withCaption" key={index}>
          <img src={content.src} alt='project image'/>
        </div>
      } else if (content.type === 'subTitle') {
        div = <div className="sectionContent subTitle" key={index}>{content.desc}</div>
      } else if (content.type === 'textNormalCenter') {
        div = <div className="sectionContent center" key={index}>{content.desc}</div>
      } else if (content.type === 'imageCaption') {
        div = <div className="sectionContent caption" key={index}>{content.desc}</div>
      } else {
        div = <div className="sectionContent normal" key={index}>{content.desc}</div>
      }
      return div
    }

    const rndOverviewContentsList = rndItem.contents_overview.map((content, index) => {
      const div = makeDivWithClassName(content,index);
      return (
        div
      )
    });
    
    const rndDetailContentsList = rndItem.contents_detail.map((content, index) => {
      const div = makeDivWithClassName(content,index);
      return (
        div
      )
    });
    
    const rndFeatureContentsList = rndItem.contents_feature.map((content, index) => {
      const div = makeDivWithClassName(content,index);
      return (
        div
      )
    });

    return (
      <Wrapper isLeftBarClicked={isLeftBarClicked} isCenterBarClicked={isCenterBarClicked} isRightBarClicked={isRightBarClicked}>
        <UpperImage text='R&D'/>
        <div className="projectContentWrapper">
          <div className="mainTitle">{rndItem.title}</div>
          <div className="upperSelectBar">
            <div className="upperBarItem left" onClick={() => this.handleBarItemClick(0)}>
              <div className="barText left">Overview</div>
            </div>
            <div className="upperBarItem center" onClick={() => this.handleBarItemClick(1)}>
              <div className="barText center">Detail</div>
            </div>
            <div className="upperBarItem right" onClick={() => this.handleBarItemClick(2)}>
              <div className="barText right">Features</div>
            </div>
          </div>
          <div className="section overview" ref={(ref) => {this.overviewSection=ref}}>
            <div className="sectionTitle">Overview</div>
            {rndOverviewContentsList}
          </div>
        </div>  

        <div className="projectContentMiddleWrapper">
          <div className="projectContentMiddleInnerWrapper">
            <div className="section detail" ref={(ref) => {this.detailSection=ref}}>
              <div className="sectionTitle">Detail</div>
              {rndDetailContentsList}
            </div>
          </div>
        </div>

        
        <div className="projectContentWrapper bottom">
          <div className="section feature" ref={(ref) => {this.featureSection=ref}}>
            <div className="sectionTitle">Feature</div>
            {rndFeatureContentsList}
          </div>
        </div>  

        <div className="backBtnWrapper">
          <BackToList />
        </div>
      </Wrapper>
    );
  }
}

export default RNDView;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  .projectContentWrapper {
    width: ${constants.PROJECT_VIEW_WIDTH}px;
    margin: 0 auto;
    padding-top: 100px;

    &.bottom {
      padding-top: 0;
    }
  
    @media (max-width: ${constants.TOTAL_WIDTH}px) {
      width: 100%;
    }
  
    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 100%;
    }
  }

  .projectContentMiddleWrapper {
    width: 100%;
    margin: 0 auto;
    background-color: #F5F5F5;

    .projectContentMiddleInnerWrapper {
      width: ${constants.PROJECT_VIEW_WIDTH}px;
      margin: 0 auto;
  
      @media (max-width: ${constants.TOTAL_WIDTH}px) {
        width: 100%;
      }
  
      @media (max-width: ${constants.MOBILE_WIDTH}px) {
        width: 100%;
      }
    }
  }

  .backBtnWrapper {
    width: ${constants.PROJECT_VIEW_WIDTH}px;
    margin: 0 auto;
    margin-bottom: 100px;
  
    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 100%;
    }
  }

  .mainTitle {
    margin-bottom: 100px;
    text-align: center;
    font-family: ${constants.KOR_FONT};
    font-weight: 600;
    font-size: 35px;
  
    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      font-size: ${constants.RESPONSIVE_MAIN_TITLE_SIZE_MOBILE_MIDDLE};
    }
  }

  .upperSelectBar {
    width: 100%;
    height: 60px;

    display: flex;
    align-items: center;
  }

  .upperBarItem {
    flex: 1 1 0px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${oc.gray[6]};
    cursor: pointer;

    &.left {
      ${props => props.isLeftBarClicked && `  
        border-bottom: 2px solid ${constants.POINT_COLOR};
      `}
      ${props => !props.isLeftBarClicked && `  
        border-bottom: 1px solid ${oc.gray[6]};
      `}
    }

    &.center {
      ${props => props.isCenterBarClicked && `  
        border-bottom: 2px solid ${constants.POINT_COLOR};
      `}
      ${props => !props.isCenterBarClicked && `  
        border-bottom: 1px solid ${oc.gray[6]};
      `}
    }

    &.right {
      ${props => props.isRightBarClicked && `  
        border-bottom: 2px solid ${constants.POINT_COLOR};
      `}
      ${props => !props.isRightBarClicked && `  
        border-bottom: 1px solid ${oc.gray[6]};
      `}
    }
  }

  .barText {
    font-size: 18px;
    color: ${oc.gray[6]};
    font-weight: 600;
    text-align: center;

    &.left {
      ${props => props.isLeftBarClicked && `  
        color: ${constants.POINT_COLOR};
      `}
      ${props => !props.isLeftBarClicked && ` 
        color: ${oc.gray[6]};
      `}
    }

    &.center {
      ${props => props.isCenterBarClicked && `  
        color: ${constants.POINT_COLOR};
      `}
      ${props => !props.isCenterBarClicked && ` 
        color: ${oc.gray[6]};
      `}
    }

    &.right {
      ${props => props.isRightBarClicked && `  
        color: ${constants.POINT_COLOR};
      `}
      ${props => !props.isRightBarClicked && ` 
        color: ${oc.gray[6]};
      `}
    }
  }

  .section {
    width: 100%;
    padding: 100px 0;
  }

  .sectionTitle {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 20px;
    font-size: ${constants.MAIN_TITLE_SIZE}px;
    font-weight: 300;
    color: ${constants.POINT_COLOR};
  }

  .sectionContent {
    width: 100%;
    font-family: ${constants.NOTO_FONT};
    margin-bottom: 20px;

    &.center {
      text-align: center;
    }
    
    &.subTitle {
      font-weight: 600;
    }

    &.caption {
      font-size: 14px;
      font-color: ${oc.gray[8]};
      text-align: center;
      margin-bottom: 50px;

    }
  }

  .sectionContentImage {
    width: 100%;
    text-align: center;
    margin-bottom: 50px;

    &.withCaption {
      margin-bottom: 10px;
    }

    img {
      max-width: 80%;
    }
  }
`;


