import express, { json } from 'express';
import cors from 'cors';
import chalk from 'chalk';

const app = express();
app.use(cors());
app.use(json());

app.listen(process.env.PORT, () => {
    console.log(chalk.bold.green('Server running on port' + process.env.PORT));
});
