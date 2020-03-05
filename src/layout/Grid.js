import React from 'react';
import styled from 'styled-components'

const Grid = ({ name, ...restProps }) => {
    return (
      <GridContainer {...restProps} />
        
      

      
    );      
  }
export default Grid;

const GridContainer = styled.section`
    display: grid;
`;