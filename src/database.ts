import pg from 'pg';

const { Pool } = pg;

const databaseConnection = {
    user: 'postgres',
    password: '123456',
    host: 'localhost',
    port: 5432,
    database: 'full-stack-overflow-developer',
};

const connection = new Pool(databaseConnection);

export default connection;
