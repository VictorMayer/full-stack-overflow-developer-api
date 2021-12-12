import { v4 as uuid } from 'uuid';
import { User, NewUser } from '../interfaces/userInterface';
import * as userRepositories from '../repositories/userRespository';

async function saveUser(user: User) {
    const validClass = await userRepositories.checkClass(user.class);
    if (!validClass) return false;

    const points = 0;
    const answers = 0;
    const token = uuid();

    const newUser: NewUser = {
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
