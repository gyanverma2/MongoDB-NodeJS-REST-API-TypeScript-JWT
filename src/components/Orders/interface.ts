import { ISearchParamRequest } from '@/utils/SearchHelper';
import { IOrdersModel } from './model';

/**
 * @export
 * @interface IOrdersService
 */
export interface IOrdersService {
    /**
     * @returns {Promise<IOrdersModel[]>}
     * @memberof IOrdersService
     */
    findAll(pageNo:number,pageSize:number): Promise<IOrdersModel[]>;

    /**
     * @param {ISearchParamRequest} param
     * @returns {Promise<IOrdersModel[]>}
     * @memberof IOrdersService
     */
     search(searchParam:ISearchParamRequest,pageNo:number,pageSize:number): Promise<IOrdersModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IOrdersModel>}
     * @memberof IOrdersService
     */
    findOne(code: string): Promise<IOrdersModel>;

    /**
     * @param {IOrdersModel} IOrdersModel
     * @returns {Promise<IOrdersModel>}
     * @memberof IOrdersService
     */
    insert(IOrdersModel: IOrdersModel): Promise<IOrdersModel>;

    /**
     * @param {string} id
     * @param {IOrdersModel} IOrdersModel
     * @returns {Promise<IOrdersModel>}
     * @memberof IOrdersService
     */
    update(id:string,IOrdersModel: IOrdersModel): Promise<Number>;

    /**
     * @param {string} id
     * @returns {Promise<IOrdersModel>}
     * @memberof IOrdersService
     */
    remove(id: string): Promise<IOrdersModel>;
}

