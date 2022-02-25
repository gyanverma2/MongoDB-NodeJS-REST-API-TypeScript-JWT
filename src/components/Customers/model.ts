import * as connections from '@/config/connection/connection';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';


export type Address={};


/**
 * @export
 * @interface ICustomersRequest
 */
export interface ICustomersRequest {
    name:String,
email:String,
password:String,
profilePic:String,
city:String,
mobile:String,
lastLogin:Date,
address:Address[],
deviceToken:String,
}

/**
 * @export
 * @interface ICustomersModel
 * @extends {Document}
 */
export interface ICustomersModel extends Document {
   name:String,
email:String,
password:String,
profilePic:String,
city:String,
mobile:String,
lastLogin:Date,
address:Address[],
deviceToken:String,
}



/**
 * @swagger
 * components:
 *  schemas:
 *    UserSchema:
 *      required:
*        -name
*        -email
*        -password
*        -profilePic
*        -city
*        -mobile
*        -lastLogin
*        -deviceToken

 *      properties:
*        name:
*          type: String
*        email:
*          type: String
*        password:
*          type: String
*        profilePic:
*          type: String
*        city:
*          type: String
*        mobile:
*          type: String
*        lastLogin:
*          type: Date
*        deviceToken:
*          type: String

 *    Customers:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/CustomersSchema'
 */
const CustomersSchema: Schema = new Schema(
    {
       name:String,
email:String,
password:String,
profilePic:String,
city:String,
mobile:String,
lastLogin:Date,
address:Array,
deviceToken:String,
    },
    {
        collection: 'customers',
        versionKey: false,
    }
).pre('save', async function (next: NextFunction): Promise<void> {
    //const customers: any = this; // tslint:disable-line

    //do any customization of request on customers here like encrypting password before saving
});




export default connections.db.model<ICustomersModel>('CustomersModel', CustomersSchema);

