import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Design from './Design';

const Main = () => (
	<main>
		<Switch>
			<Route path='/' component={Design}/>
		</Switch>
	</main>
);

export default Main;

// For browser based projects, there are <BrowserRouter> and <HashRouter> components.
// The <BrowserRouter> should be used when you have a server that will handle dynamic requests (knows how to respond to any possible URI), while the <HashRouter> should be used for static websites (can only respond to requests for files that it knows about).
// With React Router v4, one of the big changes is that there are a number of different router components. Each one will create a history object for you. The <BrowserRouter> creates a browser history, the <HashRouter> creates a hash history, and the <MemoryRouter> creates a memory history.
// In v4, there is no centralized route configuration. Anywhere that you need to render content based on a route, you will just render a <Route> component.
//One thing to note is that the router component must only be given one child element.

//Each route will be identified in a <Route> component
//which will take two properties: path and component
//When a path matches the path given to the <Route> component
//it will return that component specified
