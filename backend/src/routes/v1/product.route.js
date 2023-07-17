const express = require('express');
const validate = require('../../middlewares/validate');
const productValidation = require('../../validations/product.validation');
const productController = require('../../controllers/product.controller');

const router = express.Router();

router
  .get('/', productController.getProducts)
  .post('/', validate(productValidation.getProducts), productController.getProducts);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Products retrieval
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     description: Everyone can retrieve all products.
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: date
 *         schema:
 *           type: datetime
 *         description: date of posts
 *       - in: query
 *         name: limit
 *         schema:
 *           type: number
 *         description: Data limit
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