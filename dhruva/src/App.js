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
height: 1000px;
width:300px;
text-align: center;
`;


//For wrapper
// eslint-disable-next-line
const Wrapper = styled.div`
background-color:black;
margin-top:20px;
display:flex;
width:800px;
height:100px;
margin-left:500px;
margin-bottom:2500px;
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
    <div>
  <Container>
    <h1>Neurosense</h1>
    
        <BrowserRouter>
        
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

            {/* <ul>
              <Link to="/ContactInfo">Contact Info</Link>
              <br></br>
            <br></br>
            <br></br>
            </ul>

            <br></br>
            <br></br>
            <br></br> */}
        </div>
  
          
          <div className="display">
         
            <Routes>

              {/* <Route path="/ContactInfo" element={
                <ContactInfo />
              } /> */}


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

<footer>
<div class ="splitter">
    <ContactInfo/>
    </div>
    </footer>
    </div>
  );
};

export default App;