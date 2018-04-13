import React from 'react';
import './../../public/index.css';
import { UncontrolledTooltip } from 'reactstrap';

class ProductFragment extends React.Component {
  handleAddToCart = () => this.props.addToCart(this.props.product);

  render() {
    return (
      <React.Fragment>
        <UncontrolledTooltip placement="top" target="grabProduct">
          <div className="container-fluid">
            Hello world!{' '}
            <img
              className="card-img-top"
              src={
                Math.random() > 0.5
                  ? 'https://media.istockphoto.com/photos/computer-micro-chip-picture-id121273961'
                  : 'http://cdn.androidbeat.com/wp-content/uploads/2017/01/Snapdragon-Qualcomm.jpeg'
              }
              alt="Card image cap"
              style={{ height: '100px', width: '100px' }}
            />
          </div>
        </UncontrolledTooltip>

        <div id="grabProduct" style={{ overflow: 'hidden' }} className="row">
          <div className="col-xs-12">
            <img
              className="card-img-top"
              src={
                Math.random() > 0.5
                  ? 'https://media.istockphoto.com/photos/computer-micro-chip-picture-id121273961'
                  : 'http://cdn.androidbeat.com/wp-content/uploads/2017/01/Snapdragon-Qualcomm.jpeg'
              }
              alt="Card image cap"
              style={{ height: '300px', width: '300px' }}
            />
          </div>
          <div className="col-xs-2" />
          <div className="col-xs-10 container-fluid">
            {this.props.product.ItemDescription}
          </div>
          <div className="container-fluid">
            <div className="col-xs-2" />
            <div className="col-xs-10">
              <div className="star-rating">
                <span
                  style={{
                    width: Math.floor(Math.random() * 90) + 10,
                    wordWrap: 'normal'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductFragment;
