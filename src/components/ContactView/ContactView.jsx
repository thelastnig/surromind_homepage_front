import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// import constants from constants.js
import * as constants from '../../lib/constants';

// import UpperImage Component for upper image area
import UpperImage from '../common/UpperImage';

import BackToList from '../common/BackToList';

import { InputAdornment, TextField, FormGroup, FormControlLabel, Checkbox, Typography } from '@material-ui/core';

import BusinessCenter from "@material-ui/icons/BusinessCenter";
import PhoneIcon from "@material-ui/icons/Phone";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";

class ContactView extends Component {

  state = {
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  handleChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.checked });
  };

  handleClick = () => {
    alert("준비 중입니다.");
  } 

  
  render() {
    const styleHalf = {
      "width": "50%",
    };

    const styleFull = {
      "width": "100%",
    };

    const styleIcon = {
      "fill": `${oc.gray[7]}`,
      'fontSize': '20px',
    };

    const styleCheckLabel = {
      "fontFamily": `${constants.NOTO_FONT}`,
      "fontSize": "14px",
      "marginLeft": "-5px",
    }

    const { checkedA, checkedB, checkedC, checkedD, checkedE } = this.state; 
    return (
      <Wrapper>
        <UpperImage text='Contact'/>
        <div className='contactContentWrapper'>
          <div className='infoText'>
            문의하기
          </div>
          <div className='contactItem'>
            <div className='contactItemLeft'>유형</div>
            <div className='contactItemRight'>
              <FormGroup row>
                <FormControlLabel
                  control={<Checkbox checked={checkedA} onChange={this.handleChange} name="checkedA" color="primary" />}
                  label={<Typography style={styleCheckLabel}>머신러닝</Typography>} />
                <FormControlLabel
                  control={<Checkbox checked={checkedB} onChange={this.handleChange} name="checkedB" color="primary" />}
                  label={<Typography style={styleCheckLabel}>AI 솔루션</Typography>} />
                <FormControlLabel
                  control={<Checkbox checked={checkedC} onChange={this.handleChange} name="checkedC" color="primary"/>}
                  label={<Typography style={styleCheckLabel}>파트너쉽</Typography>} />
                <FormControlLabel
                  control={<Checkbox checked={checkedD} onChange={this.handleChange} name="checkedD" color="primary"/>}
                  label={<Typography style={styleCheckLabel}>채용/인사</Typography>} />
                <FormControlLabel
                  control={<Checkbox checked={checkedE} onChange={this.handleChange} name="checkedE" color="primary"/>}
                  label={<Typography style={styleCheckLabel}>기타</Typography>} />
              </FormGroup>
            </div>
          </div>
          <div className='contactItem'>
            <div className='contactItemLeft'>소속</div>
            <div className='contactItemRight'>
             <TextField id="company" variant="outlined" size="small" style={styleHalf} 
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <BusinessCenter style={styleIcon}/>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
          <div className='contactItem'>
            <div className='contactItemLeft'>성명</div>
            <div className='contactItemRight'>
             <TextField id="name" variant="outlined" size="small" style={styleHalf} 
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PersonIcon style={styleIcon}/>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
          <div className='contactItem'>
            <div className='contactItemLeft'>연락처</div>
            <div className='contactItemRight'>
             <TextField id="phone" variant="outlined" size="small" style={styleHalf} 
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PhoneIcon style={styleIcon}/>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
          <div className='contactItem'>
            <div className='contactItemLeft'>E-mail</div>
            <div className='contactItemRight'>
             <TextField id="email" variant="outlined" size="small" style={styleHalf} 
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <EmailIcon style={styleIcon}/>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
          <div className='contactItem'>
            <div className='contactItemLeft'>제목</div>
            <div className='contactItemRight'>
             <TextField id="title" variant="outlined" size="small" style={styleFull} />
            </div>
          </div>
          <div className='contactItem'>
            <div className='contactItemLeft'>내용</div>
            <div className='contactItemRight'>
             <TextField id="content" variant="outlined" size="small" multiline rows={10} style={styleFull} />
            </div>
          </div>
          <div className='btnWrapper'>
            <div className='btn' onClick={this.handleClick}>
              등록
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default ContactView;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  color: ${oc.gray[9]};

  .contactContentWrapper {
    width: ${constants.NEWS_CONTENT_WIDTH}px;
    margin: 0 auto;
    padding-top: 100px;
    padding-bottom: 100px;
  }

  .infoText {
    text-align: center;
    margin: 0 auto;
    margin-bottom: 50px;
    font-size: ${constants.MAIN_TITLE_SIZE}px;
    font-weight: 600;
    font-family: ${constants.NOTO_FONT};
  }

  .contactItem {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 25px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .contactItemLeft {
    width: 15%;
    font-size: 16px;
    font-weight: 500;
    font-family: ${constants.NOTO_FONT};
  }

  .contactItemRight {
    flex: 1;
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
`;

