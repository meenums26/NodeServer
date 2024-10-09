const basicModel = require('../models/basicModel');

const getBasicData = async (req,res)=>{
    try{
     const data = await basicModel.find();
     res.json({data:data});
    }catch(error){
        console.error('Some error occured :',error);
    }
}

module.exports ={
    getBasicData
} 