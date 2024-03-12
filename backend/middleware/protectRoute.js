import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {

    const token = req.cookies.jwt; //get token from cookie
    
    if (!token) {
      return res
        .status(401)
        .json({ message: "You are not authorized to access this route" });
    } //if token is not present
    
    const decoded = jwt.verify(token, `${process.env.JWT_SECRET_KEY}`); //decoded will contain the payload of the token
    // console.log(decoded);

    if (!decoded) {
      return res
        .status(401)
        .json({ message: "You are not to access this route" });
    } //if token is not valid

    const user = await User.findById(decoded.userId).select("-password"); //get user from the database

    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    req.user = user;

    next(); //if everything is fine, move to the next middleware
  } catch (error) {
    console.log("Error in ProtectRoute Middleware:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default protectRoute;
