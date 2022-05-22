const React = require('react');
const Def = require('./default')
const App = require('./website/App')

import Wrapper from './styled-components/style'
import Box from './styled-components/style'
import newinfoSchema from '../models/newInfo'

function newinfo(data) {
  console.log(Box, App)
 
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
    <div>
      <App title= "New Info">
          <Wrapper>
          <h1>newinfo</h1>
          </Wrapper>
          <Box>
          {newinfoFormatted}
          </Box>
      </App>

    </div>
  )

}

module.exports = newinfo