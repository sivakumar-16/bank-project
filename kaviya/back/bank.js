import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
function Bank(req, res, next) {
  // console.log('hi')
  // console.log(req.user.isCashier);
  if (req.user.isUser === false) return res.status(403).send("access denied");
  if (!req.user.isUser === false) {
    next();
  }
}
export default Bank;
