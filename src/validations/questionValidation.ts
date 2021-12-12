import joi from 'joi';

interface Question {
    question: string,
    student: string,
    class: string,
    tags: string,
}

function specifyError(error: string) {
    switch (error) {
    case 'question':
        return 'Descrição da pergunta inválida';
    case 'student':
        return 'Autor da pergunta inválido';
    case 'class':
        return 'Turma inválida';
    case 'tags':
        return 'tag(s) inválida(s)';
    default:
        return null;
    }
}

function validateQuestion(question: Question) {
    const questionSchema = joi.object({
        question: joi.string().required(),
        student: joi.string().required(),
        class: joi.string().required(),
        tags: joi.string().required(),
    });

    if (questionSchema.validate(question).error) {
        return specifyError(questionSchema.validate(question).error.details[0].context.key);
    }

    return false;
}

export default validateQuestion;
