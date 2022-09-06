import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <div className="jumbotron">
                    <div class="container">
                        <div class="row row-header">
                            <div class="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>
                                    We take inspiration from the World's best cuisines, and create a
                                    unique fusion experience. Our lipsmacking creations will tickle
                                    your culinary senses!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
