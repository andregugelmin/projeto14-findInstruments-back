import { Router } from 'express';
import {
    getCartProducts,
    postCartProduct,
} from '../Controllers/cartProductsController';

const cartProductRouter = Router();

cartProductRouter.get('/cart', getCartProducts);
cartProductRouter.post('/cart', postCartProduct);
cartProductRouter.delete('/cart/:PRODUCT_ID');
