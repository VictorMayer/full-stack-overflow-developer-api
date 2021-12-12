import express from 'express';
import cors from 'cors';
import * as userController from './controllers/userController';
import * as questionController from './controllers/questionController';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/health', (req, res) => res.send('OK'));

app.post('/questions', questionController.newQuestion);
app.get('/questions/:id', questionController.getQuestion);
app.post('/questions/:id');
app.get('/questions');
app.post('/users', userController.newUser);

export default app;
