import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import Loading from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';

function RenderCard({ item, isLoading, errorMessage }) {
    if(isLoading) {
        return(
            <Loading />
        );
    }
    else if(errorMessage) {
        return(
            <h5>{errorMessage}</h5>
        );
    }

    return (
        // FadeTransform is a part of animation
        <FadeTransform in transformProps = {
            {
                exitTransform: 'scale(0.5) translateY(-50%)'
            }
        }>
        <Card>
            <CardImg src={baseUrl + item.image} alt={item.name} />
            <CardBody>
                <CardTitle tag="h5">{item.name}</CardTitle>
                {item.designation ? <CardSubtitle tag="h6">{item.designation}</CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
        </FadeTransform>
    );
}

export default function Home(props) {
    return (
        <div className='container'>
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} 
                        isLoading={props.dishesLoading} 
                        errorMessage={props.dishesErrorMessage}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} 
                        isLoading={props.promotionsLoading} 
                        errorMessage={props.promotionErrorMessage}
                    />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    )
}
