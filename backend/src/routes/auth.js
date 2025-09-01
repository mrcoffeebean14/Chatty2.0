import express from "express";
import { signup,login,logout,onboard } from "../controller/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const Route = express.Router();

Route.post("/signup",signup);
Route.post("/login",login);
Route.post("/logout",logout);
Route.post("/onboarding",protectRoute,onboard)
//check user log or not
Route.get('/me',protectRoute,(req,res)=>{
    res.status(200).json({success:true,user:req.user});
})

export default Route;