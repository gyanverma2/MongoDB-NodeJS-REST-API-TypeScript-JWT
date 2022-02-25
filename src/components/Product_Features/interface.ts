import { ISearchParamRequest } from '@/utils/SearchHelper';
import { IProduct_FeaturesModel } from './model';

/**
 * @export
 * @interface IProduct_FeaturesService
 */
export interface IProduct_FeaturesService {
    /**
     * @returns {Promise<IProduct_FeaturesModel[]>}
     * @memberof IProduct_FeaturesService
     */
    findAll(pageNo:number,pageSize:number): Promise<IProduct_FeaturesModel[]>;

    /**
     * @param {ISearchParamRequest} param
     * @returns {Promise<IProduct_FeaturesModel[]>}
     * @memberof IProduct_FeaturesService
     */
     search(searchParam:ISearchParamRequest,pageNo:number,pageSize:number): Promise<IProduct_FeaturesModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IProduct_FeaturesModel>}
     * @memberof IProduct_FeaturesService
     */
    findOne(code: string): Promise<IProduct_FeaturesModel>;

    /**
     * @param {IProduct_FeaturesModel} IProduct_FeaturesModel
     * @returns {Promise<IProduct_FeaturesModel>}
     * @memberof IProduct_FeaturesService
     */
    insert(IProduct_FeaturesModel: IProduct_FeaturesModel): Promise<IProduct_FeaturesModel>;

    /**
     * @param {string} id
     * @param {IProduct_FeaturesModel} IProduct_FeaturesModel
     * @returns {Promise<IProduct_FeaturesModel>}
     * @memberof IProduct_FeaturesService
     */
    update(id:string,IProduct_FeaturesModel: IProduct_FeaturesModel): Promise<Number>;

    /**
     * @param {string} id
     * @returns {Promise<IProduct_FeaturesModel>}
     * @memberof IProduct_FeaturesService
     */
    remove(id: string): Promise<IProduct_FeaturesModel>;
}

