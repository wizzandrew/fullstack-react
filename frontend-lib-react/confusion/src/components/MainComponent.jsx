import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { Routes, Route } from 'react-router-dom';


class MainComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            // selectedDish: null
        };
    }

    // onDishSelect(dishId) {
    //     this.setState({
    //         selectedDish: dishId
    //     });
    // }

    // <Menu dishes={this.state.dishes} onClick={(dishId) => { this.onDishSelect(dishId) }} />
    // <DishDetail dish={this.state.dishes.filter(d => d.id === this.state.selectedDish)[0]} />

    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        }

        return (
            <div>
                <Header />
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/menu" element={<Menu dishes={this.state.dishes} />} />
                </Routes>
                <Footer />
            </div>
        );
    }
}

export default MainComponent;
