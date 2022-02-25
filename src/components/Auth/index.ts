import * as HttpStatus from 'http-status-codes';
import * as jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import HttpError from '@/config/error';
import AuthService from './service';
import app from '@/config/server/server';
import { ITokenResponse } from './model';



/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const user = await AuthService.generateToken(req.body);
        let userJson = user;
        if (user && user.password) {
            userJson = JSON.parse(JSON.stringify(user));
            delete userJson.password;
        }
        const token: string = jwt.sign({ user: userJson }, app.get('secret'), {
            expiresIn: '60m',
        });

        var tokenResponse: ITokenResponse = {
            accessToken: token,
            expiresIn: 60 * 60 //60m in seconds
        }
        res.status(HttpStatus.OK).json(tokenResponse);
    } catch (error) {
        if (error.code === 500) {
            return next(new HttpError(error.message.status, error.message));
        }
        res.status(HttpStatus.BAD_REQUEST)
            .send({
                message: error.message,
            });
    }
}


