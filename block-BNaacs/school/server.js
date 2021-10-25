var express=require('express');
var path =require('path');
var app=express();


//set up view engine

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use((req,res,next)=>{

    res.locals.user='Asvindra rajpoot';
    next()
})

app.get('/',(req,res)=>{
    res.render('index')
})


app.listen(2000,()=>{
    console.log('server is listening at port 2000');
})