const catchAsync = require('../utils/catchAsync');
const { topicService } = require('../services');

const getTopics = catchAsync(async (req, res) => {
  const result = await topicService.queryTopics();
  res.send(result);
});

module.exports = {
  getTopics,
};
