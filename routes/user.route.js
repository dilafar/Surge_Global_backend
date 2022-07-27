import express from 'express';
import {registerUserController , loginUserController , updateUserController , deleteUserController ,getUsersController,getSingleUserController} from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.post('/signin', loginUserController);
userRouter.post('/signup',registerUserController);
userRouter.put('/:id',updateUserController);
userRouter.get('/:id', getSingleUserController);
userRouter.get('/',getUsersController);
userRouter.delete('/:id', deleteUserController);


export default userRouter;