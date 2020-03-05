import React from 'react';
import styled from 'styled-components'

const Header = () => {
    return (
        <HeaderWrapper>
            <h1>Header</h1>
        </HeaderWrapper>
      
    );      
  }
export default Header;

const HeaderWrapper = styled.section`
    grid-column: 1 / span 2;
    grid-row: 1;
    position:sticky;
    top: 0;
    background: #333a48;
    z-index:10;
    color:#e6edf4;
    padding:0 1%;
`;
