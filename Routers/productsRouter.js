import { Router } from 'express';
import { getProducts } from './../Controllers/productsController.js';

const productRouter = Router();

productRouter.get('/products', getProducts);

export default productRouter;
