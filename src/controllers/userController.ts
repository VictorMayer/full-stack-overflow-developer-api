import { Request, Response } from 'express';
import * as userService from '../services/userService';
import validateUser from '../validations/userValidation';

async function newUser(req: Request, res: Response) {
    const { name } = req.body;
    try {
        if (!name || !req.body.class) res.status(400).send('Insufficient data!');

        const invalidBody = validateUser(req.body);

        if (invalidBody) return res.status(400).send(invalidBody);

        const user = {
            name,
            class: req.body.class,
        };

        const result = await userService.saveUser(user);
        if (result) return res.status(201).send(result);
        return res.status(400).send('Turma inválida');
    } catch (error) {
        console.log(error); // eslint-disable-line no-console
        return res.sendStatus(500);
    }
}

export {
    // eslint-disable-next-line import/prefer-default-export
    newUser,
};
