const React = require('react');
const Def = require('./default')

export default function NewInfo(data) {
    let NewInfoFormatted = data.NewInfo?.map((NewInfo) => {
      return (
          <div>
        <body>
        <div className="col-sm-6">
            
          <h2>
            <p>
              {NewInfo.title}
              </p>
          </h2>

          <p>
            {NewInfo.author}
          </p>

          {/* <p>
            Located in {NewInfo.date}
         </p> */}

            <p>   
            {NewInfo.link}
            </p> 
        
        </div>
        </body>
        </div>
    
    )
      })
      return (
         <Def>
            <main>
                <body>
            <h1>NewInfo</h1>
            {NewInfoFormatted} 
                </body>
            </main>
         </Def>
        
      
      
    )
    
    }