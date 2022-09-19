import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap'

export default class CommentForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
            rating: '',
            author: '',
            comment: '',
            touched: {
                author: false
            }
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    toggleModal() {
        console.log('toggle modal');
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleSubmit(event) {
        console.log("Current State:" + JSON.stringify(this.state));
        alert("Current State:" + JSON.stringify(this.state));
        event.preventDefault();
    }

    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }

    handleBlur = (field) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        })
    }

    validate(author) {
        let error = '';
        const minLength = (val) => val && val.length && val.length >= 3;
        const maxLength = (val) => val && val.length && val.length <= 15;

        if (this.state.touched.author) {
            if (!(minLength(author))) error = 'Should at least be three characters long';
            if (!(maxLength(author))) error = 'Should be less than or equal to 15 characters long';
        }

        return error;
    }


    render() {

        const validationErrors = this.validate(this.state.author);

        return (
            <div>
                <Button color='light' onClick={this.toggleModal}>
                    <span className='fa fa-pencil'></span> Submit Comment
                </Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup className='mb-2'>
                                <Label for='rating'>Rating</Label>
                                <Input type='select' name='rating' value={this.state.rating}
                                    onChange={this.handleInputChange}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Input>
                            </FormGroup>

                            <FormGroup className='mb-2'>
                                <Label for='author'>Your Name</Label>
                                <Input type='text' id='author' name='author' placeholder='Your Name' value={this.state.author}
                                    onChange={this.handleInputChange}
                                    onBlur={() => this.handleBlur('author')}
                                    invalid={validationErrors !== ''}
                                />
                                <FormFeedback>{validationErrors}</FormFeedback>
                            </FormGroup>

                            <FormGroup className='mb-2'>
                                <Label for='comment'>Comment</Label>
                                <Input type='textarea' id='comment' name='comment' rows='6' value={this.state.comment}
                                    onChange={this.handleInputChange}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Button color='primary'>Submit</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
