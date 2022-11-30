import jwt from 'jsonwebtoken';
function auth(req,res,next){
    const token=req.header('X-auth')
    if(!token) res.status(401).send("access denied")
    try{
        const decoded=jwt.verify(token,'secret')
        req.user=decoded;
        next();
    }
    catch(error){
        res.status(400).send("invalid token");
    }
}
export default auth;