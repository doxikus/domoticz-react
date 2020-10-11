import React, { useState, useEffect } from 'react';

// const API_URL = 'http://192.168.5.10:8080/json.htm?';
// const API_END_SYSTEM = 'type=command&param=getversion';
// const API_END_DEVICES = 'type=devices&filter=all&used=true&order=Name';
// const API_END_DEVICES_FAV = 'type=devices&used=true&filter=all&favorite=1';
// const API_END_DEVICES_TEMP = 'type=devices&filter=temp&used=true&order=Name';
// const API_DEVICE_DETAILS = 'type=devices&rid='
// const API_END_DEVICES_HISTORY = 'type=graph&sensor=temp&idx=4&range=day';

function FetchTemp() {
  
  const [data, setData] = useState([]);  
  const [details, setDetails] = useState([]);  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [idx, setIdx] = useState([]);    
  

  function fetchTempDevice() {
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_END_DEVICES_TEMP}`)
    .then(response => response.json())
    .then(data => {
        // console.log("old", data.result);
        return data.result;
    })
    .then(async data => {
        await Promise.all(data.map((e, index, array) => {
            return fetch(`${process.env.REACT_APP_API_URL}type=graph&sensor=temp&idx=${e.idx}&range=day`)
                .then(response => response.json())                
                .then(data => {                    
                    array[index] = {...e, ...data};                    
                })
        }));
        setIsLoading(false);
        setData(data);         
    });

}
function Tempdetails(){
  setIsLoading(true);
  fetch(`${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_DEVICE_DETAILS}${idx}`)
        .then((res) => res.json())
        .then((response) => {
          console.log(response)
          console.log(response.result[0])
          setDetails(response.result[0]);
          setIsLoading(false);
          // console.log(`https://swapi.dev/api/people/${personId}`);
        })
        .catch((error) => console.log(error));
}

  useEffect(() => {
    fetchTempDevice();        
    Tempdetails();
}, [idx])

  return {data, isLoading, error, details}
  }

export default FetchTemp;