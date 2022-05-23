const React = require("react");
// import Wrapper from "./styled-components/style";
import Box from "./styled-components/style";

<head>
<link rel="stylesheet" href="/css/neurostyle.css" />
</head>

function Def({ title,children }) {
  return (
    <div>
        def works
      {/* <Wrapper>{title}</Wrapper> */}
      <Box>{children}</Box>
    </div>
  );
}

module.exports = Def;
