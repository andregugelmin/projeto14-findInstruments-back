import chalk from 'chalk';
import db from '../db.js';

export async function getProducts(req, res) {
    try {
        const products = await db.collection('products').find().toArray();
        res.send(products);
    } catch (e) {
        console.error(chalk.bold.red('Could not get transactions'), e);
        res.status(500).send('Could not get products ' + e);
    }
}
