import { Router } from 'express';
import { CartsComponent } from '@/components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/v1/carts
 *
 * @swagger
 * /v1/carts:
 *   get:
 *     description: Get all stored carts in Database
 *     tags: ["carts"]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: An array of carts
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/Carts'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', CartsComponent.findAll);


/**
 * POST method route
 * @example http://localhost:PORT/v1/carts/search
 *
 * @swagger
 * /v1/carts/search:
 *   post:
 *      description: Search carts
 *      tags: ["users"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: carts search request body
 *        required: true
 *        content:
 *          application/json:
 *      responses:
 *        201:
 *          description: return search carts
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
 router.post('/search', CartsComponent.search);

/**
 * POST method route
 * @example http://localhost:PORT/v1/carts
 *
 * @swagger
 * /v1/carts:
 *   post:
 *      description: Create new carts
 *      tags: ["carts"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: carts creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CartsSchema'
 *      responses:
 *        201:
 *          description: return created carts
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/CartsSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', CartsComponent.create);


/**
 * POST method route
 * @example http://localhost:PORT/v1/carts
 *
 * @swagger
 * /v1/carts/{id}:
 *   post:
 *      description: Update carts
 *      tags: ["carts"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: carts creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CartsSchema'
 *      responses:
 *        201:
 *          description: return updated carts
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/CartsSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.patch('/:id', CartsComponent.update);


/**
 * GET method route
 * @example http://localhost:PORT/v1/carts/:id
 *
 * @swagger
 * /v1/carts/{id}:
 *  get:
 *    description: Get carts by id
 *    tags: ["carts"]
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
 *        description: return carts by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/CartsSchema'
 */
router.get('/:id', CartsComponent.findOne);

/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/carts/:id
 *
 * @swagger
 * /v1/carts/{id}:
 *  delete:
 *    description: Delete carts by id
 *    tags: ["carts"]
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
 *        description: return deleted carts
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/CartsSchema'
 */
router.delete('/:id', CartsComponent.remove);

/**
 * @export {express.Router}
 */
export default router;

