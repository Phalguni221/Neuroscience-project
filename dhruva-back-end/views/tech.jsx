const React = require('react')
const Def = require('./default')

function tech(data) {
let techFormatted = data.techs.map((tech) => {
  return (
    <div className="col-sm-6">
      <h2>
        <a href={`/techs2/${tech.id}`} >
          {tech.name}
        </a>
      </h2>
      <p className="text-center">
        {tech.cuisines}
      </p>
      <img src={tech.pic} alt={tech.name} />
      <p className="text-center">
        Located in {tech.city}, {tech.state}
      </p>
    </div>
)
  })
  return (
    <Def>
        <main>
            <h1>tech INDEX PAGE</h1>
            {techFormatted}
        </main>
    </Def>
)

}
  module.exports = tech