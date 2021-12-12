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
    answeredBy: number,
    answer: string,
}

export {
    Question,
    NewQuestion,
};
