import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import {Link} from Gatsby;
import ContactInfo from './pages/ContactInfo';
import NewInfo from "./pages/NewInfo";
import Technology from "./pages/Technology";
import GatsbyLink from 'gatsby-link';


//For styled main container
const Container = styled.div`
background-color: lightblue;
height: 3000px;
text-align: center;
position: fixed;
`;


//For wrapper
// eslint-disable-next-line
const Wrapper = styled.div`
background-color:black;
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
border-color:black;
width:900px;
height:500px;

margin-bottom:400px;
margin-left:700px;

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


const App = ({location}) => {
   return (

   <div>

<Container>
{/* <h1>Welcome to the site!</h1>  */}

<BrowserRouter>
{/* <button onclick="scrollWin()" style="position:fixed">Scroll to 200 horizontally!</button><br></br> */}


          <div display="list">
            <ul>

              <li>
                <Link to="/">Home</Link>
              </li>
            
            <br></br>
            <br></br>
            
              <li>
                <Link to="/Technology">Tech</Link>
                <Technology/>
              </li>
        
            <br></br>
            <br></br>
            <br></br>
            
              <li>
                <Link to="/NewInfo">New Info</Link>
              </li>
            
            <br></br>
            <br></br>
            <br></br>
            
            
              <li>
                <Link to="/ContactInfo">Contact Info</Link>
              </li>
            
            <br></br>
            <br></br>

         </ul>
          </div> 

         <div className="display">
              <Routes>
          <Route path="/ContactInfo" element={
            <ContactInfo/>
            } />
        
          
                <Route path="/NewInfo" element={
            <NewInfo/>
            } />

            
              <Route path="/Technology" element={
            <Technology/>
            } />
            
        </Routes>
      
        </div>  
  </BrowserRouter>   
              

<Slider>
  <LeftArrow></LeftArrow>    
      <Box></Box>
  <RightArrow></RightArrow>
</Slider>
</Container>

</div>
   );
};

export default App;

