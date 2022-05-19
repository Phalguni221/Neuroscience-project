const React = require('react');
const Def = require('./default')

function newinfo(data) {
  console.log(data)
  console.log("hello")

  let newinfoFormatted = data.newinfo?.map((newinfo) => {
    return (
      <div>
       <div class="column">
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
      </div> 
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