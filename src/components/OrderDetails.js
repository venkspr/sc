import React from 'react';
import axios from 'axios';
import Loader from 'react-loader-advanced';
import moment from 'moment';
import { BrowserRouter as Router } from 'react-router-dom';

//import Spinner from 'react-spinkit';
const RIGHT_ARROW = 39;
const LEFT_ARROW = 37;

class OrderDetails extends React.PureComponent {
  state = {
    data: [],
    page: this.props.page,
    loading: true,
    spinnerId: 1,
    options: [...Array(100).keys()]
  };

  // for other devs who might not know keyCodes
  componentWillUnmount() {
    document.removeEventListener('keydown', this._handleKeyDown);
  }

  _handleKeyDown = (event) => {
    switch (event.keyCode) {
      case RIGHT_ARROW:
        this.nextPage();
        break;
      case LEFT_ARROW:
        this.prevPage();
        break;
      // case UP_ARROW:
      //   this.firstPage();
      //   break;
      default:
        break;
    }
  };
  getSpinner = () => {
    const sp = (
      <span>
        {/* <i className="fa fa-5x fa-spinner " /> */}
        <img
          src={'../loading' + (Math.floor(Math.random() * 12) + 1) + '.gif'}
          style={{ height: '200px', width: '200px' }}
        />
      </span>
    );
    //console.log('inside spinner');

    return sp;
  };
  delay = (ms) => {
    return new Promise((resolve) => {
      return setTimeout(resolve, ms);
    });
  };

  async componentDidMount() {
    document.addEventListener('keydown', this._handleKeyDown);
    window.scrollTo(0, 0);

    axios
      .get(
        'http://vrangara2:8080/angular/qualcomm/om/order/' +
          this.props.match.params.ordernumber
      )
      .then((response) => {
        console.log(response);
        this.setState({ data: [...response.data.items] });
        this.setState({ loading: false });
      });
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }
  handlePageChange = async (e) => {
    await this.setState({ loading: true, page: e.target.value });
    //this.props.setPage(e.target.value);
    await this.props.setPage(this.state.page);

    axios
      .get(
        'http://vrangara2:8080/angular/qualcomm/om/orders?page=' +
          this.props.page
      )
      .then((response) => {
        //console.log(response);
        this.setState({ data: [...response.data.items], loading: false });
      });
  };

  firstPage = async () => {
    await this.setState({ page: 0, loading: true });
    await this.props.setPage(this.state.page);
    axios
      .get(
        'http://vrangara2:8080/angular/qualcomm/om/orders?page=' +
          this.state.page
      )
      .then((response) => {
        // console.log(response);
        this.setState({ data: [...response.data.items], loading: false });
      });
  };

  prevPage = async () => {
    window.history.back();
  };

  nextPage = async () => {
    await this.setState({ loading: true });
    await this.delay(1000);

    //await this.delay(100);

    await this.setState((prevState) => {
      return { page: parseInt(prevState.page) + 1, loading: false };
    });

    await this.props.setPage(this.state.page);

    axios
      .get(
        'http://vrangara2:8080/angular/qualcomm/om/orders?page=' +
          this.props.params.id
      )
      .then((response) => {
        // console.log(response);
        this.setState({ data: [...response.data.items], loading: false });
      });
  };

  render() {
    return (
      <div className="col-lg-6">
        <Loader
          show={this.state.loading}
          message={this.getSpinner()}
          hideContentOnLoad={false}
          contentBlur={150}
          backgroundStyle={{ backgroundColor: 'white' }}
        >
          <table className="table table-hover table-sm">
            <tbody>
              <tr>
                <td colSpan="2">
                  <h5>
                    <span className="badge cyan">
                      Party Name :{this.state.data.length > 0
                        ? this.state.data[0].party_name
                        : ''}
                      {/* {this.state.data[0].order_number
                    ? this.state.data[0].order_number
                    : ' '} */}
                    </span>
                  </h5>
                </td>
                <td>
                  <h5>
                    <span className="badge cyan">
                      Account Number :{this.state.data.length > 0
                        ? this.state.data[0].account_number
                        : ''}
                    </span>
                  </h5>
                </td>
              </tr>
              <tr>
                <td>
                  <h5>
                    <span className="badge cyan">
                      Order Number Name :{this.state.data.length > 0
                        ? this.state.data[0].order_number
                        : ''}
                    </span>
                  </h5>
                </td>
                <td>
                  <h5>
                    <span className="badge cyan">
                      Order date :{this.state.data.length > 0
                        ? moment(
                          this.state.data[0].creation_date,
                          'YYYY MM DD'
                        ).format('MM-DD-YYYY')
                        : ''}
                    </span>
                  </h5>
                </td>
                <td>
                  <h5>
                    <span className="badge cyan">
                      Order Type :{this.state.data.length > 0
                        ? this.state.data[0].order_type
                        : ''}
                    </span>
                  </h5>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table">
            <thead className="blue-grey lighten-4">
              <tr>
                <th>Line Number</th>
                <th>Ordered Item</th>
                {/* <th>Ship From</th> */}
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
                <th>Description</th>
                {/* <th>Part Number</th> */}
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((item, i) => (
                <tr key={i}>
                  <td>
                    <a href={'/Employee/' + item._id}>
                      {this.state.data[i].line_number}
                    </a>
                  </td>
                  <td>{this.state.data[i].ordered_item}</td>
                  {/* <td>{this.state.data[i].ship_from_org_id}</td> */}
                  <td>{this.state.data[i].ordered_quantity}</td>
                  <td>
                    ${this.state.data[i].unit_selling_price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </td>
                  <td>
                    ${this.state.data[i].line_total
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </td>
                  <td>{this.state.data[i].description}</td>
                  {/* <td>{this.state.data[i].segment1}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </Loader>
      </div>
    );
  }
}

export default OrderDetails;
