const React = require("react");
const Def = require("./default");
import styled from "styled-components";

const Container = styled.div`
  color: blue;
`;

export const Wrapper= styled.div`
  background-color: black;
  // margin-top:20px;
  display: flex;
  width: 800px;
  height: 100px;
  margin-left: 500px;
  // margin-bottom:4000px;
`;

function NewInfo(data) {
  console.log(data);
  console.log("hello");

  let newinfoFormatted = data.newinfo?.map((newinfo) => {
    return (
      <div>
        <Container>
          <h1>{newinfo.title}</h1>

          <p>{newinfo.author}</p>

          <p>Located in {newinfo.date}</p>

          <p>{newinfo.link}</p>
        </Container>
      </div>
    );
  });

  return (
      <h1>new Info</h1>

  );
}

module.exports = NewInfo;

