import React, { useState, useEffect } from 'react';
import './App.css';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import Fetch from './api/Fetch';
import FetchTemp from './api/GetTemp';
import TempDevice from './devices/temperature/Temp';
import TestApi from './api/TestFetch';
import { Grid, Header, Sidebar } from './layout';
import TemperatureDetails from './devices/temperature/temperatureDetails';



const HomePage = () => {
  return (
    <>

      <h1>Dashboard</h1>
     
     </>
  );
};
const App = () => {
  return (
    <>
    <Router>
  <Header />
    <Grid>                    
      <Sidebar />
      
        <Route exact path="/" component={HomePage} />
        <Route exact path="/temperature" component={TempDevice} />
        <Route path="/temperature/details/:idx" component={TemperatureDetails} />
      
    </Grid>
    </Router>  
    </>
  );
};

export default App;
