const React = require('react')
const Def = require('../default')


function tech (data) {
  console.log(tech)
  let techFormatted = data.tech?.map((tech) => {
return (
      <div class = "Box">
             <h1>
              {tech.title}
            </h1>
  
  
            <p>
              {tech.author}
            </p>
  
            <p>
              Located in {tech.date}
            </p>
  
            <p>
              {tech.link}
            </p>
          </div> 

)     
  })

  return (
    <html>
     <head>
         <link rel="stylesheet" href="/css/neurostyle.css" />
         <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
         <title>Hello</title>
     </head>
     <body>

      <div class = "Wrapper">
       <h1>Tech</h1>
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
       <p>{techFormatted}</p>
       </div>
     </body>
 </html>
 ) 
     
}

  module.exports = tech