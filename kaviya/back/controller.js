import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Bank ,validateCustomer} from './model.js';

//register data in collection
const newCustomer=(req,res)=>{  
    const {error}=validateCustomer(req.body)
    if (error){
        return res.status(400).send(error.details[0].message);
    }


    const saltRoute=10;
    bcrypt.hash(req.body.password,saltRoute,function(err,hash){
        var newUser={            
            name:req.body.name ,
            emailId:req.body.emailId,
            password:hash,
            mobileNo:req.body.mobileNo,
        
        }
    
async function createUser(){
       
         try {
            var existingUser=await Bank.findOne({emailId: newUser.emailId })
            // console.log(existingUser);                   

             if(!existingUser){
             var user=await Bank.insertMany([newUser])
             res.status(200).send(user);}
             
            else{
                res.status(400).send("User can already exist!")}
            }
        catch (error) {
            res.status(400).send(error.message)
         }
}createUser();})

}  


//login
const bankLogin=async(req,res)=>{
      
               
                 try {
                    var existingUser=await Bank.findOne({ emailId: req.body.emailId })
                    // console.log(existingUser);
                    if(existingUser)
                    {
                    bcrypt.compare(req.body.password,existingUser.password,function(err,result){
                        if(result){
                        const token= jwt.sign({_id:existingUser._id,isUser:existingUser.isUser,emailId:existingUser.emailId},'secret')
                        return res.header('x-auth',token).status(200).send(token);
                        
                        }
                        if(!result){
                        return    res.status(400).send("invalid password");
                          
                        }
                    })
                    }
                    
                    if(!existingUser){
                    return   res.status(400).send("invalid email");}
                                  
    
                }
                catch (error) {
                   return res.status(400).send(error.message)
                 }
      
    
}


//update accept/decline by warden
const updateDeposite=async (req,res)=>{  
      
   
    try {
        let updatereg=await  Bank.find({emailId:req.user.emailId})
        // console.log(updatereg[0].deposite)
        if(updatereg.length<=0) return res.status(400).send('There is no user with this emailID')             
            let fbal=Number(updatereg[0].balance)
            const value=Number(req.body.deposite);
            const add=value+fbal;
            console.log(value);
                const update=await  Bank.findOneAndUpdate({emailId:req.user.emailId},{$set:{deposite:add,balance:add}},{new:true})
        return res.status(200).send(update)
    } 

         catch (error) {
        return res.status(400).send(error.message)
    }
}
//update accept/decline by warden
const updateWithdraw=async (req,res)=>{  
      
   
    try {
        let updatereg=await  Bank.find({emailId:req.user.emailId})
        // console.log(updatereg[0].withdraw)
        if(updatereg.length<=0){
            
            return res.status(400).send('There is no user with this emailID')}                
                
        if(updatereg.length>=0){
            const value=Number(req.body.withdraw);
            if(value<updatereg[0].balance)
            {
            const sub=Number(updatereg[0].balance)-Number(value);
                const update=await  Bank.findOneAndUpdate({emailId:req.user.emailId},{$set:{withdraw:sub,balance:sub}},{new:true})
        return res.status(200).send(update)
            }
            else{
                res.status(400).send('You do not have a sufficent balance to withdraw');
            }
    } 
    }
         catch (error) {
        return res.status(400).send(error.message)
    }}

//get all student
//view all students
const getAll=(req,res)=>{
    async function Data(){
       
    try{
       
        // console.log(req.user.hostelName);
        
       const result=await Bank.find().select('-password')
         return   res.status(200).send(result);
       

    }
    catch (error) {
      return  res.status(400).send(error.message)
     }
}
Data();
}
export {newCustomer,bankLogin,updateDeposite,updateWithdraw,getAll}
