import React,{Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './MenuComponent';
import MenuDetail from './MenuDetail';
import {DISHES} from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class MainComponent extends Component{

  constructor(props){
    super(props);

    this.state= { dishes : DISHES , selectedDish : null};
  }
  
  onDishSelect(dishId) {
      
    this.setState({ selectedDish: dishId});
  }
  
  render(){
    return (
      <>
          <Header/>
        
          <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />

          <MenuDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />  
          
          <Footer/>
      </>
    );

  }
}

export default MainComponent;
