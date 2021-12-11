import joi from 'joi';

interface User {
    name: string,
    class: string,
}

function specifyError(error: string) {
    switch (error) {
    case 'name':
        return 'Nome deve ser inserido corretamente';
    case 'class':
        return 'Turma inválida';
    default:
        return null;
    }
}

function validateUser(user: User) {
    const userSchema = joi.object({
        name: joi.string().required(),
        class: joi.string().required(),
    });

    if (userSchema.validate(user).error) {
        return specifyError(userSchema.validate(user).error.details[0].context.key);
    }
    return false;
}

export default validateUser;
