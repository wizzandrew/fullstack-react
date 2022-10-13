import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Loading from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderMenuItem({ dish }) {
    return (
        <Card>
            <Link to={`/menu/${dish.id}`}>
                <CardImg src={baseUrl + dish.image} alt={dish.name} width="100%" />
                <CardImgOverlay>
                    <CardTitle tag="h5">{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Menu = (props) => {

    let menu;

    if(props.dishes.isLoading) {
        menu = (
            <Loading />
        )
    }
    else if(props.dishes.error) {
        menu = (
            <h5>{props.dishes.error}</h5>
        )
    }
    else if(props.dishes.dishes.length > 0) {
        menu = props.dishes.dishes.map(
            dish => {
                return (
                    <div className="col-12 col-md-5 m-1" key={dish.id}>
                        <RenderMenuItem dish={dish} />
                    </div>
                );
            }
        );
    }

    
    return (
        <div className='container'>
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    )
}

export default Menu;




