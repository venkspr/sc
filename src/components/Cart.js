import React from 'react';

class Cart extends React.PureComponent {
  cartTotal = () =>
    this.props.products
      .reduce((acc, curr) => acc + curr.Price, 0) / 100;

  render() {
    return (
      <React.Fragment>
        <ul>
          {this.props.products.map((product) => (
            <li key={product.id}>
              {product.CrossReference} - ${product.Price / 100}
            </li>
          ))}
        </ul>
        <div>Total: ${this.cartTotal()}</div>
      </React.Fragment>
    );
  }
}

export default Cart;
