import express, { json } from 'express';
import cors from 'cors';
import chalk from 'chalk';
import dotenv from 'dotenv'

import loginRouter from './Routers/loginrouter.js';
import signUpRouter from './Routers/signUpRouter.js'
import productsRouter from './Routers/productsRouter.js';
import cartRouter from './Routers/cartRouter.js';

const app = express();
app.use(cors());
app.use(json());
dotenv.config();

app.use(loginRouter);
app.use(signUpRouter);
app.use(productsRouter);
app.use(cartRouter);

app.listen(process.env.PORT, () => {
    console.log(chalk.bold.green('Server running on port ' + process.env.PORT));
});
