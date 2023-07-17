const express = require('express');
const topicController = require('../../controllers/topic.controller');

const router = express.Router();

router
  .get('/', topicController.getTopics)

module.exports = router;

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