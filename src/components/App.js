import React from 'react';

import CategoryList from './CategoryList';
import ProductList from './ProductList';

import apiClient from '../store/actions/api-client';

class App extends React.PureComponent {
  state = {
    categories: [],
    products: [],
    showCart: false,
    activeCategoryId: '5abbdfde3c43e500a9a3308d',
  };
  async componentDidMount() {
    const categories = await apiClient.getCategories();
    this.setState({ categories });
  }
  showProductsForCategory = async (categoryId) => {
    const products = await apiClient.getProducts(categoryId);
    this.setState({ products, activeCategoryId: categoryId });
  };
  render() {
    return (
      <div id="container" style={{ display: 'flex' }}>
        <div id="leftSidebar" style={{ flex: 3, borderRight: 'thin solid #aaa', paddingRight: 10 }}>
          <CategoryList
            categories={this.state.categories}
            activeCategoryId={this.state.activeCategoryId}
            onCategoryClick={this.showProductsForCategory}
          />
        </div>
        <div id="main" style={{ flex: 5 }}>
          <ProductList products={this.state.products} />
        </div>
        <div
          id="rightSidebar"
          style={{
            flex: 2,
            display: this.state.showCart ? 'inline-block' : 'none',
          }}>
          The Cart......
        </div>
      </div>
    );
  }
}

export default App;
