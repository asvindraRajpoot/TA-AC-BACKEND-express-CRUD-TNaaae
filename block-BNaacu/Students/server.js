//required
var express=require('express');
var app=express();




//view engines
app.set('view engine','ejs');
app.set('views',__dirname+'/views');






//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
var indexRouter=require('./routes/index');
var studentsRouter=require('./routes/students');




//routing middlewares
app.use('/',indexRouter);
app.use('/students',studentsRouter);










//error handlers
app.use((req,res,next)=>{
    res.send('Page not found');
    next()
})



//listener
app.listen(3000,()=>{
    console.log('server is listening at port 3000');
})