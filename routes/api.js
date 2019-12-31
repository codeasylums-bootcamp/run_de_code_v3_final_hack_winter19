const express=require('express');
const router=express.Router();
const mongoose = require('mongoose');

const apimodel=require('../models/apimodels');

router.get('/',function(req,res){
    
    apimodel.find()
    
    .exec()
    .then(product=>{
        res.json(product).status(200);
    })
})


router.get('/:userID',function(req,res){
    console.log("yes")
    const id=req.params.userID;
    var query={username: `${id}`};
    console.log(query);
    apimodel.find(query)
    
    .exec()
    .then(product=>{
        res.json(product).status(200);
    })
    
})


router.post('/',function(req,res){
    console.log(req.body);
   // res.json(req.body).status(200);
   const newapi=new apimodel({
        //_id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        api1 : req.body.api1,
        api2 : req.body.api2,
        api3 : req.body.api3,
        api4 : req.body.api4,
        api5 : req.body.api5,
        api6 : req.body.api6,
        
        

   });
   newapi.save();})


        //    router.delete('/:userID',function(req,res){
        //     var id=req.params.userID;
        //     console.log(id);
        //     console.log('yahan pahuch gye')
        //     apimodel.deleteOne({username:id})
        
        //     .exec()
        //     .then(res=>{
        //         console.log(res)
        //     })
            
        // })

// router.put('/:userID',function(req,res){
//     var id=req.params.userID;
//     apimodel.findByIdAndUpdate(id,{$set : {api1_1: req.body.api1_1 +1}})
// })

           module.exports=router;