import { ProductQueryBuilder, ApiError } from '../utils';
import { config } from '../configs';
import httpStatus from 'http-status';

/**
 * Query for products
 * @param {Object} filter - GraphQl filter
 * @param {Object} options - Query options
 * @param {string} [options.date] - Sort option by date
 * @param {number} [options.limit] - Maximum number of results (default = 10)
 * @returns {Promise<QueryResult>}
 */

const queryProducts = async (filter: any, options: any) => {
  const init: RequestInit = ProductQueryBuilder(options, config.access_token);
  const data = await fetch(config.api_url, { ...init, mode: 'cors' })
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      return json;
    })
    .catch((err) => {
      console.log(err);
    });

  if (!data) throw new ApiError(httpStatus.NO_CONTENT, 'No data');

  return data;
};

export default {
  queryProducts,
};
