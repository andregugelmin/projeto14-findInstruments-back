import { Router } from 'express';
import { login } from './../Controllers/loginController.js';
import validateloginInfo from '../Middlewares/loginInfoValidation.js';

const loginRouter = Router();

loginRouter.post('/login', validateloginInfo, login);

export default loginRouter;