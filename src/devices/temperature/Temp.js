import React, { useState, useEffect } from 'react';
import CardTemp from './cardTemperature';
import {DeviceItem, Devices} from '../../layout';
import FetchTemp from '../../api/GetTemp';
import SplashScreen from '../../components/ui/Splash';


function TempDevice (){
  const {data, isLoading, error} = FetchTemp()

  console.log(data)

  if (error) {
    return <p style={{ color: 'red' }}>{error.message}</p>
  }  
      return (
        <> 
        {isLoading ?
          <SplashScreen />          
        :
    <Devices>
      {data.map((device) => (
        <DeviceItem key={device.idx}>
          <CardTemp 
            title={device.Name}
            detailurl={device.idx}
            temp={device.Temp}            
            hum={device.Humidity}
            humstatus={device.HumidityStatus} 
            bar={device.Barometer} 
            barstatus={device.ForecastStr}  
            graphtitle={device.title}          
            graph={device.result.slice(0,20)}
            templevel={device.Temp}
            timeupdate={device.LastUpdate}
          />
          {/* {device.Barometer &&
             <p>{device.Barometer} </p>
          }
          {device.Temp >= 20 &&
          <h1>Toplo</h1>          
          }
          {device.Temp <= 20 &&
          <h1>Nije Toplo</h1>          
          }  */}
          
          
        </DeviceItem> 
      ))}
    </Devices>
    }  
      </>
      ) 
    }
  

  export default TempDevice; 

