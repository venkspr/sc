import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <footer className="page-footer font-small stylish-color-dark pt-4 mt-4">
          <div className="container text-center text-md-left">
            <div className="row text-center text-md-left mt-3 pb-3">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Venky Inc
                </h6>
                <p>
                  Here you can use rows and columns here to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Products
                </h6>
                <p>
                  <a href="#!">Enterprise Solution</a>
                </p>
                <p>
                  <a href="#!">Consumer  Solution</a>
                </p>
                <p>
                  <a href="#!">Mobile Solution</a>
                </p>
                <p>
                  <a href="#!">Cloud Solution</a>
                </p>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Useful links
                </h6>
                <p>
                  <a href="#!">Venky Account</a>
                </p>
                <p>
                  <a href="#!">Become a solution provider</a>
                </p>
                <p>
                  <a href="#!">Returns</a>
                </p>
                <p>
                  <a href="#!">Software Licenses</a>
                </p>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Contact
                </h6>
                <p>
                  <i className="fa fa-home mr-3" /> San Diego, California, USA
                </p>
                <p>
                  <i className="fa fa-envelope mr-3" /> info@venky.com
                </p>
                <p>
                  <i className="fa fa-phone mr-3" /> + 1 (858) 587-1121
                </p>
                <p>
                  <i className="fa fa-print mr-3" /> + 1 (858) 587-1131
                </p>
              </div>
            </div>

            <hr />

            <div className="row py-3 d-flex align-items-center">
              <div className="col-md-8 col-lg-8">
                <p className="text-center text-md-left grey-text">
                  © 2018 Copyright:{' '}
                  <a href="https://venky.com/">
                    <strong> venky.com</strong>
                  </a>
                </p>
              </div>
              <div className="col-md-4 col-lg-4 ml-lg-0">
                <div className="text-center text-md-right">
                  <ul className="list-unstyled list-inline">
                    <li className="list-inline-item">
                      <a className="btn-floating btn-sm rgba-white-slight mx-1">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="btn-floating btn-sm rgba-white-slight mx-1">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="btn-floating btn-sm rgba-white-slight mx-1">
                        <i className="fa fa-google-plus" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="btn-floating btn-sm rgba-white-slight mx-1">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
