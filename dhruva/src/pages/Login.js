import React from 'react';
// import Layout from '../components/Layout'
import styled from 'styled-components'
import User from './User'
import jQuery from 'jquery'

 //For styled main container
 const Container = styled.div`
 background-color: black;
 height: 3000px;
 text-align: center;
 position: fixed;
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
//eslint-disable-next-line
 const Navbar = styled.div`
 background-color:black;
 width:1200px;
 height:100px;
 padding:10px 10px;
 display:flex;

 margin-left:400px;
 margin-right:1100px;

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

 const Box = styled.div`
 border-radius:25px;
 border-color:white;
 background-color:white;
 width:500px;
 height:500px;
 margin-bottom:1000px;
 margin-left:1000px;

 `;

 export default function Login () {

   return (
     <div>
      <Wrapper>
          <h2>User Login</h2>
      </Wrapper>
      <br></br>
      <br></br>
      <Box>
        <br></br>
        <br></br>

    <form method ="GET" action="User.js">
   <label for="fname">First name:</label><br/>

   <input type="text" id="fname" name="fname" />
   <br></br>

   <label for="lname">Last name:</label><br/>
   <input type="text" id="lname" name="lname" />
   <br></br>

   <label for="username">Username:</label><br/>
   <input type="text" id="username" name="username"  required="true"/>
   <br></br>

   <label for="password">Password:</label><br/>
   <input type="text" id="password" name="password"  required="true"/>
   <br></br>

   <input type="submit" value="Submit"></input>
   </form>
   </Box>
   </div>
  
  

   
         )
   }