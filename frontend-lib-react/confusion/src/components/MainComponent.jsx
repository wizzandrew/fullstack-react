import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { Routes, Route } from 'react-router-dom';


class MainComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
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
                <Home dish={this.state.dishes.filter(d => d.featured)[0]}
                    promotion={this.state.promotions.filter(p => p.featured)[0]}
                    leader={this.state.leaders.filter(l => l.featured)[0]}
                />
            );
        }

        return (
            <div>
                <Header />
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/menu" element={<Menu dishes={this.state.dishes} />} />
                    <Route path="/contactus" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        );
    }
}

export default MainComponent;
