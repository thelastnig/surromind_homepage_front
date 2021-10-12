import React, { Component, useState } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

// import icon
import DeleteIcon from '@material-ui/icons/DeleteOutlineOutlined'; 

// import meterial UI
import { Checkbox } from '@material-ui/core';

// import spinner
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

// import constants from constants.js
import * as constants from '../../../lib/constants';

// setting datepicker
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from 'date-fns/locale/ko';

registerLocale("ko", ko);

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class AdminNews extends Component {
  state = {
    contentsDiv: [],
    contents: [],
    contentNum: 0,
    type: 'normal',
    shortTitle: '',
    title: '',
    tags: '',
    publishedDate: new Date(),
    checkedHidden: false,
    mainImageBase64: null,
    listImageBase64: null,
    loading: false,
  }

  handleSetLoading = (value) => {
    this.setState({
      loading: value
    });
  }
  
  handleMenuClick = (url) => {
    this.props.history.push(url);
  }

  handleChange = (event) => {
    this.setState({ 
      ...this.state,
      [event.target.name]: event.target.value 
    });
  }

  handleDate = (date) => {
    this.setState({
      publishedDate: date
    })
  }

  handleDelete = (id) => {
    console.log(id)
    const { contentsDiv, contents } = this.state;
    const newContentDiv = contentsDiv.filter((item) => (item.id !== id))
    const newContents = contents.filter((item) => (item.id !== id))
    this.setState({
      contents: newContents,
      contentsDiv: newContentDiv
    })
  }

  handleAddContent = () => {
    const { type, contents, contentNum, contentsDiv } = this.state;
    if (type == 'image') {
      contentsDiv.push({
        id: contentNum,
        type: type
      });
      contents.push({
        id: contentNum,
        type: type,
        src: '', 
      })
    } else if (type == 'imageWithCaption') {
      contentsDiv.push({
        id: contentNum,
        type: type
      });
      contents.push({
        id: contentNum,
        type: type,
        src: '', 
        caption: '',
      })
    } else {
      contentsDiv.push({
        id: contentNum,
        type: type
      });
      contents.push({
        id: contentNum,
        type: type,
        desc: '', 
      })
    }
    this.setState({
      type: 'normal',
      contentsDiv: contentsDiv,
      contentNum: contentNum + 1,
      contents: contents,
    })
  }

  handleContentsChange = (event, type, contentNum) => {
    const { contents } = this.state;
    const newContents = contents.filter(content => content.id !== contentNum);
    newContents.push({
      id: contentNum,
      type: type,
      desc: event.target.value,
    });
    this.setState({
      contents: newContents
    });
  }

  handleCaptionChange = (event, contentNum) => {
    const { contents } = this.state;
    const newContents = contents.filter(content => content.id !== contentNum);
    const selectedContent = contents.filter(content => content.id === contentNum)[0];
    selectedContent.caption = event.target.value;
    newContents.push(selectedContent);
    this.setState({
      contents: newContents
    });
  }

  handleCheckBoxChange = (event) => {
    this.setState({ 
      ...this.state,
      [event.target.name]: event.target.checked 
    });
  }

  handleChangeFile = (event, type) => {
    if (event.target.files.length > 1) {
      alert("이미지는 한 장만 업로드 가능합니다");
      return false;
    }
    const type64Name = type + 'Base64';
    if (event.target.files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); 
      const extension = event.target.files[0].name.split(".").pop();
      
      reader.onloadend = () => {
        const base64 = reader.result;
        if (base64) {
          var base64Sub = base64.toString()
			    base64Sub = base64Sub.split(',')[1];
          this.setState({
            [type64Name]: {
              'data': base64Sub,
              'extension': extension
            }
          })
        }
      }
    }
  }

  handleChangeContentFile = (event, type, contentNum) => {
    if (event.target.files.length > 1) {
      alert("이미지는 한 장만 업로드 가능합니다");
      return false;
    }

    const { contents } = this.state;
    const newContents = contents.filter(content => content.id !== contentNum);

    if (event.target.files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); 
      const extension = event.target.files[0].name.split(".").pop();
      reader.onloadend = () => {
        const base64 = reader.result;
        if (base64) {
          var base64Sub = base64.toString()
			    base64Sub = base64Sub.split(',')[1];
          if (type === 'imageWithCaption') {
            const selectedContent = contents.filter(content => content.id === contentNum)[0];
            selectedContent.src = {
              data: base64Sub, 
              extension: extension
            }
            newContents.push(selectedContent);
            this.setState({
              contents: newContents
            });
          } else {
            newContents.push({
              id: contentNum,
              type: type,
              src: {
                data: base64Sub, 
                extension: extension
              }
            });
            this.setState({
              contents: newContents
            });
          }
        }
      }
    }
  }

  handleSubmit = () => {
    const { title, shortTitle, tags, publishedDate, contents, checkedHidden, mainImageBase64, listImageBase64 } = this.state;
    if (title === '') {
      alert("제목을 입력하세요.");
      return;
    }
    else if (shortTitle === '') {
      alert("소제목을 입력하세요.");
      return;
    }
    else if (tags === '') {
      alert("태그를 하나 이상 입력하세요.");
      return;
    }
    else if (contents.length === 0) {
      alert("본문 내용을 하나 이상 입력하세요.");
      return;
    }
    this.handleSetLoading(true);
    const params = {
      "title": title,
      "short_title": shortTitle,
      "publish_date": moment(publishedDate).format('YYYY-MM-DD HH:mm:ss'),
      "tags": tags,
      "writer": "admin",
      "is_hidden": checkedHidden,
      "contents": contents,
      "main_image": mainImageBase64,
      "list_image": listImageBase64
    }

    const url = process.env.REACT_APP_BACKEND_API_ENDPOINT + 'add/';

    axios.post(url, params)
    .then(function (response) {
      console.log(response);
      alert("정상 처리 완료");
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handleCancel = () => {
	  this.props.history.push('news');
  }
 
  render () {
    const { title, shortTitle, tags, publishedDate, checkedHidden, type, contentsDiv, contents, loading } = this.state;

    const contentsRenderedDiv = contentsDiv.map((item, index) => {
      const type = item.type;
      const contentNum = item.id;
      const content = contents.filter(content => content.id === contentNum);      

      if (type == 'image') {
        return ( 
          <div className='contentItemWrapper' key={index}>
          <div className='contentLabel content'>- 이미지</div>
          <div className='contentItem content image'>
            <div className='contentLeft'>
              <div className='fileInputWrapper'>
                <input type='file' className='fileInput' onChange={(e) => this.handleChangeContentFile(e, type, contentNum)} />
              </div>
            </div>
            <div className='contentRight'>
              <DeleteIcon fontSize='large' className='btnDelete' onClick={() => this.handleDelete(contentNum)}/>
            </div>
          </div>
        </div>
        )
      } else if (type == 'imageWithCaption') {
        return (
          <div className='contentItemWrapper' key={index}>
          <div className='contentLabel content'>- 이미지 + 설명</div>
          <div className='contentItem content imageCaption'>
            <div className='contentLeft'>
              <div className='fileInputWrapper'>
                <input type='file' className='fileInput' onChange={(e) => this.handleChangeContentFile(e, type, contentNum)} />
              </div>
            </div>
            <div className='contentRight'>
              <DeleteIcon fontSize='large' className='btnDelete' onClick={() => this.handleDelete(contentNum)}/>
            </div>
          </div>
          <div className='contentItem text'>
            <input type='text' className='titleInput' placeholder='caption' value={content.caption} onChange={(e) => this.handleCaptionChange(e, contentNum)}></input>
          </div>
        </div>
        )
      } else if (type == 'link') {
        return (
          <div className='contentItemWrapper' key={index}>
            <div className='contentLabel content'>- 링크</div>
            <div className='contentItem content link'>
              <div className='contentLeft'>
                <input type='text' placeholder='link' value={content.desc} onChange={(e) => this.handleContentsChange(e, type, contentNum)}></input>
              </div>
              <div className='contentRight'>
                <DeleteIcon fontSize='large' className='btnDelete' onClick={() => this.handleDelete(contentNum)}/>
              </div>
            </div>
          </div>
        )
      } else if (type == 'subTitle') {
        return (
          <div className='contentItemWrapper' key={index}>
            <div className='contentLabel content'>- 소제목(bold)</div>
            <div className='contentItem content subtitle'>
              <div className='contentLeft'>
                <input type='text' placeholder='subTitle(bold)' value={content.desc} onChange={(e) => this.handleContentsChange(e, type, contentNum)}></input>
              </div>
                <div className='contentRight'>
                  <DeleteIcon fontSize='large' className='btnDelete' onClick={() => this.handleDelete(contentNum)}/>
                </div>
            </div>
          </div>
        )
      } else {
        return (     
          <div className='contentItemWrapper' key={index}>
            <div className='contentLabel content'>- 일반 텍스트</div>
            <div className='contentItem content normal'>
              <div className='contentLeft'>
                <textarea value={content.desc} onChange={(e) => this.handleContentsChange(e, type, contentNum)}></textarea>
              </div>
              <div className='contentRight'>
                <DeleteIcon fontSize='large' className='btnDelete' onClick={() => this.handleDelete(contentNum)}/>
              </div>
            </div>
          </div>)
      }
    })

    return (
      <AdminNewsWrapper>
        <ClipLoader color="red" loading={loading} css={override} size={150} />
        <div className='headerWrapper'>
          <div className='headerText'>News</div>
        </div>
  
        <div className='contentWrapper'>
          <div className='contentLabel'>■ 제목</div>
          <div className='contentItem text'>
            <input type='text' 
                    className='titleInput' 
                    name='title'
                    id='title'
                    value={title}
                    onChange={this.handleChange}   
                    placeholder="제목을 입력해주세요(디테일 페이지에서 나타나는 전체 제목, 100자 이내)"/>
          </div>
  
          <div className='contentLabel'>■ 소제목</div>
          <div className='contentItem text'>
              <input type='text' 
                      className='titleInput' 
                      name='shortTitle'
                      id='shortTile' 
                      value={shortTitle}
                      onChange={this.handleChange}   
                      placeholder="소제목을 입력해주세요(메인/리스트 페이지에서 나타나는 간결한 제목, 30자 이내)"/>
          </div>
  
          <div className='contentLabel'>■ 태그</div>
          <div className='contentItem text'>
            <input type='text' 
                    className='titleInput' 
                    name='tags' 
                    id='tags' 
                    value={tags}
                    onChange={this.handleChange}   
                    placeholder="태그를 입력해 주세요(콤마(,)로 구분)"/>
          </div>

          <div className='contentLabel'>■ 발행일</div>
          <div className='contentItem date'>
            <DatePicker 
              selected={publishedDate}
              locale="ko" 
              name='publishedDate'
              id='publishedDate'
              className='dateInput'
              onChange={(date) => this.handleDate(date)} />
          </div>

          <div className='contentLabel'>■ 숨김</div>
          <div className='contentItem check'>
            <Checkbox checked={checkedHidden} 
              value={checkedHidden} 
              onChange={this.handleCheckBoxChange} 
              name='checkedHidden' 
              className='checkInput'
              color="primary"/>
          </div>

          <div className='contentLabel'>■ 메인페이지 사진</div>
          <div className='contentItem file'>
            <input type='file' id='mainImage' className='fileInput' onChange={(e) => this.handleChangeFile(e, 'mainImage')} />
          </div>

          <div className='contentLabel'>■ 리스트페이지 사진</div>
          <div className='contentItem file'>
            <input type='file' id='listImage' className='fileInput' onChange={(e) => this.handleChangeFile(e, 'listImage')} />
          </div>

          <div className='contentLabel contentArea'>■ 본문</div>
          <div className='contentItem addContent'>
              <div className='addContentLabel'>컨텐츠 유형</div>
              <div className='addContentSelect'>
                <select name='type' 
                        id='type' 
                        className='input select' 
                        value={type}
                        onChange={this.handleChange}
                        >
                  <option value='normal' className='inputOption'>일반 텍스트</option>
                  <option value='image' className='inputOption'>이미지</option>
                  <option value='imageWithCaption' className='inputOption'>이미지 + 설명</option>
                  <option value='link' className='inputOption'>링크</option>
                  <option value='subTitle' className='inputOption'>소제목(bold)</option>
                </select>
              </div>
              <div className='addContentBtn' onClick={this.handleAddContent}>
                <div className='addContentBtnText'>+ 추가</div>
              </div>
            </div>

            <div>
              {contentsRenderedDiv}
            </div>

            <div className='submitWrapper'>
              <div className='submitBtn' onClick={this.handleSubmit}>
                <div className='submitBtnText'>작성</div>
              </div>
              <div className='cancelBtn' onClick={this.handleCancel}>
                <div className='cancelBtnText'>취소</div>
              </div>
            </div>

        </div>
      </AdminNewsWrapper>
    );
  }
}

export default withRouter(AdminNews);

const AdminNewsWrapper = styled.div`
  width: 100%;

  .headerWrapper {
    width: 100%;
    height: ${constants.ADMIN_SIDEBAR_ITEM_HEIGHT}px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: white;
    border-bottom: 2px solid ${oc.gray[7]};
  }

  .headerText{
    font-size: 20px; 
    margin-left: 25px;
  }

  .submitWrapper {
    width: 100%;
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    justify-content: center;
    align-items: center;


    .submitBtn {
      width: 100px;
      height: 40px;
      border-radius: 4px;
      background-color: #6200EE;
      display: flex;
      align-items: center;  
      justify-content: center;
      cursor: pointer;      
      font-size: 18px;
      color: white;
    }

    .cancelBtn {
      width: 100px;
      height: 40px;
      margin-left: 30px;
      border-radius: 4px;
      border: 2px solid #6200EE;
      display: flex;
      align-items: center;  
      justify-content: center;
      cursor: pointer;      
      font-size: 18px;
      font-weight: 600;
      color: #6200EE;
    }

  }

  .contentWrapper {
    width: 1200px;
    margin-top: 25px;
    margin-left: 25px;
  }

  .contentLabel {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
    color: ${oc.gray[8]};

    &.contentArea {
      margin-top: 150px;
    }

    &.content {
      font-size: 14px;
      font-weight: 500;
      color: ${oc.gray[6]};
    }
  }

  .contentItem {
    width: 100%;
    height: ${constants.ADMIN_SIDEBAR_ITEM_HEIGHT}px;
    background-color: white;
    margin-bottom: 30px;

    &.text, &.date, &.check, &.file {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    &.addContent {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    .titleInput {
      width: 90%;
      margin-left: 20px;
      height: 30px;
      border: none;
      outline: none;
      font-size: 16px;

      &::placeholder {
        color: ${oc.gray[5]};
      }
    }

    .dateInput {
      width: 150px;
      text-align: center;
      font-size: 16px;
      margin-left: 20px;
    }

    .checkInput {
      margin-left: 10px;
    }

    .fileInput {
      margin-left: 20px;
    }

    .addContentLabel {
      margin-left: 25px;
      margin-right: 70px;
      font-size: 16px;
    }

    .addContentSelect {
      font-size: 16px;
      width: 200px;
      margin-right: 200px;

      select {
        width: 100%;
        font-size: 16px;
      }
    }

    .addContentBtn {
      width: 80px;
      height: 30px;
      border-radius: 4px;
      background-color: #6200EE;
      display: flex;
      align-items: center;  
      justify-content: center;
      cursor: pointer;      
      font-size: 16px;
      color: white;
    }

    &.content {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .contentLeft {
        width: 95%;

        .fileInputWrapper {
          display: flex;
          align-items: center;  
          justify-content: flex-start;
        }

        input {
          margin-left: 20px;
          width: 100%;
          height: 30px;
          border: none;
          outline: none;
          font-size: 16px;

          &::placeholder {
            color: ${oc.gray[5]};
          }

          &.fileInput {
            font-size: 13px;
            height: 100%;
          }
        }
      }

      .contentRight {
        width: 3%;

        .btnDelete {
          cursor: pointer;
        }
      }

      &.normal {
        height: 200px;
        textarea {
          width: 100%;
          height: 170px; 
          resize: none;
        }
      }
    }
  }
    

`;



