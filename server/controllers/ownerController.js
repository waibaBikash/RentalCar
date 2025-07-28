import { json } from "express";
import User from "../models/User.js";
import fs from 'fs'
import imagekit from "../configs/imageKit.js";


export const changeRoleToOwner = async (req, res)=>{
  try {
      const {_id} = req.user;
      await User.findByIdAndUpdate(_id, {role: "owner"})
      res.json({success: true, message: "Now you can list cars"})
  } catch (error) {
    console.log(error.message);
    res.json({success: false, message: error.message})

  }
}

// API to List Car

export const addCar = async (req, res)=>{
  try {
     const {_id} = req.user;
     let car = JSON.parse(req.body.carData);
     const imageFile = req.file;
  // Upload Image to ImageKit
     const fileBuffer = fs.readFileSync(imageFile.path);
     const response = await imagekit.upload({
       file: fileBuffer,
       fileName: imageFile.originalname,
       folder: '/cars'
     })

     
  } catch (error) {
    console.log(error.message);
    res.json({success: false, message: error.message})
  }
}