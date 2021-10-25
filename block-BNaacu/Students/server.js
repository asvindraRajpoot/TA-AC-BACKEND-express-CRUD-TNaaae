//required
var express=require('express');
var app=express();




//view engines
app.set('view engine','ejs');
app.set('views',__dirname+'/views');






//middlewares
app.use(express.json());
var indexPath=require('./routes/index');
var studentsPath=require('./routes/studentDetail');




//routing middlewares
app.use('/',indexPath);
app.use('/students',studentsPath);










//error handlers
app.use((req,res,next)=>{
    res.send('Page not found');
    next()
})



//listener
app.listen(3000,()=>{
    console.log('server is listening at port 3000');
})