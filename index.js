
const express=require('express');
const morgan=require('morgan');
const parser= require('body-parser');
const mongoose=require('mongoose');
const app=express();
const port=3001;

mongoose.connect("",function(err){
    if(err){
        console.log("error");
    }
    else {
        console.log('Atlas connected')
    }
});

const users=require('./routes/user');
const api=require('./routes/api');
const api_2=require('./routes/api_2');
const api_3=require('./routes/api_3');
const api_4=require('./routes/api_4');
const api_5=require('./routes/api_5');
const api_6=require('./routes/api_6');
const api_7=require('./routes/api_7');


app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({entended:true}));
app.use('*',function(req,res,next){
    res.set('Access-Control-Allow-Origin','*');
    res.set('Access-Control-Allow-Headers','content-type');
    res.set('Access-Control-Allow-Methods','*');
    next();
});

app.use('/users',users);
app.use('/api',api);
app.use('/api_2',api_2);
app.use('/api_3',api_3);
app.use('/api_4',api_4);
app.use('/api_5',api_5);
app.use('/api_6',api_6);
app.use('/api_7',api_7);




app.listen(port,function()
    {
        console.log(`Server is listening on ${port}`);
    }
);
