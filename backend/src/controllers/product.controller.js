const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { productService } = require('../services');

const getProducts = catchAsync(async (req, res) => {
  const options = pick(req.body, ['date', 'limit']);
  const result = await productService.queryProducts([], options);
  res.send(result);
});

module.exports = {
  getProducts,
};
