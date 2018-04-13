import React from 'react';
import NotificationCart from './NotificationCart';

class NavBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav
          className="navbar  navbar-light bg-teal"
          style={{ backgroundColor: '#FFFFFF' }}
        >
          <a className="navbar-brand" href="/">
            <img src="logo.png" alt="" style={{ paddingBottom: '10px' }} />
            &nbsp;&nbsp;&nbsp;
            <h3
              className="navbar-brand"
              style={{
                color: 'white',
                faceFamily: 'Qualcomm Next',
                fontSize: '20px'
              }}
            >
              Sales Center
            </h3>
          </a>
          <ul className="nav navbar-right">
            <li>
              <i
                className="icon dripicons-home"
                style={{ fontSize: '30px', color: '#3253DC' }}
              />
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
                  color: '#3253DC',
                  marginLeft: '20px'
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
                  color: '#3253DC',
                  fontSize: '30px',
                  marginLeft: '20px'
                }}
              />
              <span
                className="badgev "
                style={{
                  backgroundColor: 'blue',
                  marginLeft: '-25px',
                  top: '15px'
                }}
              >
                3{' '}
              </span>
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
