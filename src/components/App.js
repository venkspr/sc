import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import _ from 'lodash';
import './style.css';
import Orders from './Orders';
import toastr from 'toastr';
import CategoryList from './CategoryList';
import NavBar from './NavBar';
import NavBarSecond from './NavBarSecond';
import Middle from './Middle';
import RightSideBar from './RightSideBar';
import Footer from './Footer';
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
    productCards: [],
    page: 0
  };

  setPage = (id) => {
    this.setState({ page: id });
  };
  handleMouseOver = (id) => {
    //console.log('inside mouseover', id);
    this.setState({ productId: id });
    const product = _.find(this.state.products, { id: id });
    this.setState({ productCards: product });
  };
  async componentDidMount() {
    //const allProducts = await apiClient.searchProductsCategories();
    //console.info(allProducts.products);
    toastr.options = {
      showDuration: '1500',
      hideDuration: '500',
      timeOut: '500',
      extendedTimeOut: '500',
      positionClass: 'toast-bottom-right'
    };

    const root = JSON.parse(localStorage.getItem('root'));
    if (root) {
      this.setState(root);
      this.setState({ showFeatured: true, activeCategoryId: '' });
    }
    const categories = await apiClient.getCategories();
    this.setState({ categories });
    const products = await apiClient.searchProducts('factory');
    this.setState({ products: [...products.searchProducts] });
  }

  resetShowFeatured = async () => {
    this.setState({ showFeatured: true, activeCategoryId: '' });
    const products = await apiClient.searchProducts('factory');
    this.setState({ products: [...products.searchProducts] });
  };

  componentDidUpdate() {
    localStorage.setItem('root', JSON.stringify(this.state));
    //console.log(this.state.cart[0]);
  }

  productAlreadyInCart = (prevState, product) =>
    prevState.cart.find((cp) => cp.id === product.id);

  emptyCart = () => {
    // if (confirm('Are you sure you want to clear your cart ?')) {
    //   this.setState(      {cart:[]}    );
    // }
    this.setState({ cart: [] });
  };

  searchClick = async (evt) => {
    if (evt.target.value.length > 1) {
      this.setState({ showFeatured: false });
      const products = await apiClient.searchProducts(evt.target.value);
      this.setState({ products: [...products.searchProducts] });
    }
  };
  deleteItem = (id, CrossReference) => {
    this.setState((prevState) => {
      const newCart = prevState.cart;
      _.remove(newCart, (el) => {
        return el.id == id;
      });
      return { cart: [...newCart] };
    });
    toastr.warning(CrossReference + ' removed from shopping cart');
  };
  updateCartQuantity = (evt) => {
    const index = this.state.cart.findIndex((element) => {
      return element.id == evt.target.id;
    });
    const nValue = evt.target.value;
    const id = evt.target.id;
    if (nValue == '0') {
      toastr.warning('Product removed from shopping cart');
      this.setState((prevState) => {
        const newCart = prevState.cart;
        _.remove(newCart, (el) => {
          return el.id == id;
        });
        return {
          cart: [...newCart]
        };
      });
    } else {
      this.setState((prevState) => {
        const newCart = prevState.cart;
        newCart[index].quantity = nValue;
        return {
          cart: [...newCart]
        };
      });
    }
  };

  addToCart = (product) => {
    this.setState((prevState) => {
      product.quantity
        ? (product.quantity = product.quantity)
        : (product.quantity = 1);
      if (this.productAlreadyInCart(prevState, product)) {
        toastr.warning('Item allready in cart');
        return;
      }
      toastr.success(product.CrossReference + ' added to shopping cart');
      return {
        cart: [...prevState.cart, product],
        showCart: true
      };
    });
  };
  showProductsForCategory = async (categoryId) => {
    this.setState({ showFeatured: false });
    const products = await apiClient.getProducts(categoryId);
    this.setState({ products, activeCategoryId: categoryId });
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar cart={this.state.cart} />
          <NavBarSecond resetShowFeatured={this.resetShowFeatured} />
          <div className="container-fluid">&nbsp;&nbsp;&nbsp;</div>
          <div className="container-fluid">
            <div className="row">
              <CategoryList
                categories={this.state.categories}
                activeCategoryId={this.state.activeCategoryId}
                onCategoryClick={this.showProductsForCategory}
              />
              <Switch>
                <Route
                  exact
                  path="/orders"
                  render={(routeProps) => (
                    <Orders {...routeProps} {...this.state} {...this} />
                  )}
                />
                <Route
                  path="/"
                  render={(routeProps) => (
                    <Middle {...routeProps} {...this.state} {...this} />
                  )}
                />
              </Switch>
              <RightSideBar {...this.state} {...this} />
            </div>
          </div>
          {/* <ProductFragment {...this} product={this.state.productCards} /> */}
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
