import Joi from 'joi';

export const registerValidation = Joi.object({
    
        firstname: Joi.string().alphanum().min(3).max(25).trim(true).required(),
        lastname: Joi.string().alphanum().min(3).max(25).trim(true).required(),
        email: Joi.string().email().trim(true).required(),
        dateOfBirth: Joi.date().required(),
        mobile: Joi.number().required(),
        status: Joi.boolean().default(false),
        password: Joi.string().required(),
        accountType: Joi.string().required()
    
});

export const loginValidation = Joi.object({
    
   
    email: Joi.string().email().trim(true).required(),
    password: Joi.string().required(),
  

});
