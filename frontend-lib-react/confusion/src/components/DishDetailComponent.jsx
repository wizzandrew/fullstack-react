import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import Loading from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function RenderDish({ dish }) {

    if (dish != null) {
        return (
            // FadeTransform is a part of animation
            <FadeTransform in transformProps = {
                {
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }
            }>
            <Card>
                <CardImg top src={baseUrl + dish.image} alt={dish.name} width="100%" />
                <CardBody>
                    <CardTitle tag="h5">{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </FadeTransform>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

function RenderComments({ comments, postComment, dishId }) {

    if (comments != null) {

        let comm = comments.map(com => {
            return (
                // Fade is a part of animation
                <Fade in>
                    <div>
                    <p>{com.comment}</p>
                    {/* <p>--{com.author}, {new Date(com.date).toDateString().substring(4)}</p> */}
                    <p>--{com.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(com.date)))}</p>
                    </div>
                </Fade>
            )
        })

        return (
            <div>
                <h4>Comments</h4>
                
                {/* Stagger is a part of animation */}
                <Stagger in>
                    {comm}
                </Stagger>

                <CommentForm postComment={postComment} dishId={dishId}/>
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

    if(props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading/>
                </div>
            </div>
        )
    }
    else if(props.errorMessage) {
        return (
            <div className="container">
                <div className="row">
                    <h5>{props.errorMessage}</h5>
                </div>
            </div>
        )
    }

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
                    <RenderComments comments={props.comments} 
                        postComment={props.postComment}
                        dishId={props.dish.id}
                    />
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







