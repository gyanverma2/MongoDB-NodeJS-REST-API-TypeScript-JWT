import * as Joi from '@hapi/joi';
import OrdersModel, { IOrdersModel } from './model';
import OrdersValidation from './validation';
import { IOrdersService } from './interface';
import { Types } from 'mongoose';
import { GetSearchQuery, ISearchParamRequest } from '@/utils/SearchHelper';

/**
 * @export
 * @implements {IOrdersModelService}
 */
const OrdersService: IOrdersService = {
    /**
     * @returns {Promise < IOrdersModel[] >}
     * @memberof OrdersService
     */
    async findAll(pageNo:number,pageSize:number): Promise<IOrdersModel[]> {
        try {
            const skip = pageNo * pageSize;
            return await OrdersModel.find({}).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
    * @param {ISearchParamRequest} searchParam
    * @returns {Promise <IOrdersModel[]>}
    * @memberof OrdersService
    */
    async search(body: ISearchParamRequest, pageNo: number, pageSize: number): Promise<IOrdersModel[]> {
        try {
            const validate: Joi.ValidationResult<ISearchParamRequest> = OrdersValidation.searchParams(body);
            if (validate.error) {
                throw new Error(validate.error.message);
            }
            const skip = pageNo * pageSize;
            const query=GetSearchQuery(body);
            return await OrdersModel.find(query).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IOrdersModel >}
     * @memberof OrdersService
     */
    async findOne(id: string): Promise<IOrdersModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = OrdersValidation.getOrders({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await OrdersModel.findOne(
                {
                    _id: Types.ObjectId(id),
                }
            );
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IOrdersModel} orders
     * @returns {Promise < IOrdersModel >}
     * @memberof OrdersService
     */
    async insert(body: IOrdersModel): Promise<IOrdersModel> {
        try {
            const validate: Joi.ValidationResult<IOrdersModel> = OrdersValidation.createOrders(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const orders: IOrdersModel = await OrdersModel.create(body);

            return orders;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @param {IOrdersModel} orders
     * @returns {Promise < IOrdersModel >}
     * @memberof OrdersService
     */
    async update(id:string, body: IOrdersModel): Promise<Number> {
        try {
            const validate: Joi.ValidationResult<IOrdersModel> = OrdersValidation.updateOrders(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const orders = await OrdersModel.updateOne({_id: Types.ObjectId(id)}, {$set: body});

            return orders.nModified;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IOrdersModel >}
     * @memberof OrdersService
     */
    async remove(id: string): Promise<IOrdersModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = OrdersValidation.removeOrders({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const orders: IOrdersModel = await OrdersModel.findOneAndRemove({
                _id: Types.ObjectId(id),
            });

            return orders;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

export default OrdersService;

