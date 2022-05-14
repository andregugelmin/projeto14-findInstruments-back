import joi from "joi";
import chalk from "chalk";
export default async function validateloginInfo(req, res, next) {
    const user = req.body;
    const userSchema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(8).required(),
    });

    const { error } = userSchema.validate(user, { abortEarly: false });
    if (error) {
        console.log(chalk.red.bold('Fill all informations correctly'));
        return res.status(422).send(error.details);
    }
    
    res.locals.user = user;
    next();
}