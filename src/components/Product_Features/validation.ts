import * as Joi from '@hapi/joi';
import Validation from '@/components/validation';
import { IProduct_FeaturesModel } from './model';
import { ISearchParamRequest } from '@/utils/SearchHelper';
/**
 * @export
 * @class Product_FeaturesValidation
 * @extends Validation
 */
class Product_FeaturesValidation extends Validation {
    /**
     * Creates an instance of Product_FeaturesValidation.
     * @memberof Product_FeaturesValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {IProduct_FeaturesModel} params
     * @returns {Joi.ValidationResult<IProduct_FeaturesModel >}
     * @memberof Product_FeaturesValidation
     */
    createProduct_Features(params: IProduct_FeaturesModel): Joi.ValidationResult<IProduct_FeaturesModel> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
            color:Joi.string(),
size:Joi.string(),

        });

        return schema.validate(params);
    }

     /**
     * @param {{ id: string }} body
     * @param {IProduct_FeaturesModel} params
     * @returns {Joi.ValidationResult<IProduct_FeaturesModel >}
     * @memberof Product_FeaturesValidation
     */
         updateProduct_Features(params: IProduct_FeaturesModel): Joi.ValidationResult<IProduct_FeaturesModel> {
            const schema: Joi.ObjectSchema = Joi.object().keys({
                color:Joi.string(),
size:Joi.string(),

            });
    
            return schema.validate(params);
        }
    
     /**
     * @param {ISearchParamRequest} params
     * @returns {Joi.ValidationResult<ISearchParamRequest >}
     * @memberof Product_FeaturesValidation
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
     * @memberof Product_FeaturesValidation
     */
    getProduct_Features(body: {
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
     * @memberof Product_FeaturesValidation
     */
    removeProduct_Features(body: {
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

export default new Product_FeaturesValidation();

