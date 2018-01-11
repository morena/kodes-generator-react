import React from 'react';
import Header from './Header';
import Main from './Main';
import styled from 'styled-components';

const Background = styled.div`
    //background-color: #333;
`;

const App = () => (
	<Background className="background" id="hide-from-modal">
		<Header className="header" />
		<Main />
	</Background>
);

export default App
