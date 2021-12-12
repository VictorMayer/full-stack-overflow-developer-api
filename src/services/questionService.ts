import { Question, NewQuestion, NewAnswer } from '../interfaces/questionInterface';
import * as questionRepository from '../repositories/questionRepository';

function getDate() {
    let date: any = new Date().getFullYear();
    date += `-${new Date().getMonth()}`;
    date += `-${new Date().getDay()}`;
    date += ` ${new Date().getHours()}`;
    date += `:${new Date().getMinutes()}`;
    return date;
}

async function saveQuestion(question: Question) {
    const student = await questionRepository.getStudent(question.student);
    const classGroup = await questionRepository.getClass(question.class);

    if (!student || !classGroup) return false;

    const date = getDate();

    const newQuestion: NewQuestion = {
        question: question.question,
        student,
        class: classGroup,
        tags: question.tags,
        answered: false,
        submitAt: date,
        answeredAt: null,
        answeredBy: null,
        answer: null,
    };

    const result = await questionRepository.createQuestion(newQuestion);

    if (!result) return false;

    return result;
}

async function getQuestion(id: string) {
    const result: NewQuestion = await questionRepository.getQuestionById(id);

    if (!result) return false;

    if (!result.answered) {
        return result;
    }

    return result;
}

async function listUnanswered() {
    const result = await questionRepository.listUnanswered();

    if (!result) return false;

    return result;
}

async function answerQuestion(name: string, answer: string, id: string) {
    const answeredAt = getDate();

    const newAnswer: NewAnswer = {
        answered: true,
        answeredAt,
        answeredBy: name,
        answer,
    };
    const result = await questionRepository.answerQuerstion(newAnswer, id);

    if (!result) return false;

    return result;
}

export {
    saveQuestion,
    getQuestion,
    listUnanswered,
    answerQuestion,
};
