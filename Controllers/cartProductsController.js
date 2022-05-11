import chalk from 'chalk';
import { ObjectId } from 'mongodb';
import db from '../db';

export async function getCartProducts(req, res) {
    const user = res.locals.user;

    try {
        const cartProducts = await db.collection('cart').find().toArray();
        const userCartProducts = cartProducts.filter(
            (product) => product.username === user.name
        );
        res.send(userCartProducts);
    } catch (e) {
        console.error(chalk.bold.red('Could not get cart products'), e);
        res.status(500).send({
            error: e,
            message: 'Server error on getting cart products',
        });
    }
}

export async function postCartProduct(req, res) {
    const productInfo = res.body;
    const user = res.locals.user;

    try {
        await db.collection('cart').insertOne({
            username: user,
            name: productInfo.name,
            id: productInfo.id,
            price: productInfo.price,
        });
        res.sendStatus(201);
    } catch (e) {
        console.error(chalk.bold.red('Could not post cart product'), e);
        res.status(500).send({
            error: e,
            message: 'Server error on posting cart produt',
        });
    }
}

export async function deleteCartProduct(req, res) {
    const { PRODUCT_ID } = req.params;
    try {
        const product = await db
            .collection('cart')
            .findOne({ id: new ObjectId(PRODUCT_ID) });
        if (!product) {
            res.status(404).send({
                message: 'Product ID not found on database',
            });
            return;
        }

        await db
            .collection('cart')
            .deleteOne({ _id: new ObjectId(PRODUCT_ID) });

        res.sendStatus(201);
    } catch (e) {
        console.error(chalk.bold.red('Could not delete cart product'), e);
        res.status(500).send({
            error: e,
            message: 'Server error on deleting cart produt',
        });
    }
}