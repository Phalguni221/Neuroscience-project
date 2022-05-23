const React = require('react');
const Def = require('../default')



 function Login ({ children, title }) {
    return (
        <html>
            <head>
                <link rel="stylesheet" href="/css/neurostyle.css" />
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <title>Hello</title>
            </head> 
      <div class = "Wrapper">
           <h1>User Login</h1>
        </div>
         <body>
             <p>
             <form method="GET" action="home">
             <text><input type="Submit" name="home" class="btn-primary" value="home"/></text>
             </form> 
             </p>
             <br></br>

             <p>
               <form method="GET" action="NewInfo">
             <text><input type="Submit" name="newinfo" class="btn-primary" value="newinfo"/></text>
             </form> 
          <br></br>
          <br></br>
             </p>

              <p>
             <form method="GET" action="tech">
             <text><input type="Submit" name="tech" class="btn-primary" value="tech"/></text>
             </form> 
             <br></br>
             <br></br>
              </p>

              <p>
             <form method="GET" action="login">
             <text><input type="Submit" name="login" class="btn-primary" value="login"/></text>
             </form> 
          <br></br>
          <br></br>
              </p>
            </body>

    <div class = "Box">
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
    </div>
</html>
    )
    }

    module.exports = Login