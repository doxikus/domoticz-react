// global.js

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,
    *::after,
    *::before {
        box-sizing: border-box;
    }
  body {
    align-items: center;    
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    height: 100vh;
    margin: 0;
    padding: 0;
    font: 14px/20px 'Titillium Web', Arial, sans-serif;
    /* font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; */
    transition: all 0.25s linear;
  }
h1,h2,h3,h4,h5,h6{
  margin:10px 0px;
  padding:0px;
  /* color:${({ theme }) => theme.text}; */
}
`;