import React from 'react';
import NotificationCart from './NotificationCart';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav
          className="navbar navbar-expand-lg light-blue darken-4"
          style={{ backgroundColor: '#FFFFFF' }}
        >
          <a className="navbar-brand" href="/">
            <img src="logo.png" alt="" />
            &nbsp;&nbsp;&nbsp;
            {/* <h3
              className="navbar-brand"
              style={{
                color: 'white',
                faceFamily: 'Qualcomm Next',
                fontSize: '20px'
              }}
            >
              Sales Center
            </h3> */}
          </a>
          <ul className="navbar-nav navbar-center">
            <li className="nav-item">
              <Link
                className="nav-link qcom waves-effect waves-light"
                to="/"
                onClick={this.props.resetShowFeatured}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link qcom waves-effect waves-light"
                to="/orders"
              >
                Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link qcom waves-effect waves-light"
                to="pricing"
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item dropdown ">
              <a
                className="nav-link dropdown-toggle qcom"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Documents
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
          <ul className="nav ml-auto">
            <li className="nav-item">
              <a className="nav-link waves-effect waves-light" href="#">
                <i
                  className="icon dripicons-home"
                  style={{ fontSize: '30px', color: '#FFFFFF' }}
                />
              </a>
            </li>
            <li
              data-tip
              data-for="happyFace"
              data-offset="{'top': 10, 'left': 10}"
              className=""
            >
              {/* <i
                className="fa fa-shopping-cart fa-1.5x"
                style={{ color: 'white', fontSize: '30px' }}
              /> */}
              <i
                className="icon dripicons-cart"
                style={{
                  fontSize: '30px',
                  color: '#FFFFFF',
                  marginLeft: '10px'
                }}
              />

              {/* {this.props.cart.length > 0 ? (
                <span
                  className="badgev shopTip"
                  style={{
                    color: 'white',
                    marginLeft: '-20px',
                    top: '15px'
                  }}
                >
                  {this.props.cart.length}
                </span>
              ) : (
                ''
              )}
 */}
              <span
                className="badgev shopTip"
                style={{
                  color: 'white',
                  marginLeft: '-20px',
                  top: '15px'
                }}
              >
                {this.props.cart.length > 0 ? this.props.cart.length : '0'}
              </span>
            </li>
            <li>
              &nbsp;&nbsp;&nbsp;<i
                className="icon dripicons-bell"
                title="Tool tip here"
                style={{
                  color: '#FFFFFF',
                  fontSize: '30px',
                  marginLeft: '20px'
                }}
              />
              {/* <span
                className="badgev "
                style={{
                  backgroundColor: 'blue',
                  marginLeft: '-25px',
                  top: '15px'
                }}
              >
                3{' '}
              </span> */}
            </li>
            <li>
              &nbsp;&nbsp;&nbsp;<i
                className="icon dripicons-exit"
                style={{ color: 'white', fontSize: '30px', marginLeft: '20px' }}
              />
            </li>
            <li>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;</li>
          </ul>
        </nav>
        <div>
          <NotificationCart products={this.props.cart} />
        </div>
      </React.Fragment>
    );
  }
}

export default NavBar;
