import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import styled from "styled-components";
// import Default from './default';
import ContactInfo from './pages/ContactInfo';
import NewInfo from "./pages/NewInfo";
import Technology from "./pages/Technology";


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
display:flex;
width:1600px;
height:700px;
image-align:center;
`;

const Navbar = styled.div`
background-color:black;
width:600px;
height:20px;
// padding:10px;
display:flex;
margin-left:700px;

`;

//For Arrow styling
const LeftArrow = styled.div`
  width: 70px;
  height: 70px;
  background-color: hotpink;
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
  margin-right: -600px;
  margin-left:0px;
  cursor: pointer;
  opacity: 1;
  z-index: 2;
`;

const RightArrow = styled.div`
width: 70px;
height: 70px;
background-color: skyblue;
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
margin-right: 600px;
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
<Container>

     <p>
<h1>Welcome to the site!</h1>
    </p>

    <p>
        <h1>Links</h1>
    </p>

    <Wrapper>

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
              
</Navbar> 

      <Routes>
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
    </Routes>   

</BrowserRouter>

</Wrapper>

<h2>Website Content</h2>
<Slider>
  <LeftArrow></LeftArrow>    

  <RightArrow></RightArrow>
</Slider>
</Container>


</div>
   );
};

export default Home;