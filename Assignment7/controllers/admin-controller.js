const mongoose = require('mongoose');
const bcrypt=  require('bcryptjs');
const jwt =require('jsonwebtoken');

const HttpError = require('../utils/http-error');

const admin= require("../models/admin");

const adminSignup = async (req,res,next) => {
    const {firstname, lastname, email, password,role}= req.body;

    let hashedPassword;
    try{
        hashedPassword= await bcrypt.hash(password, 14);
    }catch(err){
        const error  = new HttpError("Password encryption failed ", 503);
        return next(error);
    }

    const admin= new admin({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: hashedPassword,
        role: role,
    });
    try {
        await admin.save();
        res.json({'mesaage':"admin signed up"});
      } catch (err) {
        console.log(err);
        const error = new HttpError("Signup failed", 500);
        return next(error);
      }
     

}

const adminLogin = async (req,res,next) => {
    const {email,password}= req.body;

    let existingadmin;
    try{
        existingadmin= await admin.findOne({email:email});
    }catch(err){
        const error  = new HttpError("Login Failed, Please try again later", 507);
        return next(error);
    }
    
    if(!existingadmin){
        const error  = new HttpError("Invalid Credentials, please try again later!", 403);
        return next(error);
    }

    let isValidpassword=false;
    try{
        isValidpassword= await bcrypt.compare(password, existingadmin.password);
    }catch(err){
        const error  = new HttpError("Invalid Credentials, please try again later!", 403);
        return next(error);
    }
    if(!isValidpassword){
        const error  = new HttpError("Invalid Credentials, please try again later!", 403);
        return next(error);
    }
    res.status(200).json({
        firstname: existingadmin.firstname,
        lastname: existingadmin.lastname,
        email : existingadmin.email,
        token :token
    });
}



exports.adminSignup = adminSignup;
exports.adminLogin = adminLogin;