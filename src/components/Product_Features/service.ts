import * as Joi from '@hapi/joi';
import Product_FeaturesModel, { IProduct_FeaturesModel } from './model';
import Product_FeaturesValidation from './validation';
import { IProduct_FeaturesService } from './interface';
import { Types } from 'mongoose';
import { GetSearchQuery, ISearchParamRequest } from '@/utils/SearchHelper';

/**
 * @export
 * @implements {IProduct_FeaturesModelService}
 */
const Product_FeaturesService: IProduct_FeaturesService = {
    /**
     * @returns {Promise < IProduct_FeaturesModel[] >}
     * @memberof Product_FeaturesService
     */
    async findAll(pageNo:number,pageSize:number): Promise<IProduct_FeaturesModel[]> {
        try {
            const skip = pageNo * pageSize;
            return await Product_FeaturesModel.find({}).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
    * @param {ISearchParamRequest} searchParam
    * @returns {Promise <IProduct_FeaturesModel[]>}
    * @memberof Product_FeaturesService
    */
    async search(body: ISearchParamRequest, pageNo: number, pageSize: number): Promise<IProduct_FeaturesModel[]> {
        try {
            const validate: Joi.ValidationResult<ISearchParamRequest> = Product_FeaturesValidation.searchParams(body);
            if (validate.error) {
                throw new Error(validate.error.message);
            }
            const skip = pageNo * pageSize;
            const query=GetSearchQuery(body);
            return await Product_FeaturesModel.find(query).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IProduct_FeaturesModel >}
     * @memberof Product_FeaturesService
     */
    async findOne(id: string): Promise<IProduct_FeaturesModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = Product_FeaturesValidation.getProduct_Features({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await Product_FeaturesModel.findOne(
                {
                    _id: Types.ObjectId(id),
                }
            );
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IProduct_FeaturesModel} product_features
     * @returns {Promise < IProduct_FeaturesModel >}
     * @memberof Product_FeaturesService
     */
    async insert(body: IProduct_FeaturesModel): Promise<IProduct_FeaturesModel> {
        try {
            const validate: Joi.ValidationResult<IProduct_FeaturesModel> = Product_FeaturesValidation.createProduct_Features(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const product_features: IProduct_FeaturesModel = await Product_FeaturesModel.create(body);

            return product_features;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @param {IProduct_FeaturesModel} product_features
     * @returns {Promise < IProduct_FeaturesModel >}
     * @memberof Product_FeaturesService
     */
    async update(id:string, body: IProduct_FeaturesModel): Promise<Number> {
        try {
            const validate: Joi.ValidationResult<IProduct_FeaturesModel> = Product_FeaturesValidation.updateProduct_Features(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const product_features = await Product_FeaturesModel.updateOne({_id: Types.ObjectId(id)}, {$set: body});

            return product_features.nModified;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IProduct_FeaturesModel >}
     * @memberof Product_FeaturesService
     */
    async remove(id: string): Promise<IProduct_FeaturesModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = Product_FeaturesValidation.removeProduct_Features({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const product_features: IProduct_FeaturesModel = await Product_FeaturesModel.findOneAndRemove({
                _id: Types.ObjectId(id),
            });

            return product_features;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

export default Product_FeaturesService;

