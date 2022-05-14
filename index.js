import express, { json } from 'express';
import cors from 'cors';
import chalk from 'chalk';

import signUpRouter from './Routers/signUpRouter.js';
import productsRouter from './Routers/productsRouter.js';
import cartRouter from './Routers/cartRouter.js';

const app = express();
app.use(cors());
app.use(json());

app.use(signUpRouter);
app.use(productsRouter);
app.use(cartRouter);

app.listen(process.env.PORT, () => {
    console.log(chalk.bold.green('Server running on port ' + process.env.PORT));
});
