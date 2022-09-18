import React, { Component } from 'react';
import Home from './HomeComponent';
import About from './AboutComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Routes, Route, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

//redux
const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}


class MainComponent extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        const HomePage = () => {
            return (
                <Home dish={this.props.dishes.filter(d => d.featured)[0]}
                    promotion={this.props.promotions.filter(p => p.featured)[0]}
                    leader={this.props.leaders.filter(l => l.featured)[0]}
                />
            );
        }

        const DishWithId = () => {

            let params = useParams();

            return (
                <DishDetail dish={this.props.dishes.filter(d => d.id === parseInt(params.dishId, 10))[0]}
                    comments={this.props.comments.filter(c => c.dishId === parseInt(params.dishId, 10))}
                />
            );
        }

        return (
            <div>
                <Header />
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path='/about' element={<About leaders={this.props.leaders} />} />
                    <Route path="/menu" element={<Menu dishes={this.props.dishes} />} />
                    <Route path='/menu/:dishId' element={<DishWithId />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        );
    }
}

export default (connect(mapStateToProps)(MainComponent));
