import React, { Component } from 'react';
import Home from './HomeComponent';
import About from './AboutComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { Routes, Route, useParams } from 'react-router-dom';


class MainComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home dish={this.state.dishes.filter(d => d.featured)[0]}
                    promotion={this.state.promotions.filter(p => p.featured)[0]}
                    leader={this.state.leaders.filter(l => l.featured)[0]}
                />
            );
        }

        const DishWithId = () => {

            let params = useParams();

            return (
                <DishDetail dish={this.state.dishes.filter(d => d.id === parseInt(params.dishId, 10))[0]}
                    comments={this.state.comments.filter(c => c.dishId === parseInt(params.dishId, 10))}
                />
            );
        }

        return (
            <div>
                <Header />
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path='/about' element={<About leaders={this.state.leaders} />} />
                    <Route path="/menu" element={<Menu dishes={this.state.dishes} />} />
                    <Route path='/menu/:dishId' element={<DishWithId />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        );
    }
}

export default MainComponent;
