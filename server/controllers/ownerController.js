import imagekit from "../configs/imageKit.js";
import Car from "../models/Car.js";
import User from "../models/User.js";
import fs from 'fs'



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
     
     // Optimization through imageKit URL transformation
var optimizedImageUrl = imagekit.url({
    path : response.filePath,
    transformation : [
      {width: 1280},  // Width risizing
      {quality: 'auto'}, // Auto compression
      {format: 'webp'} // Convert to modern format
    ]
});
 
 const image = optimizedImageUrl;
 await Car.create({...car, owner: _id, image})

 res.json({success: true, message: "Car Added"})

     
  } catch (error) {
    console.log(error.message);
    res.json({success: false, message: error.message})
  }
}

// API to list Owner Cars

export const getOwnerCars = async (req, res)=>{
  try {
     const {_id} = req.body;
     const cars = await Car.find({owner: _id})
     res.json({success: true, cars})
  } catch (error) {
    console.log(error.message)
    res.json({success: false, message: error.message})
  }
}

// API to Toggle Car Availability 

export const toggleCarAvailability = async(req, res)=>{
  try {
     const {_id} = req.user;
     const {carId} = req.body;
     const car = await Car.findById(carId)
// Checking is car belongs to the user
if(car.owner.toString() !== _id.toString()){
  return res.json({success: false, message: "Unauthorized"});
}
 car.isAvailable = !car.isAvailable;
 await car.save()

     res.json({success: true, message: "Availability Toggled"})
  } catch (error) {
    console.log(error.message)
    res.json({success: false, message: error.message})
  }
}

// Api to Delete a Car
export const deleteCar = async(req, res)=>{
  try {
     const {_id} = req.user;
     const {carId} = req.body;
     const car = await Car.findById(carId)

// Checking is car belongs to the user
if(car.owner.toString() !== _id.toString()){
  return res.json({success: false, message: "Unauthorized"});
}
 car.owner = null;
 car.isAvailable = false;
 await car.save()

     res.json({success: true, message: "Car Removed"})
  } catch (error) {
    console.log(error.message)
    res.json({success: false, message: error.message})
  }
}