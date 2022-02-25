import CartsService from './service';
import { HttpError } from '@/config/error';
import { ICartsModel } from './model';
import { NextFunction, Response } from 'express';
import { RequestWithUser } from '@/config/server';

/**
 * @export
 * @param {RequestWithUser} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise <void>}
 */
export async function findAll(req: RequestWithUser, res: Response, next: NextFunction): Promise<void> {
    try {
        if (req.user.user) { //request already have user as token object, in middleware it converting to actual object and all the property is accessible via req.user.user
            const pageNo = req.query.pageNo ? parseInt(req.query.pageNo.toString()) - 1 : 0;
            const pageSize = req.query.pageSize ? parseInt(req.query.pageSize.toString()) : 20;
            const carts: ICartsModel[] = await CartsService.findAll(req.user.user._id, pageNo, pageSize);

            res.status(200).json(carts);
        } else {
            res.status(200).json([]);
        }
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

/**
 * @export
 * @param {RequestWithUser} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise <void>}
 */
export async function search(req: RequestWithUser, res: Response, next: NextFunction): Promise<void> {
    try {
        const pageNo = req.query.pageNo ? parseInt(req.query.pageNo.toString()) - 1 : 0;
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize.toString()) : 20;
        const carts: ICartsModel[] = await CartsService.search(req.body, pageNo, pageSize);

        res.status(201).json(carts);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}
/**
 * @export
 * @param {RequestWithUser} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise <void>}
 */
export async function findOne(req: RequestWithUser, res: Response, next: NextFunction): Promise<void> {
    try {
        const carts: ICartsModel = await CartsService.findOne(req.params.id);

        res.status(200).json(carts);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

/**
 * @export
 * @param {RequestWithUser} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise <void>}
 */
export async function create(req: RequestWithUser, res: Response, next: NextFunction): Promise<void> {
    try {
        const carts: ICartsModel = await CartsService.insert(req.body);

        res.status(201).json(carts);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

/**
 * @export
 * @param {RequestWithUser} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise <void>}
 */
export async function update(req: RequestWithUser, res: Response, next: NextFunction): Promise<void> {
    try {
        const carts = await CartsService.update(req.params.id, req.body);
        if (carts > 0) {
            res.status(201).json('Updated successfully');
        } else {
            res.status(400).json('Failed to update');
        }
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

/**
 * @export
 * @param {RequestWithUser} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise <void>}
 */
export async function remove(req: RequestWithUser, res: Response, next: NextFunction): Promise<void> {
    try {
        const carts: ICartsModel = await CartsService.remove(req.params.id);

        res.status(200).json(carts);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

