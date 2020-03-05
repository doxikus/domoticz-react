import React from 'react';
import './App.css';
import Fetch from './api/Fetch';
import FetchTemp from './api/GetTemp';
import TempDevice from './devices/Temp';
import TestApi from './api/TestFetch';
import { Grid, Header, Sidebar } from './layout';

function App() {
  return (
    <div className="App"> 
    {/* <TestApi /> */}
    <Grid>
      <Header />
      {/* <Sidebar /> */}
      <TempDevice />     
    </Grid>
      {/* <FetchTemp />       */}
      {/* <Fetch /> */}
    </div>
  );
}

export default App;
