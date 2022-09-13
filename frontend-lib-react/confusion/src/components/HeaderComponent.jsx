import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Modal, ModalHeader, ModalBody, Button, FormGroup, Label, Input, Form } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }
        // bind "this.toggleNav" variable to function toggleNav, so to use "onClick={this.toggleNav}"
        // ! cannot pass params to it
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleLogin(event) {
        //close modal
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                {/* expand - bootstrap property to expand navbar with scren sizes >=md */}
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className='me-auto' href='/'>
                            <img src="assets/images/logo.png" height="30" width="41" alt="Ristorante con Fusion" />
                        </NavbarBrand>
                        <Collapse navbar isOpen={this.state.isNavOpen}>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home"></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about">
                                        <span className="fa fa-info"></span> About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list"></span> Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact">
                                        <span className="fa fa-address-card"></span> Contact
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className='ms-auto'>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}>
                                        <span className='fa fa-sign-in'></span> Login
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>

                <div className="jumbotron">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
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

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label for="username">Username</Label>
                                <Input type='text' id='username' name='username'
                                    innerRef={(input) => this.username = input}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input type='password' id='password' name='password'
                                    innerRef={(input) => this.password = input}
                                />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type='checkbox' name='remember'
                                        innerRef={(input) => this.remember = input}
                                    /> Remember me
                                </Label>
                            </FormGroup>
                            <Button type='submit' color='primary' className='d-flex justify-content-center my-0 mx-auto'>Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}
