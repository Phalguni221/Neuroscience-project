const React = require('react');
const Def = require('./default')
const App = require('./website/App')

import Wrapper from './styled-components/style'
import Box from './styled-components/style'

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
     <App title= "Tech">
        <Wrapper>
            <h1>tech</h1>
            </Wrapper>
          <Box>
            {techFormatted}
            </Box>
      </App>
    </Def>
)

}
  module.exports = tech