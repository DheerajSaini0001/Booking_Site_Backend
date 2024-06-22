import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/Booking_Site');

const con=mongoose.connection;

con.on('open',()=>{
    console.log("Connection Sucess");
})