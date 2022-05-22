import React from "react";
const Def = require("./default");


export const Wrapper = styled.div`
  background-color: black;
  // margin-top:20px;
  display: flex;
  width: 800px;
  height: 100px;
  margin-left: 500px;
  // margin-bottom:4000px;
`;

function Info(infos) {
  console.log(infos);
  return (
    <div>
      <Def title={"some title"}>hello</Def>
      <h1>Info commponent worksss</h1>
      {JSON.stringify(infos)}
    </div>
  );
}

export default Info;
