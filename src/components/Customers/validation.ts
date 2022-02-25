import * as Joi from '@hapi/joi';
import Validation from '@/components/validation';
import { ICustomersModel } from './model';
import { ISearchParamRequest } from '@/utils/SearchHelper';
/**
 * @export
 * @class CustomersValidation
 * @extends Validation
 */
class CustomersValidation extends Validation {
    /**
     * Creates an instance of CustomersValidation.
     * @memberof CustomersValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {ICustomersModel} params
     * @returns {Joi.ValidationResult<ICustomersModel >}
     * @memberof CustomersValidation
     */
    createCustomers(params: ICustomersModel): Joi.ValidationResult<ICustomersModel> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
            name:Joi.string(),
email:Joi.string(),
password:Joi.string(),
profilePic:Joi.string(),
city:Joi.string(),
mobile:Joi.string(),
lastLogin:Joi.string(),
address:Joi.array(),
deviceToken:Joi.string(),

        });

        return schema.validate(params);
    }

     /**
     * @param {{ id: string }} body
     * @param {ICustomersModel} params
     * @returns {Joi.ValidationResult<ICustomersModel >}
     * @memberof CustomersValidation
     */
         updateCustomers(params: ICustomersModel): Joi.ValidationResult<ICustomersModel> {
            const schema: Joi.ObjectSchema = Joi.object().keys({
                name:Joi.string(),
email:Joi.string(),
password:Joi.string(),
profilePic:Joi.string(),
city:Joi.string(),
mobile:Joi.string(),
lastLogin:Joi.string(),
address:Joi.array(),
deviceToken:Joi.string(),

            });
    
            return schema.validate(params);
        }
    
     /**
     * @param {ISearchParamRequest} params
     * @returns {Joi.ValidationResult<ISearchParamRequest >}
     * @memberof CustomersValidation
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
     * @memberof CustomersValidation
     */
    getCustomers(body: {
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
     * @memberof CustomersValidation
     */
    removeCustomers(body: {
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

export default new CustomersValidation();

