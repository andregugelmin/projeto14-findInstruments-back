import db from '../db.js';

export async function validToken(req, res, next) {
    const authorization = req.headers.authorization;
    const token = authorization?.replace('Bearer ', '');

    if (!token)
        return res.status(401).send({
            message: 'Token not found in data base',
        });

    try {
        const session = await db.collection('sessions').findOne({ token });
        if (!session)
            return res.status(401).send({
                message: 'Sessions not found in data base',
            });

        // const user = await db
        //     .collection('users')
        //     .findOne({ _id: session.userId });

        // if (!user) {
        //     return res.status(401).send({
        //         message: 'User Id not found in data base',
        //     });
        // }
        res.locals.user = session.username;
    } catch (e) {
        return res.status(500).send('Could not valid session ' + e);
    }

    next();
}
