import axios from 'axios';
import config from '../../server/config';

export default {
  getCategories() {
    return axios
      .post(
        `${config.apiHost}?query=
      {
        categories {
          id: _id
          ProductLine
          ProductSeries
          products{
     CrossReference
   }
        }
      }
    `
      )
      .then((resp) => resp.data.data.categories);
  },
  getProducts(categoryId) {
    return axios
      .post(
        `${config.apiHost}?query=
      query GetProductsForCategory ($categoryId: String!) {
        category(_id: $categoryId) {
          products {
            id: _id
            CrossReference
            ItemDescription
            Price
            category {
              ProductLine
              ProductSeries
            }
          }
        }
      }
    &variables=${JSON.stringify({ categoryId })}`
      )
      .then((resp) => resp.data.data.category.products);
  },

  searchProductsCategories() {
    return axios
      .post(
        `${config.apiHost}?query=
        {
          products {
            _id
            ItemDescription
            CrossReference
            Price
            category {
              ProductLine
              ProductSeries
            }
          }
        }
 `
      )
      .then((resp) => resp.data.data);
  },

  searchProducts(text) {
    return axios
      .post(
        `${config.apiHost}?query=
        {
    searchProducts(text:"${text}"){
      CrossReference
      ItemDescription
      Price
      id:_id
    }
  } `
      )
      .then((resp) => resp.data.data);
  }
};
