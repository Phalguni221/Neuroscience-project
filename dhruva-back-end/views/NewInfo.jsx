const React = require('react');
const Def = require('./default')

export default function newinfo(data) {
    let newinfoFormatted = data.newinfo?.map((newinfo) => {
      return (
          <div>
        <body>
            
               <h1>
              {newinfo.title}
              </h1>
        

          <p>
            {newinfo.author}
          </p>

          <p>
            Located in {newinfo.date}
         </p>

            <p>   
            {newinfo.link}
            </p> 

        </body>
        </div>
    
    )
      })
      return (
         <Def>
            <h1>newinfo</h1>
            {newinfoFormatted}
         </Def>
        
      
      
    )
    
    }

module.exports = newinfo