const React = require('react')
const Def = require('./default')

function tech(data) {
let techFormatted = data.tech?.map((tech) => {
  return (
    <div>
      <div class="column">
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
      </div>
)
  })
  return (
    <Def>
        <main>
            <h1>tech</h1>
            {techFormatted}
        </main>
    </Def>
)

}
  module.exports = tech