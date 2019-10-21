import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//import './style.css';
import App from './App';
// import ProductFragment from './ProductFragment';

class Main extends React.PureComponent {
  render() {
    return (
      <Router>
        <React.Fragment>
          <App />
        </React.Fragment>
      </Router>
    );
  }
}

export default Main;
