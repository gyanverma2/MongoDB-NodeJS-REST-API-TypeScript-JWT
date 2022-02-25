import * as express from 'express';
import * as http from 'http';
import * as jwtConfig from '@/config/middleware/jwtAuth';
import * as swaggerUi from 'swagger-ui-express';
import AuthRouter from './AuthRouter';
import swaggerJsdoc = require('swagger-jsdoc');
import FileRouter from './FileRouter';
import fileUpload = require('express-fileupload');
import CartsRouter from './CartsRouter';
import CustomersRouter from './CustomersRouter';
import OrdersRouter from './OrdersRouter';
import ProductsRouter from './ProductsRouter';
import Product_FeaturesRouter from './Product_FeaturesRouter';


type NextFunction = express.NextFunction;
type Request = express.Request;
type Response = express.Response;


/**
 * @export
 * @param {express.Application} app
 */
export function init(app: express.Application): void {
    const router: express.Router = express.Router();

    app.use(fileUpload());
    app.use('/v1/carts', jwtConfig.isAuthenticated, CartsRouter);
app.use('/v1/customers', jwtConfig.isAuthenticated, CustomersRouter);
app.use('/v1/orders', jwtConfig.isAuthenticated, OrdersRouter);
app.use('/v1/products', jwtConfig.isAuthenticated, ProductsRouter);
app.use('/v1/product_features', jwtConfig.isAuthenticated, Product_FeaturesRouter);


     app.use('/v1/file', jwtConfig.isAuthenticated, FileRouter);
    /**
     * @description Forwards any requests to the /auth URI to our AuthRouter
     * @constructs
     */
    app.use('/auth', AuthRouter);

    const options = {
        definition: {
            openapi: "3.0.0",
            info: {
                title: "eshopAPI API",
                version: "1.0.0",
                description: "TypeScript, Express, JWT Auth, Mongoose, GetAutomator.com",
                license: {
                    name: "GetAutomator",
                    url: "https://getautomator.com",
                }
            },
            servers: [
                {
                    url: "http://localhost:8484",
                },
            ],
        },
        apis: ['../**/*.ts'],
    };
    const specs = swaggerJsdoc(options);
    app.use(
        "/api-docs",
        swaggerUi.serve,
        swaggerUi.setup(specs, { explorer: true })
    );

    /**
     * @description No results returned mean the object is not found
     * @constructs
     */
    app.use((req: Request, res: Response, next: NextFunction) => {
        res.status(404).send(http.STATUS_CODES[404]);
    });

    /**
     * @constructs all routes
     */
    app.use(router);
}

