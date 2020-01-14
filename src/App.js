import React from 'react';
import './App.css';
import Fetch from './api/Fetch';
import FetchTemp from './api/GetTemp';
import TempDevice from './devices/Temp';
import TestApi from './api/TestFetch';

function App() {
  return (
    <div className="App"> 
    {/* <TestApi /> */}
    <TempDevice />     
      {/* <FetchTemp />       */}
      {/* <Fetch /> */}
    </div>
  );
}

export default App;
