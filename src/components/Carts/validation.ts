import * as Joi from '@hapi/joi';
import Validation from '@/components/validation';
import { ICartsModel } from './model';
import { ISearchParamRequest } from '@/utils/SearchHelper';
/**
 * @export
 * @class CartsValidation
 * @extends Validation
 */
class CartsValidation extends Validation {
    /**
     * Creates an instance of CartsValidation.
     * @memberof CartsValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {ICartsModel} params
     * @returns {Joi.ValidationResult<ICartsModel >}
     * @memberof CartsValidation
     */
    createCarts(params: ICartsModel): Joi.ValidationResult<ICartsModel> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
            customerId:Joi.string(),
productId:Joi.string(),
quantity:Joi.number(),
sessionId:Joi.string(),

        });

        return schema.validate(params);
    }

     /**
     * @param {{ id: string }} body
     * @param {ICartsModel} params
     * @returns {Joi.ValidationResult<ICartsModel >}
     * @memberof CartsValidation
     */
         updateCarts(params: ICartsModel): Joi.ValidationResult<ICartsModel> {
            const schema: Joi.ObjectSchema = Joi.object().keys({
                customerId:Joi.string(),
productId:Joi.string(),
quantity:Joi.number(),
sessionId:Joi.string(),

            });
    
            return schema.validate(params);
        }
    
     /**
     * @param {ISearchParamRequest} params
     * @returns {Joi.ValidationResult<ISearchParamRequest >}
     * @memberof CartsValidation
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
     * @memberof CartsValidation
     */
    getCarts(body: {
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
     * @memberof CartsValidation
     */
    removeCarts(body: {
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

export default new CartsValidation();

