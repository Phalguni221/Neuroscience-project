import React from 'react';
// import Layout from '../components/Layout'
import styled from 'styled-components'

const Canvas = styled.div `
background-color:white;
width:"482px";
height:"482px";
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
<h1> Welcome to Brain Maze!</h1>
</Canvas>
</div>
    )
}