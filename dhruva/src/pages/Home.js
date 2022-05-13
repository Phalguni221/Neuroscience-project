import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import styled from "styled-components";
import Default from './default';
import ContactInfo from './ContactInfo';
import NewInfo from "./NewInfo";
import Technology from "./Technology";


//For styled main container
const Container = styled.div`
background-color: lightblue;
height: 3400px;
text-align: center;
position: fixed;
`;

//For wrapper
const Wrapper = styled.div`
background-color:black;
margin-left: 200px;
margin-top:20px;
display:flex;
width:1500px;
height:700px;
`;

const Navbar = styled.div`
background-color:black;
width:1500px;
height:200px;
padding:10px;
display:flex;
margin-top:100px;
margin-left:200px;
margin-right:900px;

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


const Home = () => {
   return (

   <div>
     <Default/>
<Container>

<h1>Welcome to the site!</h1>
   
<BrowserRouter>
{/* <button onclick="scrollWin()" style="position:fixed">Scroll to 200 horizontally!</button><br></br> */}
<Navbar>

           
              <li>
                <Link to="/">Home</Link>
              </li>
            
            <br></br>
            <br></br>
            
              <li>
                <Link to="/Technology">Tech</Link>
              </li>
        
            
              <li>
                <Link to="/NewInfo">New Info</Link>
              </li>
            
            
            
              <li>
                <Link to="/ContactInfo">Contact Info</Link>
              </li>

              {/* <Routes>
        <Route path="/" element={
            <Home/>
          } />

         <Route path="Technology" element={
            <Technology/>
         } />

          <Route path="NewInfo" element={
            <NewInfo/>
            } />

         <Route path="ContactInfo" element={
            <ContactInfo/>
            } />  
    </Routes>     */}

              
</Navbar> 
   
</BrowserRouter>   

<br></br>
<h2>Website Content</h2>
<ContactInfo />

<Slider>
  <LeftArrow></LeftArrow>    

  <RightArrow></RightArrow>
</Slider>
</Container>

</div>
   );
};

export default Home;