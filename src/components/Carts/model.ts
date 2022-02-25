import * as connections from '@/config/connection/connection';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';
import {ObjectId, Types} from 'mongoose'



/**
 * @export
 * @interface ICartsRequest
 */
export interface ICartsRequest {
    customerId:ObjectId,
productId:ObjectId,
quantity:Number,
sessionId:ObjectId,
}

/**
 * @export
 * @interface ICartsModel
 * @extends {Document}
 */
export interface ICartsModel extends Document {
   customerId:ObjectId,
productId:ObjectId,
quantity:Number,
sessionId:ObjectId,
}



/**
 * @swagger
 * components:
 *  schemas:
 *    UserSchema:
 *      required:
*        -customerId
*        -productId
*        -quantity
*        -sessionId

 *      properties:
*        customerId:
*          type: ObjectId
*        productId:
*          type: ObjectId
*        quantity:
*          type: Number
*        sessionId:
*          type: ObjectId

 *    Carts:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/CartsSchema'
 */
const CartsSchema: Schema = new Schema(
    {
       customerId:{type: Types.ObjectId, ref: 'customers',required: true,},
productId:{type: Types.ObjectId, ref: 'products',required: true,},
quantity:Number,
sessionId:Types.ObjectId,
    },
    {
        collection: 'carts',
        versionKey: false,
    }
).pre('save', async function (next: NextFunction): Promise<void> {
    //const carts: any = this; // tslint:disable-line

    //do any customization of request on carts here like encrypting password before saving
});




export default connections.db.model<ICartsModel>('CartsModel', CartsSchema);

