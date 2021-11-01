import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

// import constants from constants.js
import * as constants from '../../../lib/constants';


class AdminMain extends Component {

  state = {
    news: 0,
    banner: 0,
    rnd: 6
  }

  componentDidMount() {
    this.loadNewsContent(1);
    this.loadBanner();
  }

  loadNewsContent = (page) => {
    const url = process.env.REACT_APP_BACKEND_API_ENDPOINT + 'list/' + page + '/';

    axios.get(url)
    .then(response => {
      this.setState({
        news: response.data.count,
      });
    })
    .catch(error => {
      console.log(error);
    });
  }
  
  loadBanner = () => {
    const url = process.env.REACT_APP_BACKEND_API_BANNER_ENDPOINT + 'list/';

    axios.get(url)
    .then(response => {
      const itemsList = response.data.data;
      if (itemsList !== null) {
        this.setState({
          banner: itemsList.length
        })
      }
    })
    .catch(error => {
      console.log(error);
    });
  }
  
  handleMenuClick = (url) => {
    this.props.history.push(url);
  }

  render() {
    const { news, banner, rnd } = this.state;
    return (
      <AdminMainWrapper>
        <div className='adminInnerWrapper'>
          <div className='titleWrapper'><span>Surromind</span> Admin Page</div>
          <div className='itemWrapper'>
            <div className='item'>
              <div className='itemText news'>NEWS</div>
              <div className='itemCount'>{news}<span>건</span></div>
            </div>
            <div className='item'>
              <div className='itemText banner'>Banner</div>
              <div className='itemCount'>{banner}<span>건</span></div>
            </div>
            <div className='item'>
              <div className='itemText rnd'>R&#38;D</div>
              <div className='itemCount'>{rnd}<span>건</span></div>
            </div>
          </div>
        </div>
      </AdminMainWrapper>
    );
  }
}

export default withRouter(AdminMain);

const AdminMainWrapper = styled.div`
  
  .adminInnerWrapper {
    width: 800px;
    height: 500px;
    margin-top: 50px;
    margin-left: 100px;
  }

  .titleWrapper {
    font-size: 38px;
    color: ${oc.gray[8]};
    font-weight: 600;

    span {
      color: ${constants.POINT_COLOR};
    }
  }

  .itemWrapper {
    width: 100%;
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;

  }

  .item {
    width: 200px;
    height: 250px;
    background-color: white;
  }

  .itemText {
    margin-top: 20px;
    margin-left: 20px;
    font-weight: 700;
    font-size: 24px;

    &.news {
      color: ${oc.orange[8]};
    }

    &.banner {
      color: ${oc.lime[8]};
    }

    &.rnd {
      color: ${oc.indigo[8]};
    }
  }

  .itemCount {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    margin-top: 50px;
    font-weight: 700;
    font-size: 46px;

    span {
      margin-left: 5px;
      font-size: 20px;
      color: ${oc.gray[6]};
    }
  }

    
`;



