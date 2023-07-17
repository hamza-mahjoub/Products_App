const { TopicQueryBuilder } = require('../utils/QueryBuilder');
const config = require('../configs/config');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');
/**
 * Query for topics
 * @returns {Promise<QueryResult>}
 */

const queryTopics = async () => {
  const data = await fetch(config.api_url, TopicQueryBuilder(config.access_token))
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
  queryTopics,
};
