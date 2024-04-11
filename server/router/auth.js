const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
require("../db/conn");
const User = require("../model/userschema");
const Blend = require("../models/Blend")
// const Blendss =require("../model/blendsSchema")
const Laptop = require("../model/laptopSchema");
router.get("/",(req,res)=>{
    res.send("Hello world from router.js");
})

// Blend Schema info
router.get("/blend", async (req, res) => {
  try {
    // Retrieve blend data from MongoDB
    const blend = await Blend.find();
    const Blender = blend.map(blends => ({
      title: blends.title,
      price: blends.price,
      downloads: blends.downloads,
      likes: blends.likes,
      date: blends.createdAt,
      count: blends.count,
      description: blends.description,
    }));
    
    res.json(Blender);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//user registration
router.post("/register",async (req,res)=>{
   const {name, email, phone, work, password, cpassword} = req.body;
   if(!name || !email || !phone  || !work  || !password  ||  !cpassword){
    return res.status(422).json({err: "plz fill the required field"});
   }
try{
    const userExist = await User.findOne({email:email});
    if(userExist){
        res.status(422).json({err: "email already exist"});
    }else if(password != cpassword){
        res.status(422).json({err: "password not matching"});
    }else{
        const user = new User({name, email, phone, work, password, cpassword});
        //add password in hash before save
    
        await user.save();
        res.status(201).json({message:"user register successfully"});
    }
   
}catch(err){
        console.log(err);
    }

})



//login route
router.post("/login",async(req,res)=>{
    try{
        const {email, password} = req.body;
        if(!email || !password  ){
            return res.status(400).json({err: "plz fill the required field"});
           }
       const userLogin = await User.findOne({email:email});
       if(userLogin){
        const isMatch = await bcrypt.compare(password,userLogin.password);
       
       //console.log(userLogin);
       if(!isMatch){
        res.status(400).json({error:"Invalid"}); 
       }
       else{
        res.json({message:"user login successfully",  name: userLogin.name, userInfo: userLogin });
       }
 
       }else{
        res.status(400).json({error:"Invalid credentials"}); 
       }
    }
       
    catch(err){
        res.status(500).json({err: "failed to login"});
    }

})



//User info table 
router.get("/user", async (req, res) => {
  try {
      const users = await User.find({});
      res.send(`
          <table border="1">
              <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Work</th>
              </tr>
              ${users.map(user => `
                  <tr>
                      <td>${user.name}</td>
                      <td>${user.email}</td>
                      <td>${user.phone}</td>
                      <td>${user.work}</td>
                  </tr>
              `).join('')}
          </table>
      `);
  } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error.");
  }
});

// Laptop Schema info
router.get('/laptop', async (req, res) => {
    try {
      // Retrieve data from MongoDB
      const laptops = await Laptop.find().limit(10); // Limit to 10 documents
      
      // Convert data to JSON format with image URLs
      const laptopsWithImageUrls = laptops.map(laptop => ({
        title: laptop.title,
        price: laptop.price,
        count: laptop.count,
        description: laptop.description,
        imageUrl: `data:image/jpeg;base64,${laptop.data.toString('base64')}`
      }));
      
      // Send laptop data as JSON
      res.json(laptopsWithImageUrls);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });



  //lol
  router.get('/lol', async (req, res) => {
    try {
      // Retrieve data from MongoDB
      const laptops = await Laptop.find().limit(10); // Limit to 10 documents
      
      // Render the data in a HTML page
      res.send(`
        <html>
        <head>
          <title>Laptops</title>
        </head>
        <body>
          <h1>List of Laptops</h1>
          <ul>
            ${laptops.map(laptop => `
              <li>
                <h2>${laptop.title}</h2>
                <p>Price: ${laptop.price}</p>
                <p>Count: ${laptop.count}</p>
                <p>Description: ${laptop.description}</p>
                <img src="data:image/jpeg;base64,${laptop.data.toString('base64')}"/>
              </li>
            `).join('')}
          </ul>
        </body>
        </html>
      `);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  });

module.exports = router;