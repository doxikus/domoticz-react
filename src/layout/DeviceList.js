import React from 'react';
import styled from 'styled-components'

const DevicesList = styled.section`
  margin:0px;
  padding:0px;
  dl{
    list-style-type:none;
    display:flex;
    flex-wrap:wrap;
    margin:30px 0 0 0;
    padding:0px;
    width: 100%;
    /* align-content: space-between; */
    dd{
      margin: 0 2% 2% 2%;
      width:96%;
      @media only screen and (min-width: 480px) {
        margin:0px 2% 30px 2%;
        width:46%;
      }
      @media only screen and (min-width: 720px) {
        margin:0px 1% 30px 1%;
        width:31.33%;        
      }
      @media only screen and (min-width: 1024px) {
        margin:0px 1% 30px 1%;
        width:23%;        
      }
      box-sizing:border-box;      
      /* flex-grow: 1; */
      display: flex;
      flex-direction: column;
      background:#333a48;
      border-radius: 4px;
    }
  }
`;

function Devices({ name, ...restProps }) {
    return (
      <DevicesList>
      <dl {...restProps}></dl>
      </DevicesList>
    );      
  }
export default Devices;