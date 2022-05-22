const React = require('react');
const Def = require('../default')
const App = require('../App')

import Wrapper from '../styled-components/style'
import Box from '../styled-components/style'

 function Login () {
    return (
    <App title="Login">
       <Wrapper>
           <h2>User Login</h2>
       </Wrapper>
       <br></br>
       <br></br>
       <Box>
         <br></br>
         <br></br>
 
     <form method ="GET" action="User.js">
 
    <label for="fname">First name:</label><br/>
 
    <input type="text" id="fname" name="fname" />
 
    <br></br>
    <br></br>
 
    <label for="lname">Last name:</label><br/>
    <input type="text" id="lname" name="lname" />
 
    <br></br>
    <br></br>
 
    <label for="username">Username:</label><br/>
    <input type="text" id="username" name="username" placeholder="Enter your Username"   required="true"/>
 
    <br></br>
    <br></br>
 
 
    <label for="userPassword">Password:</label><br/>
 
    <input type="password" id="password"  placeholder="Enter your Password" 
    name="password"  minlength="3"  maxlength="20"></input> 
        
    <br></br>
    <br></br>
 
    <input type="submit" value="Submit"></input>
    </form>
    </Box>
    </App>

    )
    }

    module.exports = Login