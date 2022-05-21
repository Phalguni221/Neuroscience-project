import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import styled from 'styled-components';
// import {Link} from Gatsby;
import ContactInfo from './pages/ContactInfo';
import NewInfo from "./pages/NewInfo";
import Technology from "./pages/Technology";
import Login from "./pages/Login";
import BrainGames from "./pages/BrainGames";
import Home from "./pages/Home";
import GatsbyLink from 'gatsby-link';
import ReactLoading from "react-loading";
import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import Loading from './pages/Loading'

//For styled main container
const Container = styled.div`
background-color:white;
height: 1000px;
width:300px;
text-align: center;
`;


//For wrapper
// eslint-disable-next-line
const Wrapper = styled.div`
background-color:black;
// margin-top:20px;
display:flex;
width:800px;
height:100px;
margin-left:500px;
// margin-bottom:4000px;
`;


// eslint-disable-next-line
const Navbar = styled.div`
background-color:black;
width:1200px;
height:100px;
padding:10px 10px;
display:flex;
margin-left:400px;
margin-right:1100px;
`;

const Box = styled.div`
border-radius:25px;
border-color:white;
background-color:white;
width:900px;
height:500px;
// margin-bottom:400px;
// margin-left:700px;
`;

//For Arrow styling
const LeftArrow = styled.div`
  width: 60px;
  height: 60px;
  background-color: blue;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin-top:500px;
  margin-right: 400px;
  margin-left:50px;
  cursor: pointer;
  opacity: 1;
  z-index: 2;
`;

const RightArrow = styled.div`
width: 60px;
height: 60px;
background-color: blue;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${(props) => props.direction === "left" && "10px"};
right: ${(props) => props.direction === "right" && "10px"};
margin-top:500px;
margin-right: 100px;
margin-left:1800px;
cursor: pointer;
opacity: 1;
z-index: 2;
`;

const Slider = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;



const App = () => {

  return (

    <>
     {/* {Loading === false ? ( */}
       <div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <form action="../../post" method="post" 
              className="form">
          <button type="submit">Connected?</button>
        </form>
     
  <Container>
    <h1>Neurosense: Where Neuroscience Makes Sense</h1>
   
        <BrowserRouter>

        <div className="display">

            <Routes>
        
        
            <Route path="/" element={
                <Home />
              } />

            <Route path="/Login" element={
                <Login />
              } />


             <Route path="/NI" element={
                 <NewInfo />
              } /> 


              <Route path="/Technology" element={
                <Technology />
              } />

              <Route path="/BrainGames" element={
                <BrainGames />
              } />

            </Routes>
          
          </div>
        
        <div className="display"> 
            <ul>
              <Link to="/">Home</Link>
              
              <br></br>
            <br></br>
            <br></br>
            </ul>

            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <ul>
              <Link to="/Technology">Tech</Link>
             
              <br></br>
            <br></br>
            <br></br>
           </ul>

            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <ul>
              <Link to="/NewInfo">New Info</Link>
              <br></br>
            <br></br>
            <br></br>
            </ul>

            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <ul>
              <Link to="/Login">User Login</Link>
              <br></br>
            <br></br>
            <br></br>
            </ul>

            <br></br>
            <br></br>
            <br></br>
            <br></br>

             <ul>
              <Link to="/BrainGames">Brain Games</Link>
              <br></br>
            <br></br>
            <br></br>
            </ul>

            <br></br>
            <br></br>
            <br></br> 
        </div>
  
          
          {/* <div className="display">
         
            <Routes>

            <Route path="/Login" element={
                <Login />
              } />


              <Route path="/NewInfo" element={
                <NewInfo />
              } />


              <Route path="/Technology" element={
                <Technology />
              } />

              <Route path="/BrainGames" element={
                <BrainGames />
              } />

            </Routes>
          
          </div> */}
        </BrowserRouter>

    </Container>

    <footer>
    <ContactInfo/>
    </footer>
    </div>
   {/* ) : (
    <Loading/>
  )}  */}
</>
  )
}


export default App;