import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


export default class Menu extends Component {

    render() {
        const menu = this.props.dishes.map(
            dish => {
                return (
                    <div className="col-12 col-md-5 m-1" key={dish.id}>
                        <Card key={dish.id} onClick={() => this.props.onClick(dish.id)}>
                            <CardImg src={dish.image} alt={dish.name} width="100%" />
                            <CardImgOverlay>
                                <CardTitle tag="h5">{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </div>
                );
            }
        );

        return (
            <div className='container'>
                <div className="row">
                    {menu}
                </div>
            </div>
        )
    }
}
