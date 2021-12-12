import express from 'express';
import cors from 'cors';
import authorizate from './middlewares/authorizate';
import * as userController from './controllers/userController';
import * as questionController from './controllers/questionController';

const app = express();
app.use(express.json());
app.use(cors());

// Check server status
app.get('/health', (req, res) => res.send('OK'));

// Post new question
app.post('/questions', questionController.newQuestion);

// Get question by ID
app.get('/questions/:id', questionController.getQuestion);

// Answer question
app.post('/questions/:id', authorizate, questionController.answerQuestion);

// List all unanswered questions
app.get('/questions', questionController.listUnanswered);

// Register user
app.post('/users', userController.newUser);

export default app;
