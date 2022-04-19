import styled from "styled-components";

import Default from './default';
import ContactInfo from './ContactInfo';
import NewInfo from "./NewInfo";
import Technology from "./Technology";

//For styled main container
const Container = styled.div`
background-color:lightblue;
height:20px;
text-align:center;
`;

//For wrapper
const Wrapper = styled.div`
background-color:black;
width:10px;
height:20px;
`;

const Home = () => {
   return (
   
   <div>

    <head>
        <h1>Welcome to the site!</h1>
    </head>
<body>
    <background src="./Nueralink.png"></background>
    <p>
        <h1>Links</h1>
    </p>
 
    <p>
    <Container>
    <ul>
     <a href="./pages/Home.js">Home</a>
    </ul>
    </Container>
<br></br>
<Container>
    <ul>
        <a href="./pages/NewInfo.js">New Information</a>
    </ul>
</Container>

<Container>
    <ul>
        <a href="pages/Technology.js">Technology</a>
    </ul>
 </Container>

 <Container>
    <ul>
        <a href="ContactInfo.js">ContactInfo</a>
    </ul>
    </Container>

    <Container>
    <ul>
        <a href="./pages/navbar.html">Click here to access different links on the site!</a>
    </ul>
    </Container>
     </p>   
    <img src = "./assets/Nueralink.png"></img>
    <h2>
        <p>
        This site is intended to inform visitors more about nueroscience and the ongoing technological advances geared towards helping mitigate
        current neurological dilemmas! 
        Feel free to explore the site, play some games, and learn more about what products we are currently working on in Dhruva!
    </p>
    </h2>
<h2>Website Content</h2>
</body>
<ContactInfo></ContactInfo>

</div>
   );
};

export default Home;