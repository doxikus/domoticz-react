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
  const deviceid = 4
  // const [data, setData] = useState({ result: [] });  
  const [idx, setIdx] = useState([]);    
  // const [tempdata, setTempdata] = useState({result: [] });    
  const [history, setHistory] = useState([]);    
  
  async function fetchTempDevice() {
    setIsLoading(true);
    fetch(
      `${API_URL}${API_END_DEVICES_TEMP}`      
      )
        .then(res => {
            if(res.ok){
                return res.json();
            }
            else{
                throw Error ('Error with data load')
            }
        })
        .then(res => {
            // setMovies(res.results);
            
            console.log(res.result)
            setData([...data, ...res.result]);            
            setIdx(res.result[0].idx);            
            setIsLoading(false);  
                          
        })
        .catch(error => {
            setError(error);
        }) 
  }
  async function fetchTempGraph() {
    fetch(
      `${API_URL}type=graph&sensor=temp&idx=${deviceid}&range=day`      
      )
        .then(res => {
            if(res.ok){
                return res.json();
            }
            else{
                throw Error ('Error with data load')
            }
        })
        .then(res => {
            // setMovies(res.results);
            console.log(res.result)
            setHistory([...history, ...res.result]);            
            // setIsLoading(false);  
                          
        })
        .catch(error => {
            setError(error);
        }) 
  }

  useEffect(() => {
    fetchTempDevice();      
    fetchTempGraph();      
}, [])

console.log(idx)

  return {data, isLoading, error}
  }
export default FetchTemp;