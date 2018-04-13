import React from 'react';

const style18 = {
  width: '20rem'
};

class Product extends React.Component {
  handleAddToCart = () => this.props.addToCart(this.props.product);

  render() {
    return (
      <React.Fragment>
        <div
          id="grabProduct"
          className="card proTip"
          style={style18}
          onMouseOver={() => this.props.handleMouseOver(this.props.product.id)}
        >
          {/* <img className="card-img-top" src="http://placehold.it/50x20" alt="Card image cap"/> */}
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                color: 'darkblue'
              }}
            >
              {this.props.product.id}
            </h5>
            <div>
              <div
                className={
                  'hud-card-divider' + (parseInt(this.props.index) + 1)
                }
              />
              <div className="star-rating">
                <span
                  style={{
                    width: Math.floor(Math.random() * 90) + 10,
                    wordWrap: 'normal'
                  }}
                />
                &nbsp;<div
                  style={{
                    marginLeft: '3px',
                    display: 'inline-block',
                    fontFamily: 'Qualcomm Web'
                  }}
                >
                  {Math.floor(Math.random() * 7000) + 3100}
                </div>
              </div>
              {Math.floor(Math.random() * Math.floor(4)) == 2 ? (
                <div
                  style={{
                    backgroundColor: '#283141',
                    fontSize: '10px',
                    display: 'inline-block',
                    fontFace: 'Sans Serif',
                    marginLeft: '5px',
                    color: '#F7FCFF',
                    paddingLeft: '5px',
                    paddingRight: '5px',
                    paddingBottom: '2px',
                    paddingTop: '2px',
                    fontWeight: 'bold',
                    borderRadius: '3px',
                    fontFamily: 'Qualcomm Next'
                  }}
                >
                  <i className="fa fa-check" />&nbsp; Qualcomm&apos;s&nbsp;
                  <span
                    style={{
                      color: '#E6A836'
                    }}
                  >
                    Choice
                  </span>
                </div>
              ) : (
                // <img
                //   src="/qcomchoice.jpg"
                //   style={{ height: '50%', width: '50%' }}
                // /> < span >& nbsp;
                <span />
              )}
            </div>
            <p className="card-text">{this.props.product.ItemDescription}</p>
            <p className="card-text">
              <b>Price: $</b>
              {(this.props.product.Price / 100).toLocaleString()}
            </p>
          </div>
          <button onClick={this.handleAddToCart} className="btn btn-info">
            Add To Cart
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Product;
