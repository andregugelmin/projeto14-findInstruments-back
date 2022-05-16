import { Router } from 'express';
import { validToken } from '../Middlewares/userTokenValidation.js';
import {
    getCartProducts,
    postCartProduct,
    deleteCartProduct,
    postPurchase,
} from './../Controllers/cartProductsController.js';

const cartProductRouter = Router();

cartProductRouter.get('/cart', validToken, getCartProducts);
cartProductRouter.post('/cart', validToken, postCartProduct);
cartProductRouter.post('/purchase', validToken, postPurchase);
cartProductRouter.delete('/cart/:PRODUCT_ID', validToken, deleteCartProduct);

export default cartProductRouter;
