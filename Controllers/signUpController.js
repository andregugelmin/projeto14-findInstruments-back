import chalk from 'chalk';
import db from '../db.js';

export async function signUp(req, res) {
    try {
        const user = req.body
        await db.collection('singUp').insertOne({userName: "TesteSignUpDB"});
        console.log(chalk.bold.blue('UserRegistred'));
        res.send({ user });
    } catch (e) {
        console.error(chalk.bold.red('Could not register user'), e);
        res.status(500).send('Could not register products ' + e);
    }
}
