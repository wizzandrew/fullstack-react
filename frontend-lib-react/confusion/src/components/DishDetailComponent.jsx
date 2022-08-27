import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

export default class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {

        if (dish != null) {
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} width="100%" />
                    <CardBody>
                        <CardTitle tag="h5">{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    renderComments(dish) {

        if (dish != null && dish.comments != null) {

            let comments = dish.comments.map(com => {
                return (
                    <div>
                        <p>{com.comment}</p>
                        <p>--{com.author}, {new Date(com.date).toDateString().substring(4)}</p>
                    </div>
                )
            })

            return (
                <div>
                    <h4>Comments</h4>
                    {comments}
                </div>
            )

        }

        else {
            return (
                <div></div>
            )
        }
    }

    render() {

        const data =
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish)}
                </div>
            </div>


        return (
            <div>
                {data}
            </div >
        )
    }



}
