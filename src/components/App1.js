import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import _ from 'lodash';
import './style.css';
import toastr from 'toastr';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import Cart from './Cart';
import NavBar from './NavBar';
import NavBarSecond from './NavBarSecond';
import { Link, Routes } from 'react-router-dom';
// import ProductFragment from './ProductFragment';

import apiClient from '../store/actions/api-client';

class App extends React.PureComponent {
  state = {
    categories: [],
    products: [],
    cart: [],
    showCart: false,
    qtyPassed: '',
    showFeatured: true,
    activeCategoryId: '',
    updateRating: true,
    productCards: []
  };

  render() {
    return <NavBarSecond />;
  }
}

export default App;
