import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap'
import MainComponent from './components/MainComponent';
import {DISHES} from './shared/dishes';

class App extends Component{

  render(){
    return (
      <div className="App"> 
        <MainComponent /> 
      </div>
    );

  }
}

export default App;
