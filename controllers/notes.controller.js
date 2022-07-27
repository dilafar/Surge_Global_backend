import {saveNotesService , updateNotesService , deleteNotesService , getNotesService} from '../services/index.js';
import Success from '../utils/success.js'

export const saveNotesController = async(req , res)=>{
    try{
        const userID =  req.Id;
        const notes = await saveNotesService(req.body , userID);
        res.json(Success(notes ," Successfully Created Notes."));

    }catch(err){
        res.status(err.status).json(err.message);
    }
    
};

export const getNotesController = async(req , res)=>{
    const {page} = req.query;
    try{
        const userID =  req.Id;
        const notes = await getNotesService(userID,page);
        res.json(Success(notes , "Successfully Fetched Notes."));

    }catch(err){
        res.status(err.status).json(err.message);
    }
};

export const updateNotesController = async(req , res)=>{
    try{
        const notes = await updateNotesService(req.params.id , req.body);
        res.json(Success(notes , "Successfully Updated Notes."));

    }catch(err){
        res.status(err.status).json(err.message);
    }
};

export const deleteNotesController = async(req, res)=>{
    try{
        const notes = await deleteNotesService(req.params.id);
        res.json(Success(notes , "Successfully Deleted Notes."));

    }catch(err){
        res.status(err.status).json(err.message);
    }
};