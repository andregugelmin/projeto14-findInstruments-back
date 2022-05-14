import express, { json } from 'express';
import cors from 'cors';
import chalk from 'chalk';
import dotenv from 'dotenv'

<<<<<<< HEAD
import loginRouter from './Routers/loginrouter.js';
import signUpRouter from './Routers/signUpRouter.js'
=======
import signUpRouter from './Routers/signUpRouter.js';
>>>>>>> 1743b593923d30e84e65f5c5f274b6d20a946443
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
