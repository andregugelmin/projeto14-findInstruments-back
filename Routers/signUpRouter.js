import { Router } from 'express';
import { signUp } from './../Controllers/signUpController.js';
// import { validToken } from './../Middlewares/userTokenValidation.js';

const signUpRouter = Router();

signUpRouter.post('/signUp', signUp);

export default signUpRouter;