import styled from "styled-components";

// import Default from './Default';
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

const Navbar = styled.div`
background-color:skyblue;
height:200px;
width:2000px;
position:fixed;
text-align:center;
`;

const Home = () => {
   return (
   
   <div>

    <head>
        <h1>Welcome to the site!</h1>
    </head>
<body>
    <background src="./Nueralink.png"></background>
<Navbar>
    <li>
     <a href="./pages/Home.js">Home</a>
    </li>
<br></br>
    <li>
        <a href="./pages/NewInfo.js">New Information</a>
    </li>
<br></br>
    <li>
        <a href="pages/Technology.js">Technology</a>
    </li>
<br></br>
    <li>
        <a href="ContactInfo.js">ContactInfo</a>
    </li>
<br></br>
    <li>
        <a href="./pages/navbar.html">Click here to access different links on the site!</a>
    </li>
</Navbar>
  
    {/* <img src = "./assets/Nueralink.png"></img> */}
<Container>
    <h2>
        <p>
        This site is intended to inform visitors more about nueroscience and the ongoing technological advances geared towards helping mitigate
        current neurological dilemmas! 
        Feel free to explore the site, play some games, and learn more about what products we are currently working on in Dhruva!
        </p>
    </h2>
</Container>
<h2>Website Content</h2>
</body>



</div>
   );
};

export default Home;