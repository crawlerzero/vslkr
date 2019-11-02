import React, {Component} from 'react';
import {Navbar, Nav, NavItem, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import vslkr32 from "../../assets/images/vslkr_32.png";

export default class NavMain extends Component {
    render() {
        return (
            <div>
                <Navbar className="container vslkr-join-header" variant="dark" fixed="top" expand="sm">
                    <Navbar.Brand>
                        <Image src={vslkr32} alt="The Voidstalker Heresy" roundedCircle />
                        {' The Voidstalker Heresy'}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavItem className="navbar-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/connect" className="nav-link">Connect</Link>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
};
