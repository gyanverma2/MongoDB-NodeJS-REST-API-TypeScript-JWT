import { Router } from 'express';
import { Product_FeaturesComponent } from '@/components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/v1/product_features
 *
 * @swagger
 * /v1/product_features:
 *   get:
 *     description: Get all stored product_features in Database
 *     tags: ["product_features"]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: An array of product_features
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/Product_Features'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', Product_FeaturesComponent.findAll);


/**
 * POST method route
 * @example http://localhost:PORT/v1/product_features/search
 *
 * @swagger
 * /v1/product_features/search:
 *   post:
 *      description: Search product_features
 *      tags: ["users"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: product_features search request body
 *        required: true
 *        content:
 *          application/json:
 *      responses:
 *        201:
 *          description: return search product_features
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/UsersSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
 router.post('/search', Product_FeaturesComponent.search);

/**
 * POST method route
 * @example http://localhost:PORT/v1/product_features
 *
 * @swagger
 * /v1/product_features:
 *   post:
 *      description: Create new product_features
 *      tags: ["product_features"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: product_features creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product_FeaturesSchema'
 *      responses:
 *        201:
 *          description: return created product_features
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/Product_FeaturesSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', Product_FeaturesComponent.create);


/**
 * POST method route
 * @example http://localhost:PORT/v1/product_features
 *
 * @swagger
 * /v1/product_features/{id}:
 *   post:
 *      description: Update product_features
 *      tags: ["product_features"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: product_features creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product_FeaturesSchema'
 *      responses:
 *        201:
 *          description: return updated product_features
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/Product_FeaturesSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.patch('/:id', Product_FeaturesComponent.update);


/**
 * GET method route
 * @example http://localhost:PORT/v1/product_features/:id
 *
 * @swagger
 * /v1/product_features/{id}:
 *  get:
 *    description: Get product_features by id
 *    tags: ["product_features"]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the unique id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: return product_features by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/Product_FeaturesSchema'
 */
router.get('/:id', Product_FeaturesComponent.findOne);

/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/product_features/:id
 *
 * @swagger
 * /v1/product_features/{id}:
 *  delete:
 *    description: Delete product_features by id
 *    tags: ["product_features"]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the unique id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: return deleted product_features
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/Product_FeaturesSchema'
 */
router.delete('/:id', Product_FeaturesComponent.remove);

/**
 * @export {express.Router}
 */
export default router;

