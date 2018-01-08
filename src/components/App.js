import React from 'react'
import Header from './Header'
import Main from './Main'
import Container from './styled-components/Container'
import styled from 'styled-components'

const Background = styled.div`
    background-color: #333;
`;

const App = () => (
    <Background className="background">
        <Header className="header" />
        <Main />
    </Background>
)


export default App
