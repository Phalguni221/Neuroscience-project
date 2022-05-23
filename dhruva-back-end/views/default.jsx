const React = require("react");
// import Wrapper from "./styled-components/style";


<head>
<link rel="stylesheet" href="/css/neurostyle.css" />
</head>

function Def({ title,children }) {
  return (
    <div>
        def works
      {/* <Wrapper>{title}</Wrapper> */}
      {children}
    </div>
  );
}

module.exports = Def
