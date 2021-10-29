import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

// import constants from constants.js
import * as constants from '../../../lib/constants';

// import icon
import DeleteIcon from '@material-ui/icons/DeleteOutlineOutlined'; 

// import spinner
import { css } from "@emotion/react";
import MoonLoader from "react-spinners/MoonLoader";

// import dnd
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const override = css`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;  
`;


class AdminBanner extends Component {
  state = {
    loading: false,
    items: [],
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.loadBanner();
  }

  handleChange = (result) => {
    if (!result.destination) return;
    console.log(result);
    const { items } = this.state;
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    this.setState({
      items: items
    })
  };

  handleAddBanner = () => {
    const { items } = this.state;
    const newItem = {
      id: String(items.length + 1),
      desktop: {
        src: null,
        path: null
      },
      mobile: {
        src: null,
        path: null
      },
    };
    items.push(newItem);
    this.setState({
      items: items
    });
  }

  handleDelete = (id) => {
    const { items } = this.state;
    const newItems = items.filter((item) => (item.id !== id))
    this.setState({
      items: newItems
    })
  }

  handleChangeContentFile = (event, itemId, type) => {
    if (event.target.files.length > 1) {
      alert("이미지는 한 장만 업로드 가능합니다");
      return false;
    }

    const { items } = this.state;
    const selectedItem = items.find(item => item.id === itemId);
    let selectedItemIndex = null;

    if (typeof selectedItem == 'undefined' || selectedItem == null) {
      alert("사진 업로드 중 이상이 발생하였습니다. 관리자에게 문의하세요.");
      return;
    } else {
      selectedItemIndex = items.findIndex(item => item.id === itemId);
    }

    if (event.target.files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); 
      const extension = event.target.files[0].name.split(".").pop();

      reader.onloadend = () => {
        const base64 = reader.result;
        if (base64) {
          var base64Sub = base64.toString()
			    base64Sub = base64Sub.split(',')[1];
          selectedItem[type]['src'] = {
              data: base64Sub, 
              extension: extension
          };
          selectedItem[type]['path'] = base64;
          items[selectedItemIndex] = selectedItem;
          this.setState({
            items: items
          });
        }
      }
    }
  }

  handleSetLoading = (value) => {
    this.setState({
      loading: value
    });
  }

  handleSubmit = () => {
    const { items } = this.state;
    if (items.length === 0) {
      alert("배너를 하나 이상 입력하세요.");
      return;
    }
    for (let i = 0; i < items.length; i++) {
      if (items[i]['desktop']['path'] === null || 
        items[i]['desktop']['src'] === null || 
        items[i]['mobile']['path'] === null || 
        items[i]['mobile']['src'] === null) {
        alert("데스크탑 배너 이미지와 모바일 배너 이미지가 모두 포함되어야 합니다.");
        return;
      }
    }
    this.handleSetLoading(true);
    let params = {};
    let url = process.env.REACT_APP_BACKEND_API_BANNER_ENDPOINT + 'update/';
    params["contents"] = items;
    
    axios.post(url, params)
    .then((response) => {
      this.handleSetLoading(false);
      alert("등록이 완료되었습니다.");
      window.location.reload();
    })
    .catch((error) => {
      alert("게시물 처리 시 오류 발생. 다시 시도해 주세요.");
      this.handleSetLoading(false);
    });
  }

  loadBanner = () => {
    const url = process.env.REACT_APP_BACKEND_API_BANNER_ENDPOINT + 'list/';

    axios.get(url)
    .then(response => {
      const itemsList = response.data.data;
      const items = itemsList.map((item, index) => {
        const imageDesktopPath = process.env.REACT_APP_BACKEND_IMAGE_ENDPOINT + item.image_desktop;
        const imageMobilePath = process.env.REACT_APP_BACKEND_IMAGE_ENDPOINT + item.image_mobile;
        return {
          id: String(index),
          desktop: {
            src: item.base64desktop,
            path: imageDesktopPath
          },
          mobile: {
            src: item.base64mobile,
            path: imageMobilePath
          }
        };
      });
      this.setState({
        items: items
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    const { items, loading } = this.state;

    const bannerList = items.map((item, index) => {
      return (
        <Draggable key={item.id} draggableId={item.id} index={index}>
          {(provided) => (
            <div className='itemWrapper' key={index}
              ref={provided.innerRef}
              {...provided.dragHandleProps}
              {...provided.draggableProps}
            >
              <div className='itemSelector'>Item</div>
              <div className='item'>
                <div className='contentLeft'>
                  <div className='fileInputWrapper'>
                    <div className='fileType'>Desktop</div>
                    <input type='file' className='fileInput' onChange={(e) => this.handleChangeContentFile(e, item.id, 'desktop')} />
                  </div>
                </div>
                <div className='contentRight'>
                  <DeleteIcon fontSize='large' className='btnDelete' onClick={() => this.handleDelete(item.id)}/>
                </div>
              </div>
              <div className='imageWrapper'>
                {
                item.desktop.path !== null
                ?
                <img src={item.desktop.path} className='imagePre'/>
                :
                null
                }
              </div>
              <div className='item'>
                <div className='contentLeft'>
                  <div className='fileInputWrapper'>
                    <div className='fileType'>Mobile</div>
                    <input type='file' className='fileInput' onChange={(e) => this.handleChangeContentFile(e, item.id, 'mobile')} />
                  </div>
                </div>
                <div className='contentRight'>
                  <DeleteIcon fontSize='large' className='btnDelete' onClick={() => this.handleDelete(item.id)}/>
                </div>
              </div>
              <div className='imageWrapper'>
                {
                item.mobile.path !== null
                ?
                <img src={item.mobile.path} className='imagePre'/>
                :
                null
                }
              </div>
            </div>
          )}
        </Draggable>
      )
    })

    return (
      <AdminBannerWrapper>  
        <MoonLoader color='blue' loading={loading} css={override} size={60} />
        <div className='headerWrapper'>
          <div className='headerText'>Banner</div>
        </div>
        <div className='innerWrapper'>
          <div className='btnAddWrapper'>
            <div className='btnAdd' onClick={this.handleAddBanner}>
              <div className='btnAddText'>추 가</div>
            </div>
          </div>
          <div className='bannerWrapper'>
            <DragDropContext onDragEnd={this.handleChange}>
              <Droppable droppableId="banner">
                {(provided) => (
                  <div className='banner'
                        {...provided.droppableProps}
                        ref={provided.innerRef}>
                    {bannerList}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
          <div className='submitWrapper'>
            <div className='submitBtn' onClick={this.handleSubmit}>
              <div className='submitBtnText'>등 록</div>
            </div>
          </div>
        </div>
      </AdminBannerWrapper>
    );
  }
}

export default AdminBanner;

const AdminBannerWrapper = styled.div`
  width: 100%;
  margin: 0 auto;

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

  .innerWrapper {
    width: 100%;
  }

  .btnAddWrapper {
    width: 1200px;
    padding-top: 50px;
    padding-left: 100px;
    padding-right: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .btnAdd {
    width: 130px;
    height: 40px;
    border-radius: 10px;
    background-color: #ED7100;
    color: white;
    font-size: 20px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .bannerWrapper {
    margin-top: 50px;
    margin-left: 100px;
    width: 1200px;
  }

  .banner {
    width: 100%;
  }

  .itemWrapper {
    margin-bottom: 50px;
  }

  .itemSelector {
    width: 150px;
    height: 25px;
    padding-top: 5px;
    padding-left: 5px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: ${oc.gray[8]};
    color: white;
    font-size: 14px;
    cursor: pointer;
  }

  .item {
    width: 100%;
    height: ${constants.ADMIN_SIDEBAR_ITEM_HEIGHT}px;
    background-color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;

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

      .fileType {
        font-size: 14px;
        margin-left: 5px;
        font-weight: 700;
        color: ${oc.gray[7]};
        width: 5%;
      }

      input {
        margin-left: 20px;
        width: 95%;
        height: 30px;
        border: none;
        outline: none;
        font-size: 16px;

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
  }

  .imageWrapper {
    .imagePre {
      height: 150px;
    }
  }

  .submitWrapper {
    width: 1200px;
    padding: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    .submitBtn {
      width: 100px;
      height: 40px;
      border-radius: 4px;
      background-color: #ED7100;
      display: flex;
      align-items: center;  
      justify-content: center;
      cursor: pointer;      
      font-size: 18px;
      color: white;
    }
  }
}
`;

