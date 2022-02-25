import * as connections from '@/config/connection/connection';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';
import {ObjectId, Types} from 'mongoose'



/**
 * @export
 * @interface IOrdersRequest
 */
export interface IOrdersRequest {
    productId:ObjectId,
customerId:ObjectId,
quantity:Number,
isPaid:Boolean,
amountPaid:Number,
address:String,
deliveryStatus:String,
}

/**
 * @export
 * @interface IOrdersModel
 * @extends {Document}
 */
export interface IOrdersModel extends Document {
   productId:ObjectId,
customerId:ObjectId,
quantity:Number,
isPaid:Boolean,
amountPaid:Number,
address:String,
deliveryStatus:String,
}



/**
 * @swagger
 * components:
 *  schemas:
 *    UserSchema:
 *      required:
*        -productId
*        -customerId
*        -quantity
*        -isPaid
*        -amountPaid
*        -address
*        -deliveryStatus

 *      properties:
*        productId:
*          type: ObjectId
*        customerId:
*          type: ObjectId
*        quantity:
*          type: Number
*        isPaid:
*          type: Boolean
*        amountPaid:
*          type: Number
*        address:
*          type: String
*        deliveryStatus:
*          type: String

 *    Orders:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/OrdersSchema'
 */
const OrdersSchema: Schema = new Schema(
    {
       productId:{type: Types.ObjectId, ref: 'products',required: true,},
customerId:{type: Types.ObjectId, ref: 'customers',required: true,},
quantity:Number,
isPaid:Boolean,
amountPaid:Number,
address:String,
deliveryStatus:String,
    },
    {
        collection: 'orders',
        versionKey: false,
    }
).pre('save', async function (next: NextFunction): Promise<void> {
    //const orders: any = this; // tslint:disable-line

    //do any customization of request on orders here like encrypting password before saving
});




export default connections.db.model<IOrdersModel>('OrdersModel', OrdersSchema);

