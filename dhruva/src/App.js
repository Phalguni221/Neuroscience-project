import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import styled from 'styled-components';
// import {Link} from Gatsby;
import ContactInfo from './pages/ContactInfo';
import NewInfo from "./pages/NewInfo";
import Technology from "./pages/Technology";
import GatsbyLink from 'gatsby-link';


//For styled main container
const Container = styled.div`
background-color:white;
height: 3000px;
width:300px;
text-align: center;
// position: fixed;
`;


//For wrapper
// eslint-disable-next-line
const Wrapper = styled.div`
background-color:white;
margin-left: 200px;
margin-top:20px;
display:flex;
width:1500px;
height:700px;
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
  <Container>
    <h1>Neurosense</h1>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
          </button>
        {/* <button onclick="scrollWin()" style="position:fixed">Scroll to 200 horizontally!</button><br></br>  */}
        <BrowserRouter>
        
        
        <div className="display"> 
            <ul>
              <Link to="/">Home</Link>
              <Technology />
              <br></br>
            <br></br>
            <br></br>
            </ul>

            <br></br>
            <br></br>
            <br></br>
            

            <ul>
              <Link to="/Technology">Tech</Link>
              <Technology />
              <br></br>
            <br></br>
            <br></br>
            </ul>

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

            <ul>
              <Link to="/ContactInfo">Contact Info</Link>
              <br></br>
            <br></br>
            <br></br>
            </ul>

            <br></br>
            <br></br>
        </div>
  
          
          <div className="display">
         
            <Routes>
              <Route path="/ContactInfo" element={
                <ContactInfo />
              } />


              <Route path="/NewInfo" element={
                <NewInfo />
              } />


              <Route path="/Technology" element={
                <Technology />
              } />

            </Routes>
          
          </div>
        </BrowserRouter>

      
  
    </Container>
    
  );
};

export default App;

