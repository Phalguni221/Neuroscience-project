import React from 'react';
// import Layout from '../components/Layout'
import styled from 'styled-components'
import User from './User.js'
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
 border-color:white;
 background-color:white;
 position:absolute;
 width:800px;
 height:500px;
 margin-right:800px;
 margin-left:500px;
 // margin-bottom:10000px;
 // margin-left:1000px;
 
 `;

 const divStyle = styled.div`
 "-webkit-text-security = circle";
      margin-left: -30px; 
        cursor: pointer
 `;

 export default function Login () {
   return (
     <div>
       <head>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"></link>
       </head>
{/* 
      <script>
    // toggle the type attribute
      const togglePassword = document.querySelector('#togglePassword');
      const password = document.querySelector('#id_password');
      togglePassword.addEventListener('click', function (e) {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
    // toggle the eye slash icon
       this.classList.toggle('fa-eye-slash');
              });
       </script> */}
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
   <br></br>

   <label for="lname">Last name:</label><br/>
   <input type="text" id="lname" name="lname" />

   <br></br>
   <br></br>

   <label for="username">Username:</label><br/>
   <input type="text" id="username" name="username" placeholder="Enter your Username"   required="true"/>

   <br></br>
   <br></br>


   <label for="userPassword">Password:</label><br/>

   <input type="password" id="password"  placeholder="Enter your Password" 
   name="password"  minlength="3"  maxlength="20"></input> 
       
   <br></br>
   <br></br>

   <input type="submit" value="Submit"></input>
   </form>
   </Box>
   </div>
  
   )
   }