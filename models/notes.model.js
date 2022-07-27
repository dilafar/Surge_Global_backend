import mongoose from "mongoose";

//import {Schema} from mongoose;

const NotesSchema =new mongoose.Schema({

    userID:{
        type: String,
        default: "UnAuthorize ID",
    },
    title:{
        type: String,
        required : true
    },
    description:{
        type: String,
        required : true
    },
   


},
{
    timestamps: true,
}
);

export const Notes = mongoose.model("Notes", NotesSchema);