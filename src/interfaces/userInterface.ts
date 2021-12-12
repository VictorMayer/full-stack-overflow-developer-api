interface User {
    name: string,
    class: string,
}

interface NewUser {
    name: string,
    class: number,
    points: number,
    answers: number,
    token: string,
}

export {
    User,
    NewUser,
};
