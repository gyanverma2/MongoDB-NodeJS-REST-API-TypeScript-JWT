import { Router } from 'express';
import { OrdersComponent } from '@/components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/v1/orders
 *
 * @swagger
 * /v1/orders:
 *   get:
 *     description: Get all stored orders in Database
 *     tags: ["orders"]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: An array of orders
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/Orders'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', OrdersComponent.findAll);


/**
 * POST method route
 * @example http://localhost:PORT/v1/orders/search
 *
 * @swagger
 * /v1/orders/search:
 *   post:
 *      description: Search orders
 *      tags: ["users"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: orders search request body
 *        required: true
 *        content:
 *          application/json:
 *      responses:
 *        201:
 *          description: return search orders
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
 router.post('/search', OrdersComponent.search);

/**
 * POST method route
 * @example http://localhost:PORT/v1/orders
 *
 * @swagger
 * /v1/orders:
 *   post:
 *      description: Create new orders
 *      tags: ["orders"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: orders creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/OrdersSchema'
 *      responses:
 *        201:
 *          description: return created orders
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/OrdersSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', OrdersComponent.create);


/**
 * POST method route
 * @example http://localhost:PORT/v1/orders
 *
 * @swagger
 * /v1/orders/{id}:
 *   post:
 *      description: Update orders
 *      tags: ["orders"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: orders creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/OrdersSchema'
 *      responses:
 *        201:
 *          description: return updated orders
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/OrdersSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.patch('/:id', OrdersComponent.update);


/**
 * GET method route
 * @example http://localhost:PORT/v1/orders/:id
 *
 * @swagger
 * /v1/orders/{id}:
 *  get:
 *    description: Get orders by id
 *    tags: ["orders"]
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
 *        description: return orders by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/OrdersSchema'
 */
router.get('/:id', OrdersComponent.findOne);

/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/orders/:id
 *
 * @swagger
 * /v1/orders/{id}:
 *  delete:
 *    description: Delete orders by id
 *    tags: ["orders"]
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
 *        description: return deleted orders
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/OrdersSchema'
 */
router.delete('/:id', OrdersComponent.remove);

/**
 * @export {express.Router}
 */
export default router;

