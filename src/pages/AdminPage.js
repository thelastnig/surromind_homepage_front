import React from 'react';
import styled from 'styled-components';
import AdminSideBarContainer from '../containers/AdminSideBarContainer';
import AdminMainContainer from '../containers/AdminMainContainer';
import AdminNewsContainer from '../containers/AdminNewsContainer';
import AdminNewsListContainer from '../containers/AdminNewsListContainer';

import * as constants from '../lib/constants';

const AdminPage = (props) => {
  const { page } = props.match.params;
  console.log("-----------------------------------");
  console.log(page);
  let contentComponent = <AdminMainContainer {...props} />
  if (page === "news") {
    contentComponent = <AdminNewsListContainer {...props} />
  } else if (page === "newsAdd") {
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