import React from 'react';
import Product from './Product';

class ProductList extends React.Component {
  render() {
    return (
      <div>
        {this.props.products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    );
  }
}

export default ProductList;
