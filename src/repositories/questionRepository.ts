import connection from '../database';
import { NewQuestion } from '../interfaces/questionInterface';

async function getStudent(student: string) {
    const result = await connection.query(`
        SELECT * FROM students WHERE name = $1
    `, [student]);

    if (result.rows.length) return result.rows[0].id;

    return false;
}

async function getClass(classGroup: string) {
    const result = await connection.query(`
        SELECT * FROM classes WHERE name = $1
    `, [classGroup]);

    if (result.rows.length) return result.rows[0].id;

    return false;
}

async function createQuestion(q: NewQuestion) {
    const result = await connection.query(`
        INSERT INTO questions
            (question, "studentId", "classId", tags, "submitAt", answered, "answeredAt", "answeredBy", answer)
        VALUES
            ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        RETURNING ID
    `, [q.question, q.student, q.class, q.tags, q.submitAt, q.answered, q.answeredAt, q.answeredBy, q.answer]);

    if (result.rows.length) return result.rows[0].id;

    return false;
}

async function getQuestionById(id: string) {
    const result = await connection.query(`
        SELECT 
            questions.id, questions.question, questions."studentId" AS student, questions."classId" AS class, 
            questions.tags, questions."submitAt", questions.answered, questions."answeredAt", 
            questions."answeredBy", questions.answer, students.name AS student, classes.name AS class
        FROM 
            questions JOIN students
        ON 
            questions."studentId" = students.id
        JOIN
            classes
        ON
            questions."classId" = classes.id
        WHERE 
            questions.id = $1
    `, [id]);
    if (!result.rows.length) return false;

    return result.rows[0];
}

export {
    getStudent,
    getClass,
    createQuestion,
    getQuestionById,
};
