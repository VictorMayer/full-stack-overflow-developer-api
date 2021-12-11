import connection from '../database';

interface NewUser {
    name: string,
    class: number,
    points: number,
    answers: number,
    token: string,
}

async function checkClass(classGroup: string) {
    const result = await connection.query('SELECT * FROM classes WHERE name = $1', [classGroup]);
    if (result.rows.length) return result.rows[0].id;
    return false;
}

async function createUser(user: NewUser) {
    const { name, points, answers, token } = user;

    const result = await connection.query(`
        INSERT INTO students 
            (name, "classId", points, answers, token)
        VALUES
            ($1, $2, $3, $4, $5)
        RETURNING *
    `, [name, user.class, points, answers, token]);

    console.log(result);
    return result.rows[0].token;
}

export {
    checkClass,
    createUser,
};
