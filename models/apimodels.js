const mongoose=require('mongoose');
const apiSchema= mongoose.Schema({
    
    username: {type: String, required:true},
    api1: {type:Number},
    api2: {type:Number},
    api3: {type:Number},
    api4: {type:Number},
    api5: {type:Number},
    api6: {type:Number},
    
});

module.exports= mongoose.model('api',apiSchema);