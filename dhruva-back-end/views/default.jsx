const React = require('react')

 function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="/css/neurostyle.css"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </head>
             <body>
                {html.children}
              
            </body> 

            <br></br>
            <br></br>
            <br></br>
        </html>
    )
}

module.exports = Def

