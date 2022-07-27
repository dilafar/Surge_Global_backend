import {Notes} from '../models/index.js';
import AppError from '../utils/appError.js';


export const saveNotes = (data)=>
    Notes.create(data).then((notes)=>{
        return Promise.resolve(notes);
    })
    .catch(()=>{
        throw new AppError("Internal Server Error" , 500);
    });

export const updateNotes = (id , data)=>
    Notes.findByIdAndUpdate(id , data , {new: true}).then((notes)=>{
        if(!notes){
            throw new AppError("Notes Not Found", 404);
        }
        return Promise.resolve(notes)
    })
    .catch(()=>{
        throw new AppError("Internal Server Error" , 500);
    });

export const deleteNotes =(id)=>
    Notes.findByIdAndDelete(id).then((notes)=>{
        if(!notes){
            throw new AppError("Notes Not Found", 404);
        }
        return Promise.resolve(notes);
    })
    .catch(()=>{
        throw new AppError("Internal Server Error" , 500);
    });

export const getNotes = (id , page ,Limit ,startIndex,total)=>
    
    Notes.find({userID : id}).sort({_id: -1}).limit(Limit).skip(startIndex).then((notes)=>{
       
        return Promise.resolve({data: notes , currentPage: Number(page), numberOfPages: Math.ceil(total/Limit) });
    })
    .catch(()=>{
        throw new AppError("Internal Server Error" , 500);
    })


export const getAll = ()=>
    Notes.countDocuments({}).then((num)=>{
        return Promise.resolve(num);
    })
    .catch(()=>{
        throw new AppError("Internal Server Error" , 500);
    })
