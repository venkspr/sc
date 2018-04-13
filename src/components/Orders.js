import React from 'react';
import axios from 'axios';

class Orders extends React.PureComponent {
  state = {
    data: [],
    page: this.props.page
  };

  componentDidMount() {
    axios
      .get('http://vrangara2:8080/angular/qualcomm/om/orders?page=0')
      .then((response) => {
        // console.log(response);
        this.setState({ data: [...response.data.items] });
      });
  }

  firstPage = async () => {
    await this.setState({ page: 0 });
    await this.props.setPage(this.state.page);
    axios
      .get(
        'http://vrangara2:8080/angular/qualcomm/om/orders?page=' +
          this.state.page
      )
      .then((response) => {
        // console.log(response);
        this.setState({ data: [...response.data.items] });
      });
  };

  prevPage = async () => {
    if (this.state.page > 0) {
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
        this.setState({ data: [...response.data.items] });
      });
  };

  nextPage = async () => {
    await this.setState((prevState) => {
      return { page: prevState.page + 1 };
    });

    await this.props.setPage(this.state.page);

    axios
      .get(
        'http://vrangara2:8080/angular/qualcomm/om/orders?page=' +
          this.state.page
      )
      .then((response) => {
        // console.log(response);
        this.setState({ data: [...response.data.items] });
      });
  };

  render() {
    return (
      <div className="col-lg-6">
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
                  style={{ cursor: 'pointer' }}
                  className="btn btn-primary"
                  onClick={this.firstPage}
                >
                  First
                </button>
              </td>
              <td colSpan="1" className="text-right">
                {this.state.page}{' '}
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
      </div>
    );
  }
}

export default Orders;
