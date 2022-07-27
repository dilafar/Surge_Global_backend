import express from 'express';
import {saveNotesController , updateNotesController , deleteNotesController , getNotesController} from '../controllers/index.js';
import {authenticate} from '../middleware/auth.middleware.js';

const notesRouter = express.Router();


notesRouter.post('/add', authenticate , saveNotesController);
notesRouter.delete('/:id', deleteNotesController);
notesRouter.put('/:id', updateNotesController);
notesRouter.get('/', authenticate , getNotesController);

export default notesRouter;

