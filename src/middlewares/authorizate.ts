import { Request, Response, NextFunction } from 'express';
import * as userRepository from '../repositories/userRespository';

async function authorizate(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    const token = authorization.split('Bearer ')[1];

    const result = await userRepository.getUserByToken(token);

    if (!result) return res.status(401).send('Token inválido ou expirado!');

    res.locals.name = result;

    return next();
}

export default authorizate;
