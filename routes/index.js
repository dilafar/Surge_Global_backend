import express from 'express';
import notesRouter from './notes.route.js';
import userRouter from './user.route.js';

const apiRouter = express.Router();

apiRouter.use('/notes', notesRouter);
apiRouter.use('/user',userRouter);

export default apiRouter;