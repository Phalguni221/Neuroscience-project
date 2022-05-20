import React from 'react';
// import Layout from '../components/Layout'
import styled from 'styled-components'

const Canvas = styled.div `
background-color:white;
`;
const Title = styled.div`
color:white;
`;


export default function BrainGames() {
    return (
<div>

<head>
<meta charset="UTF-8" />
<Title>
<title>Canvas Maze Game</title>
</Title>
</head>
    <Canvas>
<canvas id="canvas" width="482" height="482">
This text is displayed if your browser does not support HTML5 Canvas.
</canvas>
</Canvas>
</div>
    )
}