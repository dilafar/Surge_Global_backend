import {registerService , loginService , deleteUserService , updateUserService , getUsersService , getSingleUserService} from '../services/index.js';
import Success from '../utils/success.js';


export const registerUserController = async(req , res)=>{
    try{
        const user = await registerService(req.body);
        res.json(Success(user,"Successfully registered."));

    }catch(err){
        res.status(err.status).json(err.message);
    }
};


export const loginUserController = async(req , res)=>{
    try{
        const user = await loginService(req.body);
        res.json(Success(user,"Successfully logged in."));

    }catch(err){
        res.status(err.status).json(err.message);
    }
};


export const updateUserController = async(req , res)=>{
    try{
        const user = await updateUserService(req.params.id , req.body);
        res.json(Success(user,"User Updated Successfully."));

    }catch(err){
        res.status(err.status).json(err.message);
    }
};


export const deleteUserController = async(req , res)=>{
    try{
        const user = await deleteUserService(req.params.id);
        res.json(Success(user,"User Deleted Successfully."));

    }catch(err){
        res.status(err.status).json(err.message);
    }
};


export const getUsersController = async(req , res)=>{
    const {page} = req.query;
    try{
        const users = await getUsersService(page);
        res.json(Success(users,"Users fetched Successfully."));

    }catch(err){
        res.status(err.status).json(err.message);
    }
};

export const getSingleUserController = async(req , res)=>{
    try{
        const user = await getSingleUserService(req.params.id);
        res.json(Success(user,"User fetched Successfully."));

    }catch(err){
        res.status(err.status).json(err.message);
    }
}

export const updateUserStatusController = async(req , res)=>{
    try{
        const user = await updateUserService(req.params.id , req.body);
        res.json(Success(user,"User Updated Successfully."));

    }catch(err){
        res.status(err.status).json(err.message);
    }
};