import React from 'react';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
    return (
        <SidebarLayout>
            <h1>Sidebar</h1>
            <SideNavigation>
                <NavItem>
                    <NavLink exact to="/" >About</NavLink>
                </NavItem> 
                <NavItem>
                    <NavLink to="/temperature">Temperature</NavLink>
                </NavItem>                       
            </SideNavigation>
        </SidebarLayout>
      
    );      
  }
export default Sidebar;

const SidebarLayout = styled.aside`
    width:20%;    
    background:#111;
    min-height: 100vh;    
`;
const SideNavigation = styled.ul`
    margin:0px;
    padding:0px;
    list-style-type:none;
`;
const NavItem = styled.li`
    margin:0px;
    padding:0px;
    list-style-type:none;
    a{
        color:green;
        display:block;
        padding:5% 2%;
        &.active{
            background:#E6EDF4;
            color:#111;
        }
    }
`;
