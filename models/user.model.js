import mongoose from "mongoose";

//import {Schema} from mongoose;

const UserSchema =new mongoose.Schema({

    firstname:{
        type: String,
        required : true,
        trim: true,
    },
    lastname:{
        type: String,
        required : true,
        trim: true,
    },
    email:{
        type: String,
        required : true,
        trim: true,
    },
    dateOfBirth:{
        type: Date,
        required : true
    },
    mobile:{
        type: Number,
        required : true
    },
    status:{
        type: Boolean,
        default: false,
    },
    password:{
        type: String,
        required: true
    },
    accountType:{
        type: String,
        required: true,
        trim: true
    }


});

export const User = mongoose.model("User", UserSchema);