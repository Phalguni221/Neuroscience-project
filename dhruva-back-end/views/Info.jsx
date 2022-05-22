import React from "react";
const Def = require("./default");
import styled from 'styled-components';

//  export const Wrapper= styled.div`
//   background-color: black;
//   // margin-top:20px;
//   display: flex;
//   width: 800px;
//   height: 100px;
//   margin-left: 500px;
//   // margin-bottom:4000px;
// `;

function Info(infos) {
  console.log(infos);

  <h1>New Info</h1>

//   {/* <h1>Hi!{newinfo.title}</h1> */}
  let newinfoFormatted = infos.newinfo?.map((newinfo) => {
  return (
    <div>
      {/* <Def title={"some title"}>hello</Def> */}
      <h1>NewInfo</h1>

      <h1>Hi</h1>

      <h1>Hi!{newinfo.title}</h1>

      {/* <h1>{JSON.stringify(infos.title)}</h1> */}
   
      
    {JSON.stringify(infos)}
     
      {/* {JSON.stringify(infos)} */}
    </div>
  );

  });
 

  return (
      <div>
      <h1>newinfo</h1>
      {JSON.stringify(infos)}
      {/* <h1>{JSON.stringify(infos)}</h1> */}
      </div>  
  );

  }



export default Info;
