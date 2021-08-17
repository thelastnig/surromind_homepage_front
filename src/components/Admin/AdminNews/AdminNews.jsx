import React, { useState } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link, withRouter } from 'react-router-dom';

// import constants from constants.js
import * as constants from '../../../lib/constants';

// import wysiwyg editor
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';

// setting datepicker
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from 'date-fns/locale/ko';

registerLocale("ko", ko);


const AdminNews = () => {
  
  const handleMenuClick = (url) => {
    this.props.history.push(url);
  }
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    // editorState에 값 설정
    setEditorState(editorState);
  };

  const [startDate, setStartDate] = useState(new Date());

  return (
    <AdminNewsWrapper>
      <div className='headerWrapper'>
        <div className='headerText'>News</div>
      </div>

      <div className='contentWrapper'>
        <div className='contentItem title'>
          <input type='text' className='titleInput' placeholder="제목을 입력해주세요."/>
        </div>

        <div className='contentItem tag'>

        </div>

        <div className='contentItem date'>
          <DatePicker 
            selected={startDate}
            locale="ko" 
            onChange={(date) => setStartDate(date)} />
        </div>
        <div className='contentItem editor'>
          <Editor
            // 에디터와 툴바 모두에 적용되는 클래스
            wrapperClassName="wrapper-class"
            // 에디터 주변에 적용된 클래스
            editorClassName="editor"
            // 툴바 주위에 적용된 클래스
            toolbarClassName="toolbar-class"
            // 툴바 설정
            toolbar={{
              // inDropdown: 해당 항목과 관련된 항목을 드롭다운으로 나타낼것인지
              list: { inDropdown: true },
              textAlign: { inDropdown: true },
              link: { inDropdown: true },
              history: { inDropdown: false },
            }} 
            placeholder="내용을 작성해주세요."
            // 한국어 설정
            localization={{
              locale: 'ko',
            }}
            // 초기값 설정
            editorState={editorState}
            // 에디터의 값이 변경될 때마다 onEditorStateChange 호출
            onEditorStateChange={onEditorStateChange}
          />

        </div>
      </div>
    </AdminNewsWrapper>
  );
  
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
    font-family: ${constants.APPLE_FONT};
    font-size: 20px; 
    margin-left: 25px;
  }

  .contentWrapper {
    width: 1200px;
    margin-top: 25px;
    margin-left: 25px;
  }

  .contentItem {
    width: 100%;
    height: ${constants.ADMIN_SIDEBAR_ITEM_HEIGHT}px;
    background-color: white;
    margin-bottom: 30px;

    &.title {
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
      font-family: ${constants.APPLE_FONT};
      font-size: 16px;

      &::placeholder {
        color: ${oc.gray[5]};
      }
    }

    &.editor {
      min-height: 500px;
    }


  }
    
`;



