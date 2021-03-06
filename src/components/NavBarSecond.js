import React from 'react';
import { Link } from 'react-router-dom';

class NavBarSecond extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="collapse navbar-collapse" id="navbarSupportedContent-5">
          <nav className="navbar navbar-expand-lg navbar-light bg-qcom ">
            <a className="navbar-brand qcom " href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav navbar-center">
                <li className="nav-item ">
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
                    to="orders"
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
                    Dropdown link
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
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default NavBarSecond;
