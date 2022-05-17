import React from 'react';
// import Layout from '../components/Layout'
import styled from 'styled-components'

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
border-radius:10px;
border-color:white;
background-color:white;
width:200px;
height:200px;
margin-right:600px;
margin-left:500px;
// margin-bottom:10000px;
// margin-left:1000px;

`;


export default function Technology () {
  return (
    <div>
     <Wrapper>
          <h2>Technology</h2>
      </Wrapper>
    </div>
    

  )

   }
   
   