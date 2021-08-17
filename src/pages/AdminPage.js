import React from 'react';
import styled from 'styled-components';
import AdminSideBarContainer from '../containers/AdminSideBarContainer';
import AdminMainContainer from '../containers/AdminMainContainer';
import AdminNewsContainer from '../containers/AdminNewsContainer';

import * as constants from '../lib/constants';

const AdminPage = (props) => {
  const { page } = props.match.params;
  let contentComponent = <AdminMainContainer {...props} />

  if (page === "news") {
    contentComponent = <AdminNewsContainer {...props} />
  } else if (page === "rnd") {

  } else {
    contentComponent = <AdminMainContainer {...props} />
  }

  return (
    <AdminWrapper>
      <AdminSideBartWrapper>
        <AdminSideBarContainer {...props} />
      </AdminSideBartWrapper>
      <AdminContentWrapper>
        {contentComponent}
      </AdminContentWrapper>
    </AdminWrapper>
  )
}

export default AdminPage;

const AdminWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const AdminSideBartWrapper = styled.div`
  width: ${constants.ADMIN_SIDEBAR_WIDTH}px;
  min-height: ${constants.ROOT_PAGE_MIN_HEIGHT}px;
  background-color: ${constants.ADMIN_SIDEBAR_COLOR};
`;

const AdminContentWrapper = styled.div`
  flex-grow: 1;
  min-height: ${constants.ROOT_PAGE_MIN_HEIGHT}px;
  background-color: ${constants.ADMIN_CONTENT_COLOR};
 
`;