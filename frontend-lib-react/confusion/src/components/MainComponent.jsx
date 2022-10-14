import React, { Component } from 'react';
import Home from './HomeComponent';
import About from './AboutComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Routes, Route, useParams, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import {postComment, postFeedback, fetchDishes, fetchComments, fetchPromotions, fetchLeaders} from '../redux/ActionCreators';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

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
    postFeedback: (firstname, lastname, telnum, email, agree, contactType, message) => dispatch(postFeedback(firstname, lastname, telnum, email, agree, contactType, message)),
    fetchDishes: () => {dispatch(fetchDishes())},
    fetchComments: () => {dispatch(fetchComments())},
    fetchPromotions: () => {dispatch(fetchPromotions())},
    fetchLeaders: () => {dispatch(fetchLeaders())}
});


class MainComponent extends Component {

    componentDidMount() {
        //access redux thunk "prop" fetch-functions()
        //watch into mapDispatchToProps() above
        this.props.fetchDishes();

        this.props.fetchComments();

        this.props.fetchPromotions();

        this.props.fetchLeaders();
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
                    leader={this.props.leaders.leaders.filter(l => l.featured)[0]}
                    leadersLoading={this.props.leaders.isLoading}
                    leaderErrorMessage={this.props.leaders.error}
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

        
        const RouterWithAnimaion = () => {
            //react-router-dom location for react-transition-group animation
            // <Routes> work without location!!!
            const location = useLocation();

            return (
                <TransitionGroup>
                    <CSSTransition key={location.key} classNames="page" timeout={300}>
                        <Routes location={location}>
                        <Route index element={<HomePage />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path='/about' element={<About leaders={this.props.leaders} />} />
                        <Route path="/menu" element={<Menu dishes={this.props.dishes} />} />
                        <Route path='/menu/:dishId' element={<DishWithId />} />
                        <Route path="/contact" element={<Contact postFeedback={this.props.postFeedback}/>} />
                        </Routes>
                    </CSSTransition>
                </TransitionGroup>    
            );
        }
        

        return (
            <div>
                <Header />
                <RouterWithAnimaion />
                <Footer />
            </div>
        );
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(MainComponent));
