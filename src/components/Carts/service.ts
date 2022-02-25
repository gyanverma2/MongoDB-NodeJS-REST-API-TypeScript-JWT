import * as Joi from '@hapi/joi';
import CartsModel, { ICartsModel } from './model';
import CartsValidation from './validation';
import { ICartsService } from './interface';
import { Types } from 'mongoose';
import { GetSearchQuery, ISearchParamRequest } from '@/utils/SearchHelper';
import { ObjectId } from 'mongoose';

/**
 * @export
 * @implements {ICartsModelService}
 */
const CartsService: ICartsService = {
    /**
     * @returns {Promise < ICartsModel[] >}
     * @memberof CartsService
     */
    async findAll(customerId:ObjectId,pageNo:number,pageSize:number): Promise<ICartsModel[]> {
        try {
            const skip = pageNo * pageSize;
            return await CartsModel.find({customerId:customerId}).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
    * @param {ISearchParamRequest} searchParam
    * @returns {Promise <ICartsModel[]>}
    * @memberof CartsService
    */
    async search(body: ISearchParamRequest, pageNo: number, pageSize: number): Promise<ICartsModel[]> {
        try {
            const validate: Joi.ValidationResult<ISearchParamRequest> = CartsValidation.searchParams(body);
            if (validate.error) {
                throw new Error(validate.error.message);
            }
            const skip = pageNo * pageSize;
            const query=GetSearchQuery(body);
            return await CartsModel.find(query).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < ICartsModel >}
     * @memberof CartsService
     */
    async findOne(id: string): Promise<ICartsModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = CartsValidation.getCarts({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await CartsModel.findOne(
                {
                    _id: Types.ObjectId(id),
                }
            );
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {ICartsModel} carts
     * @returns {Promise < ICartsModel >}
     * @memberof CartsService
     */
    async insert(body: ICartsModel): Promise<ICartsModel> {
        try {
            const validate: Joi.ValidationResult<ICartsModel> = CartsValidation.createCarts(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const carts: ICartsModel = await CartsModel.create(body);

            return carts;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @param {ICartsModel} carts
     * @returns {Promise < ICartsModel >}
     * @memberof CartsService
     */
    async update(id:string, body: ICartsModel): Promise<Number> {
        try {
            const validate: Joi.ValidationResult<ICartsModel> = CartsValidation.updateCarts(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const carts = await CartsModel.updateOne({_id: Types.ObjectId(id)}, {$set: body});

            return carts.nModified;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < ICartsModel >}
     * @memberof CartsService
     */
    async remove(id: string): Promise<ICartsModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = CartsValidation.removeCarts({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const carts: ICartsModel = await CartsModel.findOneAndRemove({
                _id: Types.ObjectId(id),
            });

            return carts;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

export default CartsService;

