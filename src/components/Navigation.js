import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import fonts from '../fonts';

const NavBar = styled.div`
    width: auto;
    display: block;
    height: auto;
    max-height: 340px;
    overflow: visible;
    border-color: rgba(255,255,255,.02);
`;

const NavBarNav = styled.div`
    padding-left: 0;
    list-style: none;
    margin: 0;
    float: right!important;
    margin-right: -15px;
    a {
        position: relative;
        display: block;
        padding: 10px 15px;
        line-height: 20px;
        padding-top: 15px;
        padding-bottom: 15px;
        font-family: ${fonts.Montserrat};
        text-transform: uppercase;
        font-weight: 400;
        letter-spacing: 1px;
        color: #fff;
    }
`;

const Navigation = () => (
	<NavBar className="navbar">
		<NavBarNav className="navbar-nav">
			<li><Link to="/">Create a Custom Necklace</Link></li>
		</NavBarNav>
	</NavBar>
);
export default Navigation;
