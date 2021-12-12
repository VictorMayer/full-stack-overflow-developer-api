import { Request, Response } from 'express';
import * as questionService from '../services/questionService';
import validateQuestion from '../validations/questionValidation';

async function newQuestion(req: Request, res: Response) {
    const { question, student, tags } = req.body;
    try {
        if (!question || !student || !tags || !req.body.class) return res.status(400).send('Insufficient data!');

        const invalidBody = validateQuestion(req.body);

        if (invalidBody) return res.status(400).send(invalidBody);

        const result = await questionService.saveQuestion(req.body);
        if (result) return res.status(201).send({ id: result });
        return res.status(400).send(result);
    } catch (error) {
        console.log(error); // eslint-disable-line no-console
        return res.sendStatus(500);
    }
}

async function getQuestion(req: Request, res: Response) {
    const { id } = req.params;
    try {
        if (!id) return res.status(400).send('Insufficient data!');

        const result = await questionService.getQuestion(id);

        if (!result) return res.status(404).send('ID inválido!');

        return res.status(200).send(result);
    } catch (error) {
        console.log(error); // eslint-disable-line no-console
        return res.sendStatus(500);
    }
}

async function listUnanswered(req: Request, res: Response) {
    try {
        const result = await questionService.listUnanswered();

        if (!result) return res.sendStatus(404);

        return res.send(result);
    } catch (error) {
        console.log(error); // eslint-disable-line no-console
        return res.sendStatus(500);
    }
}

async function answerQuestion(req: Request, res: Response) {
    const { answer } = req.body;
    const { id } = req.params;
    try {
        if (!answer || !id) return res.status(400).send('Insufficient data!');

        const { name } = res.locals;

        const result = await questionService.answerQuestion(name, answer, id);

        if (!result) res.sendStatus(400);

        return res.status(200).send(result);
    } catch (error) {
        console.log(error); // eslint-disable-line no-console
        return res.sendStatus(500);
    }
}

export {
    newQuestion,
    getQuestion,
    listUnanswered,
    answerQuestion,
};
