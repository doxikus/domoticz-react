import React, {useState, useContext } from 'react';
import styled from "styled-components";
import { AppContext } from "../../AppProvider";


export const ThemeSwitcher = () => {
  const { toggleTheme, themeMode } = useContext(AppContext);
  const [selected, toggleSelected] = useState(true); 
//   console.log("THEME MODE: ", themeMode);

    function toggle() {
        toggleSelected(!selected);
        handleThemeChange();
      }    

    const handleThemeChange = (e) => {
        // console.log(e);
        toggleTheme();
      };

    return(        
        <SwitchWrapp>            
        <div className="toggle-container" onClick={toggle}>
            <div className={`dialog-button ${themeMode==="darkTheme" ? "" : "disabled"}`}>
                {themeMode==="darkTheme" ? "DARK" : "LIGHT"}
            </div>
        </div>        
        </SwitchWrapp>
         
    )
}

export const SwitchWrapp = styled.div`
    display:flex;
    align-items: center;
    padding:5px 10px;
    .toggle-container {
        /* width:100px; */
        
        width: 80px;
        background-color: #c4c4c4;
        cursor: pointer;
        user-select: none;
        border-radius: 3px;
        padding: 2px;
        height: 32px;
        position: relative;
}
.dialog-button {    
    font-size: 14px;
    line-height: 12px;
    font-weight: bold;
    cursor: pointer;
    background-color: #000;
    color: white;
    padding: 8px 12px;
    border-radius: 18px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    min-width: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    min-width: unset;
    border-radius: 3px;
    box-sizing: border-box;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    position: absolute;
    left: 30px;
    transition: all 0.3s ease;
}
.disabled {
    background-color: #707070;
    left: 2px;
}
`;