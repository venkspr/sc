import axios from "axios";
//import config from '../../server/config';
const config = {
  apiHost: "https://apex.oracle.com/pls/apex/venks/om"
};

export default {
  getCategories() {
    return axios.get(`${config.apiHost}/categories`)
    .then(resp => resp.data.items);
  },
  getProducts(categoryId) {
    return axios
      .get(
        `${config.apiHost}/products?category=${categoryId}`
      )
      .then(resp => resp.data.items);
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
      .then(resp => resp.data.data);
  },

  searchProducts(text) {
    return axios
      .get(
        `${config.apiHost}/productsearch?searchterm=${text}`
      )
      .then(resp => resp.data.items);
  }
};