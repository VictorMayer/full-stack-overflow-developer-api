"use strict";
exports.__esModule = true;
var joi_1 = require("joi");
function specifyError(error) {
    switch (error) {
        case 'name':
            return 'Nome deve ser inserido corretamente';
        case 'class':
            return 'Turma inválida';
        default:
            return null;
    }
}
function validateUser(user) {
    var userSchema = joi_1["default"].object({
        name: joi_1["default"].string().required(),
        "class": joi_1["default"].string().required()
    });
    if (userSchema.validate(user).error) {
        return specifyError(userSchema.validate(user).error.details[0].context.key);
    }
    return false;
}
exports["default"] = validateUser;
