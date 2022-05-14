import chalk from 'chalk';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

let db = null;
try {

    const mongoClient = new MongoClient(process.env.MONGO_URI);
    await mongoClient.connect();
    db = mongoClient.db('findInstruments');
    console.log(chalk.red.yellow('Connected to database'));
} catch (e) {
    console.log(chalk.red.bold('Could not connect to data base'));
}

export default db;
