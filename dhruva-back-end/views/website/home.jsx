const React = require('react');
const Def = require('../default')
const App = require('../App')

import Wrapper from '../styled-components/style'
import Box from '../styled-components/style'

function Home (data) {

    return (
    <div>
        <App title="Home">
<Wrapper>
<h2>Home</h2>
</Wrapper>
<br></br>
<br></br>
<Box>
  <h1>Welcome to the Site!</h1>
</Box>
</App>
</div>
    )
    }

module.exports = Home