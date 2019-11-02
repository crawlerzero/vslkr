import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';

export default class FooterMain extends Component {
    render() {
        return (
            <div>
                <Navbar className="container vslkr-join-footer" variant="dark" fixed="bottom">
                    <footer className="mastfoot mx-auto">
                        <p>The Voidstalker Heresy</p>
                    </footer>
                </Navbar>
            </div>
        )
    }
};