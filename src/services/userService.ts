import { v4 as uuid } from 'uuid';
import * as userRepositories from '../repositories/userRespository';

interface User {
    name: string,
    class: string,
}

async function saveUser(user: User) {
    const validClass = await userRepositories.checkClass(user.class);
    if (!validClass) return false;

    const points = 0;
    const answers = 0;
    const token = uuid();

    const newUser = {
        name: user.name,
        class: validClass,
        points,
        answers,
        token,
    };

    const result = await userRepositories.createUser(newUser);
    return result;
}

export {
    // eslint-disable-next-line import/prefer-default-export
    saveUser,
};
