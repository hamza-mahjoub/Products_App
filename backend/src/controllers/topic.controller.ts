import { catchAsync } from '../utils';
import { topicService } from '../services';
import { Request, Response } from 'express';

const getTopics = catchAsync(async (req: Request, res: Response) => {
  const result = await topicService.queryTopics();
  res.send(result);
});

export default {
  getTopics,
};
