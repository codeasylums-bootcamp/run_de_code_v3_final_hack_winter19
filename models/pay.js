const mongoose=require('mongoose');
const paySchema= mongoose.Schema({
    
    version: {type:Number},
  accountBalanceAmount: {type:Number},
  accountCurrencyCode: {type:String},
  lowBalanceAlert: {type:String}

});

module.exports= mongoose.model('pay',paySchema);