import { ISearchParamRequest } from '@/utils/SearchHelper';
import { ICartsModel } from './model';

/**
 * @export
 * @interface ICartsService
 */
export interface ICartsService {
    /**
     * @returns {Promise<ICartsModel[]>}
     * @memberof ICartsService
     */
    findAll(pageNo:number,pageSize:number): Promise<ICartsModel[]>;

    /**
     * @param {ISearchParamRequest} param
     * @returns {Promise<ICartsModel[]>}
     * @memberof ICartsService
     */
     search(searchParam:ISearchParamRequest,pageNo:number,pageSize:number): Promise<ICartsModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<ICartsModel>}
     * @memberof ICartsService
     */
    findOne(code: string): Promise<ICartsModel>;

    /**
     * @param {ICartsModel} ICartsModel
     * @returns {Promise<ICartsModel>}
     * @memberof ICartsService
     */
    insert(ICartsModel: ICartsModel): Promise<ICartsModel>;

    /**
     * @param {string} id
     * @param {ICartsModel} ICartsModel
     * @returns {Promise<ICartsModel>}
     * @memberof ICartsService
     */
    update(id:string,ICartsModel: ICartsModel): Promise<Number>;

    /**
     * @param {string} id
     * @returns {Promise<ICartsModel>}
     * @memberof ICartsService
     */
    remove(id: string): Promise<ICartsModel>;
}

