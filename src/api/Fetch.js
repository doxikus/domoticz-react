import React from 'react';
import axios from 'axios';


const API_URL = 'http://192.168.5.10:8080/json.htm?';
const API_END_SYSTEM = 'type=command&param=getversion';
const API_END_DEVICES = 'type=devices&filter=all&used=true&order=Name';
const API_END_DEVICES_FAV = 'type=devices&used=true&filter=all&favorite=1';


// class Fetch extends Component {
    export default class Fetch extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                system: [],
                devices: []
            }
          }
    // state = {
    //     system: [],
    //     devices: []
    //   }    
    
      componentDidMount() {        
        axios.get(`${API_URL}${API_END_DEVICES_FAV}`)
          .then(res => {
            const devices = res.data.result;
            this.setState({ devices });
            console.log(devices);
          })
      }
    
    render() { 
        // console.log(this.state);
        return ( 
            <>
            <ul>
            { this.state.devices.map(device => 
            <li key={device.idx}>
                {device.Name}
                {device.Data}
            </li>
            )}
            </ul>           
          </>
         );
    }
}
 

// export default Fetch
;