import { Router } from 'express';
import {
    getCartProducts,
    postCartProduct,
    deleteCartProduct,
} from './../Controllers/cartProductsController.js';

const cartProductRouter = Router();

cartProductRouter.get('/cart', getCartProducts);
cartProductRouter.post('/cart', postCartProduct);
cartProductRouter.delete('/cart/:PRODUCT_ID', deleteCartProduct);

export default cartProductRouter;
