import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import _ from 'lodash';
import './style.css';
import ProductList from './ProductList';
// import ProductFragment from './ProductFragment';

class Middle extends React.PureComponent {
  render() {
    return (
      <Router>
        <React.Fragment>
          <div id="main" className="col-lg-6">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              id="txtSearch"
              onChange={this.props.searchClick}
            />
            <div className="row">&nbsp;</div>
            {this.props.showFeatured ? (
              <div className="alert alert-info">
                <h5>Featured Products</h5>
              </div>
            ) : (
              <div />
            )}
            <ProductList
              products={this.props.products}
              addToCart={this.props.addToCart}
              handleMouseOver={this.props.handleMouseOver}
            />
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default Middle;
