const mongoose = require('mongoose');




const bookingSchema= new mongoose.Schema({
    user: 
    {
        type: String,
       
    },
    password: 
    {
        type: String,
       
    },
    parentName:
    {
        type:String,
       
    },
    contactNumber:{
        type: String,
        
    },
    email:
    {
        type:String,
       
    },
    address:
    {
        type:String,
       
    },
    childname:
    {
        type:String,
        
    },
    dob:
    {
        type:String,
    
    },
    birthcert:{
        type: String,
        
    },
    aadhar:{
        type:String,
        
    },
    medicalHistory:
    {
        type:String,
        
    },
})



//const collection = new //mongoose.model("kUsers",LogInSchema);
//module.exports = collection
const newBooking = new mongoose.model("bookings",bookingSchema);

