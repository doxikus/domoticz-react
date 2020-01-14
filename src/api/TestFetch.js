import React, { useState, useEffect } from 'react';

// import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';



const API_URL = 'http://192.168.5.10:8080/json.htm?';
const API_END_SYSTEM = 'type=command&param=getversion';
const API_END_DEVICES = 'type=devices&filter=all&used=true&order=Name';
const API_END_DEVICES_FAV = 'type=devices&used=true&filter=all&favorite=1';
const API_END_DEVICES_TEMP = 'type=devices&filter=temp&used=true&order=Name';
// const API_END_DEVICES_HISTORY = 'type=graph&sensor=temp&idx=4&range=day';

function TestApi() {

    const data2 = [
        {
          name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
        },
        {
          name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
        },
        {
          name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
        },
        {
          name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
        },
        {
          name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
        },
        {
          name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
        },
        {
          name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
        },
      ];
  
  const [data, setData] = useState();  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
//   const deviceid = 4
  // const [data, setData] = useState({ result: [] });  
  const [idx, setIdx] = useState();    
  // const [tempdata, setTempdata] = useState({result: [] });    
  const [history, setHistory] = useState();   
  

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
                    // setHistory([...history, ...data.result]);
                    array[index] = {...e, ...data};
                    // console.log("update");
                    // console.log([data.result])
                    const graph = (data.result)
                    console.log([graph.slice(0,10)])

                    setHistory(data.result[0])
                    
                })
        }));
        setIsLoading(false);
        setData(data); 
        
        // console.log("new", data)
    });

}
    

  
  useEffect(() => {
    fetchTempDevice();      
    // fetchTempGraph();      
}, [])

// console.log(idx)
if(data){
    console.log(history)
}
// const graph = data

// console.log(data2)

//   return {data, isLoading, error}
    return (
        <>
        {isLoading ?
            <p>Loading</p>
          :    
          <>
    {data &&
    <div>

  
    <ul>
      {data.map(device => (
          
        <li key={device.idx}>            
            {device.Name}            
            {/* {device.result}           */}
{/* <LineChart width={600} height={300} data={device.result.slice(0,20)} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
<Line type="monotone" dataKey="te" stroke="#8884d8" />
<Line type="monotone" dataKey="ba" stroke="#8884d8" />
<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
<XAxis dataKey="d" />
<YAxis />
</LineChart> */}
<LineChart
        width={500}
        height={300}
        data={device.result.slice(0,10)}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="4 4" /> */}
        <XAxis dataKey={device.result.d} />
        {/* <YAxis /> */}
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="te" stroke="#8884d8" activeDot={{ te: 4 }} />
        <Line type="monotone" dataKey="ba" stroke="#82ca9d" />
        <Line type="monotone" dataKey="hu" stroke="#82ca9d" />
      </LineChart>
        </li> 
      ))}
    </ul>
    </div>
      }
      </>
      }
      </>
    )
  }
export default TestApi;