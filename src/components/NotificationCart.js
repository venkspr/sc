import React from 'react';
import roundTo from 'round-to';
import $ from 'jquery';

const styleFifty = {
  width: '80%'
};

class NotificationCart extends React.Component {
  cartTotal = () =>
    this.props.products.reduce(
      (acc, curr) => acc + curr.Price * curr.quantity,
      0
    ) / 100;
  async componentDidMount() {
    /*global jBox:true*/
    /*eslint no-undef: "error"*/
    new jBox('Tooltip', {
      theme: 'TooltipBorder',
      maxWidth: '410px',
      offset: { x: 0, y: 0 },
      trigger: 'mouseenter',
      closeOnMouseleave: true,
      attach: '.shopTip',
      reload: 'strict',
      content: $('#grabMe')
    });
  }
  render() {
    return (
      <div id="grabMe" className="container-fluid" style={{ display: 'none' }}>
        <table id="cart" className="table table-hover table-condensed">
          <thead>
            <tr>
              <th style={styleFifty} colSpan="4">
                Shopping Cart
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <React.Fragment key={product.id}>
                <tr key={product.id}>
                  <td
                    data-th="Product"
                    key={product.id}
                    style={{ wordBreak: 'break-all' }}
                  >
                    <div className="row" key={product.id}>
                      <div className="col-sm-10">
                        <h6 className="nomargin">{product.CrossReference}</h6>
                        <div style={{ color: '#B12704', fontWeight: 'bold' }}>
                          ${product.Price / 100} X {product.quantity} =$
                          {roundTo(product.Price / 100 * product.quantity, 3)}
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3">
                <strong>Total :</strong>
                <span style={{ color: '#B12704', fontWeight: 'bold' }}>
                  ${this.cartTotal().toLocaleString()}
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#" className="btn btn-success btn-block">
                  Checkout <i className="fa fa-angle-right" />
                </a>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default NotificationCart;
