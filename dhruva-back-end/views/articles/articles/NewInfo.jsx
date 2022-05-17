const React = require('react')

function server(data) {
let NewInfoFormatted = data.NewInfo.map((NewInfo) => {
  return (
      <html>
        <head>
    <link rel="stylesheet" href="public/css/neurostyle.css"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    </head>
    <body>
    <div className="col-sm-6">
      <h2>
        <a href={`/NewInfo/${NewInfo.id}`} >
          {NewInfo.title}
        </a>
      </h2>
      <p className="text-center">
        {NewInfo.author}
      </p>
      <p className="text-center">
        Link: {NewInfo.link}
      </p>
    </div>
    </body>
    </html>
)
  })
  return (
    <Def>
        <main>
            {NewInfoFormatted}
        </main>
    </Def>

)

}
  module.exports = server