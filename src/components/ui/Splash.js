import React from 'react';
import styled from 'styled-components'

const Overlay = styled.div`
    /* left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index:20; */
    /* align-items: center;
    display: flex;
    justify-content: center;
    background: #333a48;
    width:100%; */
    flex:1;   
    align-items: center;
    justify-content: center; 
    display:flex;
    background: #333a48;

    /* background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;


    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
        } */
    @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const OverlayInner = styled.div`
    /* left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute; */
`;
const OverlayContent = styled.div`
    /* left: 50%;
    position: absolute;
    top: 50%; */
    /* transform: translate(-50%, -50%); */

`;
const Spinner = styled.span`
    width: 45px;
    height: 45px;
    display: inline-block;
    border-width: 2px;
    border-color: rgba(255, 255, 255, 0.05);
    border-top-color: #fff;
    animation: spin 1s infinite linear;
    border-radius: 100%;
    border-style: solid;        
`;

const SplashScreen = () => {
    return(
        
    <Overlay>
    {/* <OverlayInner> */}
        {/* <OverlayContent> */}
            <Spinner />            
        {/* </OverlayContent> */}
    {/* </OverlayInner> */}
    </Overlay>
      
    );
    
};
export default SplashScreen;


 