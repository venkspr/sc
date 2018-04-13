import React from 'react';
import Input from './Input';
import roundTo from 'round-to';

const styleFifty = {
  width: '80%'
};
const styleTen = {
  width: '5%'
};

const styleEight = {
  width: '8%'
};

const styleTwentyTwo = {
  width: '12%'
};

class Cart extends React.Component {
  cartTotal = () =>
    this.props.products.reduce(
      (acc, curr) => acc + curr.Price * curr.quantity,
      0
    ) / 100;

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <table id="cart" className="table table-hover table-condensed">
            <thead>
              <tr>
                <th style={styleFifty}>Product</th>
                <th style={styleTen}>Price</th>
                <th style={styleEight}>Quantity</th>
                <th style={styleTwentyTwo} className="text-center">
                  Sub
                </th>
                <th style={styleTen} />
              </tr>
            </thead>
            <tbody>
              {this.props.products.map((product) => (
                <React.Fragment key={product.id}>
                  <tr key={product.id}>
                    <td data-th="Product" key={product.id}>
                      <div className="row" key={product.id}>
                        <div className="col-sm-10">
                          <h6
                            className="nomargin"
                            style={{ color: 'darkblue' }}
                          >
                            {product.CrossReference}
                          </h6>
                          {/* <p>{product.ItemDescription}</p> */}
                        </div>
                      </div>
                    </td>
                    <td
                      data-th="Price"
                      style={{ color: '#B12704', fontWeight: 'bold' }}
                    >
                      ${product.Price / 100}{' '}
                    </td>
                    <td data-th="Quantity">
                      <Input
                        type="number"
                        key={product.id}
                        className="form-control text-center"
                        value={product.quantity}
                        id={product.id}
                        updateCartQuantity={this.props.updateCartQuantity}
                      />
                    </td>
                    <td
                      data-th="Subtotal"
                      className="text-center"
                      style={{ color: '#B12704', fontWeight: 'bold' }}
                    >
                      {roundTo(product.Price / 100 * product.quantity, 3)}
                    </td>
                    <td className="actions" data-th="">
                      <button className="btn btn-info btn-sm">
                        <i className="fa fa-refresh" />
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() =>
                          this.props.deleteItem(
                            product.id,
                            product.CrossReference
                          )
                        }
                      >
                        <i className="fa fa-trash-o" />
                      </button>
                    </td>
                  </tr>
                </React.Fragment>
              ))}

              {/* <tr>
                <td data-th="Product">
                  <div className="row">
                    <div className="col-sm-2 hidden-xs"><img src="http://placehold.it/100x100" alt="..." className="img-responsive"/></div>
                    <div className="col-sm-10">
                      <h4 className="nomargin">Product 1</h4>
                      <p>Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                </td>
                <td data-th="Price">$1.99</td>
                <td data-th="Quantity">
                  <input type="number" className="form-control text-center" value="1"/>
                </td>
                <td data-th="Subtotal" className="text-center">1.99</td>
                <td className="actions" data-th="">
                  <button className="btn btn-info btn-sm"><i className="fa fa-refresh"></i></button>
                  <button className="btn btn-danger btn-sm"><i className="fa fa-trash-o"></i></button>
                </td>
              </tr> */}
            </tbody>
            <tfoot>
              {/* <tr className="visible-xs">
                <td className="text-center"><strong>Total 1.99</strong></td>
              </tr> */}
              <tr>
                <td>
                  <a
                    href="#"
                    className="btn btn-warning"
                    style={{ color: 'white' }}
                    onClick={this.props.emptyCart}
                  >
                    <i className="fa fa-trash-o" /> Empty Cart
                  </a>
                </td>
                <td colSpan="2" className="hidden-xs" />
                <td className="hidden-xs text-center">
                  <strong>Total </strong>
                  <div style={{ color: '#B12704', fontWeight: 'bold' }}>
                    ${this.cartTotal().toLocaleString()}
                  </div>
                </td>
                <td>
                  <a href="#" className="btn btn-success btn-block">
                    Checkout <i className="fa fa-angle-right" />
                  </a>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        {/* <ul>
          {this.props.products.map((product) => (
            <li key={product.id}>
              <div>{product.CrossReference} - ${product.Price / 100}
                {/* <input type="text" value={product.quantity}
                  onChange={this.props.handleChange} id={product.id}/>
                {product.quantity}
                <Input value={product.quantity} id={product.id} updateCartQuantity={this.props.updateCartQuantity} />
              </div>
            </li>
          ))}
        </ul> */}
      </React.Fragment>
    );
  }
}

export default Cart;
