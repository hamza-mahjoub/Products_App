const { ProductQueryBuilder } = require('../utils/QueryBuilder');
const config = require('../configs/config');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');

// const fetch = require('node-fetch');

/**
 * Query for products
 * @param {Object} filter - GraphQl filter
 * @param {Object} options - Query options
 * @param {string} [options.date] - Sort option by date
 * @param {number} [options.limit] - Maximum number of results (default = 10)
 * @returns {Promise<QueryResult>}
 */

const queryProducts = async (filter, options) => {
  const data = await fetch(config.api_url, ProductQueryBuilder(options, config.access_token))
  .then(res => {
    return res.json();
  })
  .then(json => {
    return json;
  })
  .catch(err => {
    console.log(err);  
  });

  if(!data)
    throw new ApiError(httpStatus.NO_CONTENT, 'No data');
  
  return data;
};

module.exports = {
  queryProducts,
};
