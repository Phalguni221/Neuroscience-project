const React = require('react');
const Def = require('../default')
const App = require('../App')

import React from 'react';
import Def from '../default';
import Newinfo from './newinfo'
// import Home from './website/home'
// import Login from './website/login'
// import Tech from './tech'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import styled from 'styled-components';

const Wrapper = styled.div`
background-color:black;
// margin-top:20px;
display:flex;
width:800px;
height:100px;
margin-left:500px;
// margin-bottom:4000px;
`;

function Home ({ children, title }) {

    return (
        <html>
            <head>
                <link rel="stylesheet" href="/css/neurostyle.css" />
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <title>Hello</title>
            </head>
              
        
                
            
                <header>

                </header>
                {/* different links go here*/}
                 {/* <Def title={App}> 
                    {children}
                </Def> */}
                 <div class= "Wrapper">
                <h1>Hello</h1>
                </div>
                
        <body>
             <p>
             <form method="GET" action="./home.jsx">
             <text><input type="Submit" name="home" class="btn-primary" value="home"/></text>
             </form> 
             </p>
             <br></br>

             <p>
               <form method="GET" action="NewInfo">
             <text><input type="Submit" name="newinfo" class="btn-primary" value="newinfo"/></text>
             </form> 
          <br></br>
          <br></br>
             </p>

              <p>
             <form method="GET" action="tech">
             <text><input type="Submit" name="tech" class="btn-primary" value="tech"/></text>
             </form> 
              </p>

              <p>
             <form method="GET" action="login">
             <text><input type="Submit" name="login" class="btn-primary" value="login"/></text>
             </form> 
              </p>
            </body>   
                <footer>

                </footer>
   
        </html>
    )
}


module.exports = Home