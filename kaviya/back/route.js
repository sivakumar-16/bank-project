import express from "express";
import bodyParser from 'body-parser';
import { getAll, bankLogin, newCustomer, updateDeposite, updateWithdraw } from "./controller.js";
import auth from "./auth.js";
import Bank from "./bank.js";

const App=express();
App.use(bodyParser.json())
App.use(bodyParser.urlencoded({extended:true}))
App.use(bodyParser.text())
const router=express.Router();

//register route
router.post('/register',newCustomer);
router.post('/login',bankLogin);
router.get('/get/:emailId',auth,Bank,getAll)
router.post('/update',auth,Bank,updateDeposite)
router.post('/withdraw',auth,Bank,updateWithdraw)
router.get('/getall',getAll)
export default router;
    


