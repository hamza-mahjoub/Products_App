import Joi from 'joi';

const getProducts = {
  body: Joi.object().keys({
    date: Joi.object().keys({
      before: Joi.string(),
      after: Joi.string(),
    }),
    limit: Joi.number().integer().optional(),
  }),
};

export default { getProducts };
