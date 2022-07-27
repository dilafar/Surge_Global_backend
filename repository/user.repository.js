import {User} from '../models/index.js';
import AppError from '../utils/appError.js';

export const saveUser =(data)=>
    User.create(data).then((user)=>{
        return Promise.resolve(user);
    })
    .catch(()=>{
        throw new AppError("Internal Server Error.", 500);
    });

    
export const updateUser = (id , data)=>
    User.findByIdAndUpdate(id , data , {new: true}).then((user)=>{
        if(!user){
            throw new AppError("User Not Found", 404);
        }
        return Promise.resolve(user);
    })
    .catch(()=>{
        throw new AppError("Internal Server Error.", 500);
    })


export const deleteUser = (id)=>
    User.findByIdAndDelete(id).then((user)=>{
        if(!user){
            throw new AppError("User Not Found", 404);
        }
        return Promise.resolve(user);
    })
    .catch(()=>{
        throw new AppError("Internal Server Error.", 500);
    })


export const getUserByEmail = (email)=>
    User.findOne({email}).then((user)=>{
        return Promise.resolve(user);
    })
    .catch(()=>{
        throw new AppError("Internal Server Error.", 500);
    })


export const getAllUsers = (page,Limit,startIndex,total)=>
    User.find().sort({_id: -1}).limit(Limit).skip(startIndex).then((users)=>{
        return Promise.resolve({data: users , currentPage: Number(page), numberOfPages: Math.ceil(total/Limit) });
    })
    .catch(()=>{
        throw new AppError("Internal Server Error.", 500);
    })


export const getUserById = (id)=>
    User.findById(id).then((user)=>{
        if(!user){
            throw new AppError("User Not Found", 404);
        }
        return Promise.resolve(user);
    })
    .catch(()=>{
        throw new AppError("Internal Server Error.", 500);
    })



export const getAllUserCount = ()=>
    User.countDocuments({}).then((num)=>{
        return Promise.resolve(num);
    })
    .catch(()=>{
        throw new AppError("Internal Server Error" , 500);
    })