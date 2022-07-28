import jwt from 'jsonwebtoken';
import 'dotenv/config';

export const authenticate = async(req , res , next) =>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        let decodeData;
        if(token){
            decodeData = jwt.verify(token , process.env.JWT_SECRET);
            req.Id = decodeData?.id;
            req.Email = decodeData?.email;
        }

        next();

    }catch(err){
        res.status(401).send("Unauthorized");
    }
};