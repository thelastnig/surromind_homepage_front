import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import ReactPlayer from 'react-player'

// import constants from config.js
import * as constants from '../../lib/constants';

// setting GA
import ReactGA from 'react-ga';

class MainVideo extends Component {

  clickButton = () => {
    ReactGA.event({
      category: 'User',
      action: 'play video',
      label: 'company promotion video',
    });
  }
  
  render() {
    return (
      <Wrapper>
        <div className='innerWrapper'>
          <div className="videoWrapper">
            <ReactPlayer 
              url='https://www.youtube.com/watch?v=6VwO4SXKxi4&t=78s'
              width={1300}
              height={700}
              controls={true}
              onStart={this.clickButton}             
            />
          </div>
          <div className="videoWrapperMobile">
            <ReactPlayer 
              url='https://www.youtube.com/watch?v=6VwO4SXKxi4&t=78s'
              width="100%"
              controls={true}
              onStart={this.clickButton}
            />
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default withRouter(MainVideo);

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  .innerWrapper {
    width: ${constants.INNER_WIDTH}px;
    margin: 0 auto;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      width: 95%;
      margin: 0 auto;
    }
  }

  .videoWrapper {
    margin: 0 auto;
    margin-top: 180px;
    margin-bottom: 170px;
    width: 1300px;
    height: 700px;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      display: none;
    }
  }

  .videoWrapperMobile {
    width: 100%;
    margin: 0 auto;
    margin-top: 34px;
    margin-bottom: 40px;
    display: none;

    @media (max-width: ${constants.MOBILE_WIDTH}px) {
      display: block;
    }

    @media (min-width: ${constants.MOBILE_WIDTH}px) {
      display: none;
    }
  }
`;

