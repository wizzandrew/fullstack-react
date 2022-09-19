import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';

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

function RenderComments({ comments }) {

    if (comments != null) {

        let comm = comments.map(com => {
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
                {comm}
                <CommentForm />
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
        <>
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        </>

    return (
        <div>
            <div className="container">
                {data}
            </div>
        </div >
    )
}

export default DishDetail;







