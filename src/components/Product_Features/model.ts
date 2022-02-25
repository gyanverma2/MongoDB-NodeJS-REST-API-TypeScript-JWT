import * as connections from '@/config/connection/connection';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';




/**
 * @export
 * @interface IProduct_FeaturesRequest
 */
export interface IProduct_FeaturesRequest {
    color:String,
size:String,
}

/**
 * @export
 * @interface IProduct_FeaturesModel
 * @extends {Document}
 */
export interface IProduct_FeaturesModel extends Document {
   color:String,
size:String,
}



/**
 * @swagger
 * components:
 *  schemas:
 *    UserSchema:
 *      required:
*        -color
*        -size

 *      properties:
*        color:
*          type: String
*        size:
*          type: String

 *    Product_Features:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/Product_FeaturesSchema'
 */
const Product_FeaturesSchema: Schema = new Schema(
    {
       color:String,
size:String,
    },
    {
        collection: 'product_features',
        versionKey: false,
    }
).pre('save', async function (next: NextFunction): Promise<void> {
    //const product_features: any = this; // tslint:disable-line

    //do any customization of request on product_features here like encrypting password before saving
});




export default connections.db.model<IProduct_FeaturesModel>('Product_FeaturesModel', Product_FeaturesSchema);

