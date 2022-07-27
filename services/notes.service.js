import {saveNotes , getNotes , updateNotes , deleteNotes , getAll} from '../repository/index.js';
import AppError from '../utils/appError.js';


export const saveNotesService = async(data , userID)=>{
    const {title , description} = data;
    try{
        const notes = await saveNotes({userID , title , description});
        return Promise.resolve(notes);
    }catch(err){
        throw new AppError(err.message ,err.status);
    }
};

export const getNotesService = async(id, page)=>{
    try{
        const Limit = 6;
        const startIndex = (Number(page - 1)) * Limit;
        const total = await getAll();
        const notes = await getNotes(id ,page ,Limit ,startIndex,total);
        return Promise.resolve(notes);

    }catch(err){
        throw new AppError(err.message ,err.status);
    }
};

export const updateNotesService = async(id , data)=>{
    try{
        const notes = await updateNotes(id, data);
        return Promise.resolve(notes);

    }catch(err){
        throw new AppError(err.message ,err.status);
    }
};

export const deleteNotesService = async(id)=>{
    try{
        const notes = await deleteNotes(id);
        return Promise.resolve(notes)

    }catch(err){
        throw new AppError(err.message ,err.status);
    }

};


