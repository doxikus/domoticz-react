import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import CardImageTemp from './ImagePlaceholder'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
  } from 'recharts';

//   import {
//     AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
//   } from 'recharts';

const CardWrapp = styled.div`
    width:100%;    
    padding:5%;
    transition: 0.3s;   
    color:#e6edf4;
    position:relative;
`;
const CardImage = styled.div`
    position:relative;  
    min-height:260px;  
    img {
        max-width:100%;
        border-radius: 8px;        
        opacity:0.7;
      }
`;
const DeviceTitle = styled.h2`
    font-size:18px;
    padding:0px 0px 10px 0px;
    margin:0px;
    font-weight:600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
const CardDataTemp = styled.div`
    font-size:34px;
    line-height:34px;
    font-weight:600;
    text-align:center;
    margin:10px 0px 10px 0px;
    text-shadow: 1px 1px 2px #111;
    i{
        padding-right:5px;
        font-size:27px;
        color:#C3CFDD;
    }  
`;
const CardDataHum = styled.div`    
    font-size:14px;
    font-weight:600;
    text-align:center;
    i{
        padding-right:5px;
        color:#C3CFDD;
    }  
`;
const CardDataBar = styled.div`    
    font-size:14px;
    font-weight:600;
    text-align:center;
    i{
        padding-right:5px;
        color:#C3CFDD;
    }  
`;
const CardTempGraph = styled.div`
    padding:0 2% 10% 2%;
    margin-top:30px;      
`;
const CardIcon = styled.div`
    font-size:64px;
    text-align:center;
    line-height:64px;
    margin:20px 0px;
    i{
        color: #C3CFDD;
        text-shadow: 1px 1px 2px #111;
        opacity:0.2;
    }
`;
const GraphTitle = styled.h5`
    font-size:12px;
    padding:10px 0px;
    margin:0px;
    font-weight:300;
    text-transform:uppercase;
    text-align:right;
    position: relative;  
    z-index: 1;  
    span{
        background-color:#333a48;
        padding-left:5px;
        &:after{
            content: '';  
            background-color: #C3CFDD; 
            opacity:0.1; 
            height: 1px;  
            display: block;  
            position: absolute;  
            top: 20px;  
            left: 0;  
            width: 100%; 
            z-index: -1; 
    }
    } 

`;
const Time = styled.h5`
    font-size:12px;
    padding:10px 0px;
    margin:0px;
    font-weight:300;
    text-transform:uppercase;
    text-align:right;
    position: relative;  
    z-index: 1;  
    span{
        background-color:#333a48;
        padding-right:5px;
        &:after{
            content: '';  
            background-color: #C3CFDD; 
            opacity:0.1; 
            height: 1px;  
            display: block;  
            position: absolute;  
            top: 20px;  
            left: 0;  
            width: 100%; 
            z-index: -1; 
    }
    } 

`;

const HoverCard = styled.div`
    padding:0 2% 10% 2%;
    position:absolute;
    top:0px;
    left:0px;
    width:0%;
    height:100%;
    z-index:2;
    background:#fff;   
    /* transition: visibility 0s linear 0.33s, opacity 0.33s linear; */
    transition: all .7s ease;
    &.hiddenhovercard{
        visibility: hidden;
        opacity: 0;        
    }
    &.activehovercard{
        visibility: visible;
        opacity: 1;    
        /* transition-delay: 0s; */
        /* height:100%; */
        width:80%;        
    }
`;

const CardTemp = props => {

    const [visible, setVisible] = useState(false);
    function hideMe() {
    setVisible(!visible);
    }
    return(                
        <CardWrapp>
          <CardImage>  
          <DeviceTitle>{props.title}</DeviceTitle> 
          <Time><span>{props.timeupdate}</span></Time>         
            {/* <CardImageTemp /> */}            
            <CardDataTemp> 
            <i className="wi wi-thermometer"></i>           
                {props.temp} ºC                 
            </CardDataTemp>  
            <CardIcon>
            { props.templevel >= 35
                ? <i className="wi wi-hot"></i>            
                : ( props.templevel >= 18
                    ? <i className="wi wi-day-sunny"></i>            
                    : ( props.templevel > 5
                    ? <i className="wi wi-day-haze"></i> 
                    : ( props.templevel < 5
                    ? <i className="wi wi-snowflake-cold"></i>
                    : 
                    null                                
                    )
                )
                )
                }
            
            </CardIcon>
            {props.hum ? 
            <CardDataHum>
             <i className="wi wi-humidity"></i>   {props.hum} % - {props.humstatus}
            </CardDataHum>            
            : 
            null
            }  
            {props.bar ? 
            <CardDataBar>
            <i className="wi wi-barometer"></i>{props.bar} hPa - {props.barstatus}
            </CardDataBar>            
            : 
            null
            }    
 
            </CardImage>
            <CardTempGraph> 
            <GraphTitle><span>{props.graphtitle}</span></GraphTitle>
                <ResponsiveContainer width="100%" height={100}>                    
                <LineChart data={props.graph}>
                <Line type="monotone" dataKey="te" stroke="#8793A4" strokeWidth={2} activeDot={{ r: 2 }}/>                 
                <Line type="monotone" dataKey="hu" stroke="#111111" strokeWidth={2} />
                <Line type="monotone" dataKey="ba" stroke="#A9B4C5" strokeWidth={2} />                 
                <Tooltip />
                {/* <Legend /> */}
                </LineChart>                
                </ResponsiveContainer>               
            </CardTempGraph>
            
            
            {/* <HoverCard
                className={visible ? 'activehovercard': 'hiddenhovercard'} 
                >
              Ovo je div koji će pokazati mnogo toga
              <button name="test" className="button bottom-corner" onClick={hideMe}>Close</button>
            </HoverCard> */}
          
          {/* <button name="test" className="button bottom-corner" onClick={hideMe}>Open</button> */}
          </CardWrapp> 
      
    );
    
};
export default CardTemp;


 