import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body; //username and password from the request body
    const user = await User.findOne({ username: username }); //find the user with the given username
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    ); //compare the password from the request body with the password of the user found in the database if the user is not found, user will be null, so user?.password will be undefined, so the second argument will be an empty string

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({
        error: "Invalid Username or password",
      });
    } //if the user is not found or the password is incorrect, return an error

    generateTokenAndSetCookie(user._id, res); //generate token and set cookie

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });//return the user data


  } catch (error) {
    console.log("Error Logging In User ", error.message);
    res.status(500).json({
      error: "Internal Server Error",
    });//if there is an error, return an error
  }
};

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password != confirmPassword) {
      return res
        .status(400)
        .json({ message: "Password and Confirm Password do not match" });
    }

    const user = await User.findOne({ username: username });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    //HASH PASSOWRD HERE
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender == "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ message: "Invalid User Data" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const logout = (req, res) => {
  try{
    res.cookie("jwt", "", {maxAge:0});//clear the cookie
    res.status(200).json({message: "Logged Out Successfully"});//return a success message
  }
  catch(error){
    console.log("Error Logging Out User ",error.message);
  }
  console.log("Logout User");
};
