const mongoose = require('mongoose');

const connectMongoDB = async () =>{
    try{
        await mongoose.connect(process.env.DB_URI);
        console.log('Connected to MongoDB');
    }catch(error){
        console.error('MongoDB connecrtion error:',error);
        process.exit(1);
    }
}

module.exports = connectMongoDB;