const React = require('react');
const Def = require('./default')
import styled from 'styled-components';

const Container = styled.div`
color:blue;
`;

function newinfo(data) {
  console.log(data)
  console.log("hello")

  let newinfoFormatted = data.newinfo?.map((newinfo) => {
    return (
      <div>
        <Container>
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
          </Container>
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