import React, { useState, useEffect } from 'react';

const API_URL = 'http://192.168.5.10:8080/json.htm?';
const API_END_SYSTEM = 'type=command&param=getversion';
const API_END_DEVICES = 'type=devices&filter=all&used=true&order=Name';
const API_END_DEVICES_FAV = 'type=devices&used=true&filter=all&favorite=1';
const API_END_DEVICES_TEMP = 'type=devices&filter=temp&used=true&order=Name';
// const API_END_DEVICES_HISTORY = 'type=graph&sensor=temp&idx=4&range=day';

function FetchTemp() {
  
  const [data, setData] = useState([]);  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [idx, setIdx] = useState([]);    
  
  function fetchTempDevice() {
    setIsLoading(true);
    fetch(`${API_URL}${API_END_DEVICES_TEMP}`)
    .then(response => response.json())
    .then(data => {
        // console.log("old", data.result);
        return data.result;
    })
    .then(async data => {
        await Promise.all(data.map((e, index, array) => {
            return fetch(`${API_URL}type=graph&sensor=temp&idx=${e.idx}&range=day`)
                .then(response => response.json())                
                .then(data => {                    
                    array[index] = {...e, ...data};                    
                })
        }));
        setIsLoading(false);
        setData(data);         
    });

}

  useEffect(() => {
    fetchTempDevice();        
}, [])

  return {data, isLoading, error}
  }
export default FetchTemp;