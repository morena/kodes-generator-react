import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import styled from 'styled-components'
import Container from './styled-components/Container'

const Nav = styled.nav`
    min-height: 50px;
    margin-bottom: 20px;
    position: fixed;
    right: 0;
    left: 0;
    top:0;
    z-index: 1030;
    background-color: #222;
    padding: 10px 0;
`;

const NavbarBrand = styled(Link)`
    float:left;
`;

const Header = () => (
    <Nav className="navbar">
        <Container>
            <NavbarBrand to="/" className="navbar-brand page-scroll">
                <img src="../../assets/images/kodes-logo.png" alt="Kodes Accessories" width="100"/>
            </NavbarBrand>
            <Navigation/>
        </Container>
    </Nav>
)

export default Header
