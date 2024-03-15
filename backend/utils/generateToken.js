import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId,res) => {
    //generate token
    const token = jwt.sign({userId
    }, process.env.JWT_SECRET_KEY, {
        // expiresin: "30d",
    });

    res.cookie("jwt",token,{

        maxAge: 15*24*60*60*1000,
        httpOnly: true, //cookie cannot be accessed or modified by the browser
        sameSite : "strict", //cookie will only be sent in a first-party context
        secure: false
    })
}

export default generateTokenAndSetCookie;