const React = require('react')

function Def () {
    return (
        <html>
            <head>
                <title>Title</title>
                {/* <link rel="stylesheet" href="/css/neurostyle.css"/> */}
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </head>
             <body>
                 <nav class="navbar navbar-light bg-light">
                        <a class="navbar-brand" href="#">Navbar</a>
                        <br></br>
                        <br></br>

                    <ul>
                    <p>Back-end</p>
                        <p>
                            <a href="/">Home</a>
                        </p>
                        <li>
                        <a href="/places2">Places</a>
                        </li>
                        <li>
                        <a href="/places2/new">Add Places</a>
                        </li>
                    </ul>
              
                <div class="content"></div>
            </nav>
            </body> 

            <br></br>
            <br></br>
            <br></br>
  <footer class="footer">
  <text>Links!:</text>
  <br></br>
  <br></br>
<text>LinkedIn: <a href="https://www.linkedin.com/in/sriya-bhamidipati-359391219/">Link to My LinkedIn Profile</a></text>
<br></br>
<br></br>
<text>Uber Eats: <a href="https://www.ubereats.com/">Uber Eats(Get Tasty Food Delivered to Your Door!)</a></text>
<br></br>
<br></br>
<text>App Author: Sriya P. Bhamidipati</text>
  </footer>
        </html>
    )
}

 module.exports = Def
  
