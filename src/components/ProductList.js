import React from 'react';
import Product from './Product';
import _ from 'lodash';
class ProductList extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !_.isEqual(this.props.products.sort(), nextProps.products.sort()); //true
  }

  render() {
    return (
      <div className="row">
        {this.props.products.map((product, index) => {
          return (
            <Product
              key={product.id}
              product={product}
              handleMouseOver={this.props.handleMouseOver}
              index={index}
              addToCart={this.props.addToCart}
              updateRating={this.props.updateRating}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
