import chalk from 'chalk';
import bcrypt from 'bcrypt';

import db from '../db.js';

export async function signUp(req, res) {
    try {
        const user = res.locals.user;
        const {name, email} = user;
        const passwordHash = bcrypt.hashSync(user.password, 10);

        const dataBaseUser = await db.collection('users').findOne({ email });

        if(dataBaseUser) {
            console.log(dataBaseUser);
            console.log(chalk.red.bold('This email has already been registered'));
            return res.status(403).send('Existing Email');
        }

        const registredUser = {name, email};
        await db.collection('users').insertOne({ ...user, password: passwordHash });
        console.log(chalk.green.bold('User Registred on data base'));
        return res.status(201).send(registredUser);

    } catch (e) {
        console.error(chalk.bold.red('Could not register user'), e);
        res.status(500).send('Could not register user ' + e);
    }
}
