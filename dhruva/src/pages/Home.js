import { BrowserRouter, Link } from 'react-router-dom'
import styled from "styled-components";
// import Default from './default';
// import ContactInfo from './ContactInfo';
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
padding: 40px 20px;
display:flex;
width:1950px;
height:700px;
text-align:center;
`;

const Navbar = styled.div`
background-color:black;
width:450px;
padding:10px 20px;
display:flex;
// margin-top:10px;
margin-left:700px;
`;

const ContactInfo = styled.div`
background-color:skyblue;
position:fixed;

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
    </Routes>         */}
</BrowserRouter>

 

  
 

    {/* <h2>
        <p>
        This site is intended to inform visitors more about nueroscience and the ongoing technological advances geared towards helping mitigate
        current neurological dilemmas! 
        Feel free to explore the site, play some games, and learn more about what products we are currently working on in Dhruva!
        </p>
    </h2> */}

</Wrapper>

<h2>Website Content</h2>
</Container>


</div>
   );
};

export default Home;