import express from 'express';
import cors from 'cors';
import * as userController from './controllers/userController';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/health', (req, res) => res.send('OK'));

app.post('/questions');
app.get('/questions/:id');
app.post('/questions/:id');
app.get('/questions');
app.post('/users', userController.newUser);

export default app;
