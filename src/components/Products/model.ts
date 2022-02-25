import * as connections from '@/config/connection/connection';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';
import {ObjectId, Types} from 'mongoose'

export type Image={};


/**
 * @export
 * @interface IProductsRequest
 */
export interface IProductsRequest {
    name:String,
price:Number,
image:Image[],
isActive:Boolean,
description:String,
stock:Number,
SKU:String,
Manufacturer:String,
Brand:String,
FeatureId:ObjectId,
}

/**
 * @export
 * @interface IProductsModel
 * @extends {Document}
 */
export interface IProductsModel extends Document {
   name:String,
price:Number,
image:Image[],
isActive:Boolean,
description:String,
stock:Number,
SKU:String,
Manufacturer:String,
Brand:String,
FeatureId:ObjectId,
}



/**
 * @swagger
 * components:
 *  schemas:
 *    UserSchema:
 *      required:
*        -name
*        -price
*        -isActive
*        -description
*        -stock
*        -SKU
*        -Manufacturer
*        -Brand
*        -FeatureId

 *      properties:
*        name:
*          type: String
*        price:
*          type: Number
*        isActive:
*          type: Boolean
*        description:
*          type: String
*        stock:
*          type: Number
*        SKU:
*          type: String
*        Manufacturer:
*          type: String
*        Brand:
*          type: String
*        FeatureId:
*          type: ObjectId

 *    Products:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/ProductsSchema'
 */
const ProductsSchema: Schema = new Schema(
    {
       name:String,
price:Number,
image:Array,
isActive:Boolean,
description:String,
stock:Number,
SKU:String,
Manufacturer:String,
Brand:String,
FeatureId:{type: Types.ObjectId, ref: 'product_features',required: true,},
    },
    {
        collection: 'products',
        versionKey: false,
    }
).pre('save', async function (next: NextFunction): Promise<void> {
    //const products: any = this; // tslint:disable-line

    //do any customization of request on products here like encrypting password before saving
});




export default connections.db.model<IProductsModel>('ProductsModel', ProductsSchema);

