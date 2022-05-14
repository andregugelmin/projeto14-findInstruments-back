import chalk from 'chalk';
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

import db from '../db.js';

export async function login(req, res) {
    const user = res.locals.user;
    const {email, password} = user;
    try {
        const dataBaseUser = await db.collection('users').findOne({email});
        if(dataBaseUser && bcrypt.compareSync(password, dataBaseUser.password)) {
            const token = uuid();
            const loginResponse = {name: dataBaseUser.name, email: dataBaseUser.email, token};
            await db.collection('sessions').insertOne({
                ...loginResponse,
                userId: dataBaseUser._id
            })
            console.log(chalk.green.bold('User found on data base and password secured'));
            return res.status(201).send(loginResponse);
        }
        if (dataBaseUser === null) {
            console.log(chalk.red.bold('User not found on data base'));
            return res.status(404).send('User not found');
        }
        if (!bcrypt.compareSync(password, dataBaseUser.password)) {
            console.log(chalk.red.bold('Incorrect Password'));
            return res.status(422).send('Incorrect Password');
        }

    } catch (e) {
        console.log(e);
        return res.status(500).send('Login Error', e);
    }
}
