import * as Joi from '@hapi/joi';
import AuthValidation from './validation';
import { IAuthService } from './interface';
import { ITokenRequest } from './model';
import CustomersModel, { ICustomersModel } from '../Customers/model';


/**
 * @export
 * @implements {IAuthService}
 */
const AuthService: IAuthService = {

    /**
     * @param {ITokenRequest} body
     * @returns {Promise <any>}
     * @memberof AuthService
     */
    async generateToken(body: ITokenRequest): Promise<any> {
        try {
            const validate: Joi.ValidationResult<ITokenRequest> = AuthValidation.validteTokenInput(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            //Fetch from collection based on username password
            const user: ICustomersModel = await CustomersModel.findOne(

                {
                    email: body.username,
                    password: body.password //do encryption check like md5(body.password)
                });


            if (user != null) {
                return user;
            }

            throw new Error('Invalid password or username');
        } catch (error) {
            throw new Error(error);
        }
    },
};

export default AuthService;



