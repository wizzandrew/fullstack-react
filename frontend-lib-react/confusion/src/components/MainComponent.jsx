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
import {postComment, fetchDishes, fetchComments, fetchPromotions} from '../redux/ActionCreators';

//redux
//pure state
const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

//dispatch managing action creators
const mapDispatchToProps = (dispatch) => ({
    postComment: (dishId, rating, author, cpmment) => dispatch(postComment(dishId, rating, author, cpmment)),
    fetchDishes: () => {dispatch(fetchDishes())},
    fetchComments: () => {dispatch(fetchComments())},
    fetchPromotions: () => {dispatch(fetchPromotions())},
});


class MainComponent extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        //access redux thunk "prop" fetch-functions()
        //watch into mapDispatchToProps() above
        this.props.fetchDishes();

        this.props.fetchComments();

        this.props.fetchPromotions();
    }

    render() {

        const HomePage = () => {
            return (
                <Home dish={this.props.dishes.dishes.filter(d => d.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrorMessage={this.props.dishes.error}
                    promotion={this.props.promotions.promotions.filter(p => p.featured)[0]}
                    promotionsLoading={this.props.promotions.isLoading}
                    promotionErrorMessage={this.props.promotions.error}
                    leader={this.props.leaders.filter(l => l.featured)[0]}
                />
            );
        }

        const DishWithId = () => {

            let params = useParams();

            return (
                <DishDetail dish={this.props.dishes.dishes.filter(d => d.id === parseInt(params.dishId, 10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    errorMessage={this.props.dishes.error}
                    comments={this.props.comments.comments.filter(c => c.dishId === parseInt(params.dishId, 10))}
                    commentsErrorMessage={this.props.comments.error}
                    postComment={this.props.postComment}
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

export default (connect(mapStateToProps, mapDispatchToProps)(MainComponent));
