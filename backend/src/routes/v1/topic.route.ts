import express, { Router } from 'express';
import { topicController } from '../../controllers';
const topicRouter: Router = express.Router();

topicRouter.get('/', topicController.getTopics);

export default topicRouter;

/**
 * @swagger
 * tags:
 *   name: Topics
 *   description: Topics retrieval
 */

/**
 * @swagger
 * /topics:
 *   get:
 *     summary: Get all topics
 *     description: Everyone can retrieve all topics.
 *     tags: [Topics]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       "204":
 *          $ref: '#/components/responses/NoContent'
 */
