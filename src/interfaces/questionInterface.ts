interface Question {
    question: string,
    student: string,
    class: string,
    tags: string,
}

interface NewQuestion {
    question: string,
    student: string,
    class: string,
    tags: string,
    submitAt: string,
    answered: boolean,
    answeredAt: string,
    answeredBy: string,
    answer: string,
}

interface NewAnswer {
    answered: boolean,
    answeredAt: string,
    answeredBy: string,
    answer: string,
}

export {
    Question,
    NewQuestion,
    NewAnswer,
};
