import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {
    saveUser,
    updateUser,
    deleteUser,
    getAllUsers,
    getUserById,
    getUserByEmail,
    getAllUserCount
} from '../repository/index.js';
import AppError from '../utils/appError.js';
import {registerValidation} from '../validations/index.js';

export const loginService = async(data)=>{
    const {email , password} = data;
    try{
        const user = await getUserByEmail(email);
        if(!user){
            throw new AppError("User does not exist.",404);
        }else{
            const ispasswordMatch = await bcrypt.compare(password , user.password);
            if(!ispasswordMatch){
                throw new AppError("Incorrect email or password.", 400);
            }else{
                const token = jwt.sign(
                    {email:user.email , id:user._id},
                    'test',
                    {expiresIn:"3h"}
                );

                return Promise.resolve({result:user , token});
            }
        }

    }catch(err){
        throw new AppError(err.message , err.status);
    }
};


export const registerService = async(data)=>{
    const {firstname , lastname , email , dateOfBirth , mobile, status ,password , confirmpassword , accountType} = data;
    try{
        const { error } = registerValidation.validate({firstname , lastname , email , dateOfBirth , mobile,status ,password, accountType});
        if(error){
            throw new AppError(error.details[0].message,400);
        }
        const user = await getUserByEmail(email);
        if(user){
            throw new AppError("User Already exists.",400);
        }
        if(password !== confirmpassword){
            throw new AppError("Password don't match.",400);
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        const newuser = {
            firstname , lastname , email , dateOfBirth , mobile , status , password : hashedPassword , accountType
        }
        const result = await saveUser(newuser);
        const token = jwt.sign(
            {email:result.email , id:result._id},
            'test',
            {expiresIn:"3h"}
        );
        return Promise.resolve({ result , token});

    }catch(err){
        throw new AppError(err.message , err.status);
    }
};

export const deleteUserService = async(id)=>{
    try{
        const user = await getUserById(id);
        if(!user){
            throw new AppError("User does not exist.",404);
        }else{
            const deleted = await deleteUser(id);
            if(!deleted){
                throw new AppError("Delete Failed",400);
            }else{
                return Promise.resolve(deleted);
            }
        }
    }catch(err){
        throw new AppError(err.message , err.status);
    }
};


export const updateUserService = async(id , data)=>{
    const {firstname , lastname , email , dateOfBirth , mobile  , accountType} = data;
    try{
        const user = await updateUser(id , {firstname , lastname , email , dateOfBirth , mobile  , accountType});
        if(!user){
            throw new AppError("User update failed.",400)
        }else{
            return Promise.resolve(user);
        }

    }catch(err){
        throw new AppError(err.message , err.status);
    }


};


export const getUsersService = async(page)=>{
    try{
        const Limit = 6;
        const startIndex = (Number(page - 1)) * Limit;
        const total = await getAllUserCount();
        const users = await getAllUsers(page,Limit,startIndex,total);
        return Promise.resolve(users);
    }catch(err){
        throw new AppError(err.message , err.status);
    }
};

export const getSingleUserService = async(id)=>{
    try{
        const user = await getUserById(id);
        if(!user){
            throw new AppError("User does not exist.",404);
        }else{
            return Promise.resolve(user);
        }
    }catch(err){
        throw new AppError(err.message , err.status);
    }
}
