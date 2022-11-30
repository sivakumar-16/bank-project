import mongoose from "mongoose";
import Joi from "joi";
const BankSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    emailId:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    mobileNo:{
        type:Number,
        required:true
    },
    deposite:{
        type:Number,
        default:0
    },
    withdraw:{
        type:Number,
        default:0
    },
    balance:{
        type:Number,
        default:0
    },
    isUser:{
        type:Boolean,
        default:true
    }

})

const Bank=mongoose.model('Bank',BankSchema);

const validateCustomer= (value) => {
    const schema = Joi.object({
      name: Joi.string().min(3),
      emailId: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
      password: Joi.string().required().min(4),
      mobileNo:Joi.number().required(),
      deposite:Joi.number(),
      withdraw:Joi.number()


    });
    const result = schema.validate(value)
  
    return result  
  };


//get all student data


export {Bank,validateCustomer};