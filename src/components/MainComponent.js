import React,{Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './MenuComponent';
import MenuDetail from './MenuDetail';
import {DISHES} from '../shared/dishes';

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
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/"> Ristorante </NavbarBrand>
          </div>
        </Navbar> 
        
          <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />

          <MenuDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />  
        
      </>
    );

  }
}

export default MainComponent;
