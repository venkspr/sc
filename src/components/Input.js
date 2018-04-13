import React from 'react';

class Input extends React.Component {
  state = {
    value: this.props.value
  };

  handleChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value == '' || re.test(e.target.value)) {
      //this.setState({value: e.target.value})
      this.setState({ value: e.target.value });
      this.props.updateCartQuantity(e);
    }
  };
  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          className="form-control text-center"
          value={this.state.value}
          onChange={this.handleChange}
          id={this.props.id}
        />
      </React.Fragment>
    );
  }
}

export default Input;
