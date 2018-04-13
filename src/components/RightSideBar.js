import React from 'react';
import './style.css';
import Cart from './Cart';
// import ProductFragment from './ProductFragment';

class RightSideBar extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div id="rightSidebar" className="col-lg-4">
          {/* The Cart
        <button onClick={() => this.setState({ showCart: false })}>=&gt;</button> */}
          {this.props.cart.length > 0 ? (
            <Cart
              products={this.props.cart}
              updateCartQuantity={this.props.updateCartQuantity}
              deleteItem={this.props.deleteItem}
              emptyCart={this.props.emptyCart}
            />
          ) : (
            <div> &nbadsfadsfsp; </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default RightSideBar;
