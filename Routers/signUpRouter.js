import { Router } from 'express';
import { signUp } from './../Controllers/signUpController.js';
import validateSignUpInfo from '../Middlewares/signUpInfoValidations.js';
// import { validToken } from './../Middlewares/userTokenValidation.js';

const signUpRouter = Router();

signUpRouter.post('/signUp', validateSignUpInfo, signUp);

export default signUpRouter;