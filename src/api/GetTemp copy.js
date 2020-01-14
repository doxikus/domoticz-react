import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Device from '../devices/Temp';
import styled from 'styled-components'

const DeviceList = styled.section`
  margin:0px;
  padding:0px;
  ul{
    list-style-type:none;
    display:flex;
    flex-wrap:wrap;
    margin:0px;
    padding:0px;
    /* align-content: space-between; */
    li{
      padding:0px 2%;
      width:50%;
      box-sizing:border-box;
      margin-bottom:30px;
    }
  }
`;

const API_URL = 'http://192.168.5.10:8080/json.htm?';
const API_END_SYSTEM = 'type=command&param=getversion';
const API_END_DEVICES = 'type=devices&filter=all&used=true&order=Name';
const API_END_DEVICES_FAV = 'type=devices&used=true&filter=all&favorite=1';
const API_END_DEVICES_TEMP = 'type=devices&filter=temp&used=true&order=Name';
const API_END_DEVICES_HISTORY = 'type=graph&sensor=temp&idx=4&range=day';

function FetchTemp() {
  const [data, setData] = useState({ result: [] });    
  const [idx, setIdx] = useState({ result: [] });    
  const [tempdata, setTempdata] = useState({result: [] });    
  const [history, setHistory] = useState({ devicehistory: [] });    
  useEffect(() => {
      const fetchData = async () => {
        const result = await axios(        
          `${API_URL}${API_END_DEVICES_TEMP}`
          // `${API_URL}${API_END_DEVICES_HISTORY}`
          
        );
        const devicehistory = await axios(        
          `${API_URL}${API_END_DEVICES_HISTORY}`
          
        );
        setData(result.data);
        setHistory(devicehistory.data.result);
        setTempdata(devicehistory.data.result.Data)
        console.log(result.data.result)
        console.log(devicehistory.data.result)
        console.log(devicehistory.data.result.Data)
      };
      fetchData();
    }, []);

  // console.log(tempdata)  
  return (
    data
  );
  }
export default FetchTemp;