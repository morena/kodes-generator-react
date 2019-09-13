import React from 'react';
import Navigation from '../navigation/Navigation';
import Container from '../container/Container';


const Header = () => (
	<div className="navbar">
		<Container>
			<div to="/" className="navbar-brand page-scroll">
				<img src="../../assets/images/kodes-logo.png" alt="Kodes Accessories" width="100"/>
			</div>
			<Navigation/>
		</Container>
	</div>
);

export default Header;
