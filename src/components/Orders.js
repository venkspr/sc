import React from 'react';
import axios from 'axios';
import Loader from 'react-loader-advanced';
//import Spinner from 'react-spinkit';
const spinner = (
  <span>
    {/* <i className="fa fa-5x fa-spinner " /> */}
    <img src="loading.gif" style={{ height: '200px', width: '200px' }} />
  </span>
);

class Orders extends React.PureComponent {
  state = {
    data: [],
    page: this.props.page,
    loading: true,
    options: [...Array(100).keys()]
  };
  delay = (ms) => {
    return new Promise((resolve) => {
      return setTimeout(resolve, ms);
    });
  };

  async componentDidMount() {
    await this.delay(2000);
    axios
      .get('http://vrangara2:8080/angular/qualcomm/om/orders?page=0')
      .then((response) => {
        // console.log(response);
        this.setState({ data: [...response.data.items] });
        this.setState({ loading: false });
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
    if (this.state.page > 0) {
      await this.setState({ loading: true });
      await this.delay(2000);

      await this.setState((prevState) => {
        return { page: prevState.page - 1 };
      });

      this.props.setPage(this.state.page);
    }

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

  nextPage = async () => {
    await this.setState({ loading: true });
    await this.delay(2000);

    //await this.delay(100);

    await this.setState((prevState) => {
      return { page: parseInt(prevState.page) + 1 };
    });

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

  render() {
    return (
      <div className="col-lg-6">
        <Loader
          show={this.state.loading}
          message={spinner}
          backgroundStyle={{ backgroundColor: 'white' }}
        >
          <table className="table table-hover table-sm">
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>
                  <button
                    style={{ cursor: 'pointer' }}
                    className="btn btn-primary"
                    onClick={this.prevPage}
                  >
                    Prev
                  </button>
                  <button
                    style={{ cursor: 'pointer', marginLeft: '10px' }}
                    className="btn btn-primary"
                    onClick={this.firstPage}
                  >
                    First
                  </button>
                </td>
                <td colSpan="1" className="text-right">
                  <select
                    value={this.state.page}
                    onChange={this.handlePageChange}
                  >
                    {this.state.options.map((item) => (
                      <option value={item} key={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="text-right">
                  <button
                    style={{ cursor: 'pointer' }}
                    className="btn btn-primary"
                    onClick={this.nextPage}
                  >
                    Next
                  </button>
                </td>
              </tr>
              <tr>
                <th>Order Number</th>
                <th>Party Name</th>
                <th>Description</th>
              </tr>
              {this.state.data.map((item, i) => (
                <tr key={i}>
                  <td style={{ width: '10%' }}>
                    <a href={'/Employee/' + item._id}>
                      {this.state.data[i].order_number}
                    </a>
                  </td>
                  <td className="col-md-2" style={{ width: '20%' }}>
                    {this.state.data[i].party_name}
                  </td>
                  <td className="col-md-4" style={{ width: '70%' }}>
                    {this.state.data[i].description}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <button
                    style={{ cursor: 'pointer' }}
                    className="btn btn-primary"
                    onClick={this.prevPage}
                  >
                    Prev
                  </button>
                </td>
                <td />
                <td className="text-right">
                  <button
                    style={{ cursor: 'pointer' }}
                    className="btn btn-primary"
                    onClick={this.nextPage}
                  >
                    Next
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </Loader>
      </div>
    );
  }
}

export default Orders;
