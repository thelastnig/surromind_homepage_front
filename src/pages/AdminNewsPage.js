import React from 'react';
import styled from 'styled-components';
import AdminSideBarContainer from '../containers/AdminSideBarContainer';
import AdminNewsContainer from '../containers/AdminNewsContainer';

import * as constants from '../lib/constants';

const AdminNewsPage = (props) => {

  return (
    <AdminWrapper>
      <AdminSideBartWrapper>
        <AdminSideBarContainer {...props} />
      </AdminSideBartWrapper>
      <AdminContentWrapper>
        <AdminNewsContainer {...props} />
      </AdminContentWrapper>
    </AdminWrapper>
  )
}

export default AdminNewsPage;

const AdminWrapper = styled.div`
  width: 100%;
  min-height: ${constants.ROOT_PAGE_MIN_HEIGHT}px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`;

const AdminSideBartWrapper = styled.div`
  width: ${constants.ADMIN_SIDEBAR_WIDTH}px;
  background-color: ${constants.ADMIN_SIDEBAR_COLOR};
`;

const AdminContentWrapper = styled.div`
  flex-grow: 1;
  background-color: ${constants.ADMIN_CONTENT_COLOR};
 
`;