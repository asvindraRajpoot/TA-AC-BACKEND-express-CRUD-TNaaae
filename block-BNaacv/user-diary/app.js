var express=require('express');
var app =express();




//view engine
app.set('view engine','ejs');
app.set('views',__dirname+'/views');

app.use(express.json());
app.use(express.urlencoded({extended:false}));





//router middlewares

var indexRouter=require('./routes/index');
var usersRouter=require('./routes/users');

app.use('/',indexRouter);
app.use('/users',usersRouter);















//error handler
app.use((req,res,next)=>{
    res.send('Page not found');
    next();
})


app.listen(3000,()=>{
    console.log('server is listening at port 3000');
})