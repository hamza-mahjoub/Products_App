/**
 * Create the request options
 * @param {Object} options request options.
 * @returns {Object}
 */

const ProductQueryBuilder = (options, access_token) => {
  if (options.date)
    return {
      headers: {
        Authorization: `Bearer ${access_token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        query: `query { posts(first: ${options.limit || 1000}, order: VOTES, postedBefore: "${
          options.date.before
        }", postedAfter:  "${options.date.after}" ){
          edges{
            cursor
            node{
              id
              name
              tagline
              description
              url
              votesCount
              createdAt
              thumbnail{
                type
                url
              }
              website
              reviewsRating
  }}}}`,
      }),
    };
  else
    return {
      headers: {
        Authorization: `Bearer ${access_token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        query: `query { posts(first: ${options.limit || 1000}, order: VOTES) {
          edges{
            cursor
            node{
              id
              name
              tagline
              description
              url
              votesCount
              createdAt
              thumbnail{
                type
                url
              }
              website
              reviewsRating
  }}}}`,
      }),
    };
};

/**
 * Create the request options
 * @returns {Object}
 */

const TopicQueryBuilder = (access_token) => {
  return {
    headers: {
      Authorization: `Bearer ${access_token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({
      query: `query { topics {
          edges{
            cursor
            node{
              id
              name
              description
              url
              createdAt
              postsCount

}}}}`,
    }),
  };
};

module.exports = {
  ProductQueryBuilder,
  TopicQueryBuilder
};
