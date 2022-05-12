import { Router } from 'express';
import { getProducts } from './../Controllers/productsController.js';
import { validToken } from './../Middlewares/userTokenValidation.js';

const productRouter = Router();

productRouter.get('/products', validToken, getProducts);

export default productRouter;
