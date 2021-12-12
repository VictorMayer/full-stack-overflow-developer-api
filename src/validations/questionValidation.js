"use strict";
exports.__esModule = true;
var joi_1 = require("joi");
function specifyError(error) {
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
function validateQuestion(question) {
    var questionSchema = joi_1["default"].object({
        question: joi_1["default"].string().required(),
        student: joi_1["default"].string().required(),
        "class": joi_1["default"].string().required(),
        tags: joi_1["default"].string().required()
    });
    if (questionSchema.validate(question).error) {
        return specifyError(questionSchema.validate(question).error.details[0].context.key);
    }
    return false;
}
exports["default"] = validateQuestion;
