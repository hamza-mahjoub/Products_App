import { TopicQueryBuilder } from '../utils';
import { config } from '../configs';
import { ApiError } from '../utils';
import httpStatus from 'http-status';

/**
 * Query for topics
 * @returns {Promise<QueryResult>}
 */

const queryTopics = async () => {
  const init: RequestInit = TopicQueryBuilder(config.access_token);
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

export default { queryTopics };
