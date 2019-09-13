import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
	<div className="navbar">
		<div className="navbar-nav">
			<li><Link to="/">Create a Custom Necklace</Link></li>
		</div>
	</div>
);
export default Navigation;
