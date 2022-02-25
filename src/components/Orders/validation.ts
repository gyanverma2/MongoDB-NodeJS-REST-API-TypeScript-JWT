import * as Joi from '@hapi/joi';
import Validation from '@/components/validation';
import { IOrdersModel } from './model';
import { ISearchParamRequest } from '@/utils/SearchHelper';
/**
 * @export
 * @class OrdersValidation
 * @extends Validation
 */
class OrdersValidation extends Validation {
    /**
     * Creates an instance of OrdersValidation.
     * @memberof OrdersValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {IOrdersModel} params
     * @returns {Joi.ValidationResult<IOrdersModel >}
     * @memberof OrdersValidation
     */
    createOrders(params: IOrdersModel): Joi.ValidationResult<IOrdersModel> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
            productId:Joi.string(),
customerId:Joi.string(),
quantity:Joi.number(),
isPaid:Joi.boolean(),
amountPaid:Joi.number(),
address:Joi.string(),
deliveryStatus:Joi.string(),

        });

        return schema.validate(params);
    }

     /**
     * @param {{ id: string }} body
     * @param {IOrdersModel} params
     * @returns {Joi.ValidationResult<IOrdersModel >}
     * @memberof OrdersValidation
     */
         updateOrders(params: IOrdersModel): Joi.ValidationResult<IOrdersModel> {
            const schema: Joi.ObjectSchema = Joi.object().keys({
                productId:Joi.string(),
customerId:Joi.string(),
quantity:Joi.number(),
isPaid:Joi.boolean(),
amountPaid:Joi.number(),
address:Joi.string(),
deliveryStatus:Joi.string(),

            });
    
            return schema.validate(params);
        }
    
     /**
     * @param {ISearchParamRequest} params
     * @returns {Joi.ValidationResult<ISearchParamRequest >}
     * @memberof OrdersValidation
     */
      searchParams(params: ISearchParamRequest): Joi.ValidationResult<ISearchParamRequest> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
            orAnd: Joi.string().required(),
            params: Joi.array().required()

        });

        return schema.validate(params);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof OrdersValidation
     */
    getOrders(body: {
        id: string;
    }): Joi.ValidationResult<{
        id: string;
    }> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });

        return schema.validate(body);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof OrdersValidation
     */
    removeOrders(body: {
        id: string;
    }): Joi.ValidationResult<{
        id: string;
    }> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });

        return schema.validate(body);
    }
}

export default new OrdersValidation();

