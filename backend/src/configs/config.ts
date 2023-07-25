import { config } from 'dotenv';
import path from 'path';
import Joi, { ObjectSchema, ValidationResult } from 'joi';

config({ path: path.join(__dirname, '../../.env') });

const envVarsSchema: ObjectSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
    PORT: Joi.number().default(3000),
    ACCESS_TOKEN: Joi.string().description('product hunt api access token'),
    API_URL: Joi.string().description('product hunt api URL'),
  })
  .unknown();

const { value: envVars, error }: ValidationResult = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export default {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  access_token: envVars.ACCESS_TOKEN,
  api_url: envVars.API_URL
}
