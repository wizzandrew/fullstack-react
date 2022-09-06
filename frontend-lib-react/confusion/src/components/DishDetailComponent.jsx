import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

function RenderDish({ dish }) {

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

function RenderComments({ dish }) {

    if (dish != null && dish.comments != null) {

        let comments = dish.comments.map(com => {
            return (
                <div>
                    <p>{com.comment}</p>
                    {/* <p>--{com.author}, {new Date(com.date).toDateString().substring(4)}</p> */}
                    <p>--{com.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(com.date)))}</p>
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

const DishDetail = (props) => {
    const data =
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                <RenderDish dish={props.dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
                <RenderComments dish={props.dish} />
            </div>
        </div>


    return (
        <div>
            <div className="container">
                {data}
            </div>
        </div >
    )
}

export default DishDetail;







