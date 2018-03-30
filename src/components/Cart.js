import React from 'react';

class Cart extends React.PureComponent {
  render() {
    return (
      <ul>
        {this.props.products.map((product) => (
          <li key={product.id}>
            {product.CrossReference} - ${product.Price / 100}
          </li>
        ))}
      </ul>
    );
  }
}

export default Cart;
