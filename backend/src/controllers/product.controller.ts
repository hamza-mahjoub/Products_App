import { pick, catchAsync } from '../utils';
import { productService } from '../services';
import { Request, Response } from 'express';

const getProducts = catchAsync(async (req: Request, res: Response) => {
  const options = pick(req.body, ['date', 'limit']);
  const result = await productService.queryProducts([], options);
  res.send(result);
});

export default {
  getProducts,
};
