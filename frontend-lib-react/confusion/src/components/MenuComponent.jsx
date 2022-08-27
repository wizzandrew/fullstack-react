import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';
import DishDetail from './DishDetailComponent';

export default class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(id) {
        this.setState({
            selectedDish: this.props.dishes.filter(d => d.id === id)[0]
        });
    }

    render() {
        const menu = this.props.dishes.map(
            dish => {
                return (
                    <div className="col-12 col-md-5 m-1" key={dish.id}>
                        <Card key={dish.id} onClick={() => { this.onDishSelect(dish.id) }}>
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
                <DishDetail dish={this.state.selectedDish} />
            </div>
        )
    }
}
