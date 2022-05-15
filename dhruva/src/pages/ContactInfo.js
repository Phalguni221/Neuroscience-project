import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
border-radius:25px;
border-color:white;
background-color:white;
width:800px;
height:500px;

margin-bottom:10000px;
margin-left:1000px;
`;

const Wrapper = styled.div`
background-color:black;
margin-top:20px;
display:flex;
width:800px;
height:100px;
margin-left:800px;
margin-bottom:2500px;
`;

const Footer = styled.div`
background-color:black;
color:white;
width:1900px;
height:200px;
`;

export default function ContactInfo () {

  
    return (
    <Footer>
     <br></br>

      <h3>
         Want to find more information from the creator of the website? Find her information located below!
       </h3>
       <h3>
           Email address: Phalguni221@gmail.com
       </h3>

       <h3>
           Phone number: 732-259-1884
       </h3>

     <h3>
      LinkedIn: https://www.linkedin.com/in/sriya-bhamidipati/
     </h3>
   
 
    </Footer>

    )
}


