import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import FetchTemp from '../../api/GetTemp';
import SplashScreen from '../../components/ui/Splash';


const TemperatureDetails = ({ match }) => {
    const {
      params: { idx },
    } = match;

    const {details, isLoading} = FetchTemp()
    console.log(details)
    
  
    // console.log(data)
  
    return (
      <>
      {isLoading ?
      <SplashScreen />
      :
      <Details>            
         <h1>{details.Name}</h1>
         <br />
         <p>{JSON.stringify(details)}</p>
      </Details>
      }
      </>
    );
  };

  export default TemperatureDetails

  const Details = styled.section`
    text-align:center;
    margin:0px;
    padding:0px;
    flex: 1;
  `;