import React,{Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './MenuComponent';
import MenuDetail from './MenuDetail';
import {DISHES} from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './ContactComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

class MainComponent extends Component{

  constructor(props){
    super(props);

    this.state= { dishes : DISHES , 
                  selectedDish : null, 
                  comments: COMMENTS,
                  promotions: PROMOTIONS,
                  leaders: LEADERS};
  }
  
  onDishSelect(dishId) {
      
    this.setState({ selectedDish: dishId});
  }
  
  render(){

    const HomePage = () => {
      return( 
        <Home 
        dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]} /> )
    }
    return (
      <>
          <Header/>
          <Switch>
            <Route path='/home' component={HomePage} />          
            <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
            <Route exact path='/contactus' component={Contact} />
            <Redirect to="/home" /> 
          </Switch>
          <Footer/>
      </>
    );

  }
}

export default MainComponent;
