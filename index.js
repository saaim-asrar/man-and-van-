const express= require('express');
const cors =require('cors');
const path=require('path');

const {readData, writeData} = require('C:/Users/Dr. Misbah/Desktop/projet asdt/backend/shared-service/readWrite.js');
const app= express();
app.use(cors());

app.use(express.json());

app.get('/users',(req,res) =>{
  
    const data=readData();
    res.json(data.users) 
     
}
)
app.post('/users',(req, res)=>{
    const data=readData();
    const newUser =req.body;  // Changed variable name from newStudent to newUser

    newUser.id=Date.now();
    data.users.push(newUser);  // Changed from newStudent to newUser

    writeData(data);
    res.status(201).json({ message: 'Data added successfully', data: newUser }); // Fixed response format
});





app.listen(3004,()=>{console.log('form service is running on port 3004');

})
