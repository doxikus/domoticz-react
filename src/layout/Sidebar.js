import React from 'react';
import styled from 'styled-components'

const Sidebar = () => {
    return (
        <SidebarLayout>
            <h1>Sidebar</h1>
        </SidebarLayout>
      
    );      
  }
export default Sidebar;

const SidebarLayout = styled.section`
    width:30%;
    background:red;
    height:100%;
    min-height:100%;
`;