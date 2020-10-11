import React from 'react';
import styled from 'styled-components'
import { ThemeSwitcher } from '../styling/theme/themeSwitcher';

const Header = () => {
    return (
        <HeaderWrapper>
            <h1>Header</h1>
            <ThemeSwitcher />
        </HeaderWrapper>
      
    );      
  }
export default Header;

const HeaderWrapper = styled.header`
    /* grid-column: 1 / span 2;
    grid-row: 1;

    
    z-index:10;
    color:#e6edf4;
    padding:0 1%; */
    position:sticky;
    top: 0;
    background: #333a48;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index:10;
`;
