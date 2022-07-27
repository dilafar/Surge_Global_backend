import mongoose from "mongoose";

export const connect = ()=>{
    mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
    });
    mongoose.connection.once('open', ()=>{
        console.log(`MongoDb Connected Successfully`);
    });
};

export const disconnect = (done)=>{
        mongoose.disconnect(done);
}